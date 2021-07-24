import { zoom, zoomIdentity } from 'd3-zoom';
import { select, pointer } from 'd3-selection';

import { clamp } from '../../utils';
import { FlowTransform, TranslateExtent, PanOnScrollMode, KeyCode, RevueFlowStore } from '../../types';
import { defineComponent, inject, PropType, ref, watchEffect } from 'vue';
import useKeyPress from '../../hooks/useKeyPress';
import useResizeHandler from '../../hooks/useResizeHandler';

interface ZoomPaneProps {
  selectionKeyPressed: boolean;
  elementsSelectable?: boolean;
  zoomOnScroll?: boolean;
  zoomOnPinch?: boolean;
  panOnScroll?: boolean;
  panOnScrollSpeed?: number;
  panOnScrollMode?: PanOnScrollMode;
  zoomOnDoubleClick?: boolean;
  paneMoveable?: boolean;
  defaultPosition?: [number, number];
  defaultZoom?: number;
  translateExtent?: TranslateExtent;
  onMove?: (flowTransform?: FlowTransform) => void;
  onMoveStart?: (flowTransform?: FlowTransform) => void;
  onMoveEnd?: (flowTransform?: FlowTransform) => void;
  zoomActivationKeyCode?: KeyCode;
}

const viewChanged = (prevTransform: FlowTransform, eventTransform: any): boolean =>
  prevTransform.x !== eventTransform.x || prevTransform.y !== eventTransform.y || prevTransform.zoom !== eventTransform.k;

const eventToFlowTransform = (eventTransform: any): FlowTransform => ({
  x: eventTransform.x,
  y: eventTransform.y,
  zoom: eventTransform.k
});

const ZoomPane = defineComponent({
  props: {
    onMove: {
      type: Function as unknown as PropType<ZoomPaneProps['onMove']>,
      required: false,
      default: () => {}
    },
    onMoveStart: {
      type: Function as unknown as PropType<ZoomPaneProps['onMoveStart']>,
      required: false,
      default: () => {}
    },
    onMoveEnd: {
      type: Function as unknown as PropType<ZoomPaneProps['onMoveEnd']>,
      required: false,
      default: () => {}
    },
    zoomOnScroll: {
      type: Boolean as PropType<ZoomPaneProps['zoomOnScroll']>,
      required: false,
      default: true
    },
    zoomOnPinch: {
      type: Boolean as PropType<ZoomPaneProps['zoomOnPinch']>,
      required: false,
      default: true
    },
    panOnScroll: {
      type: Boolean as PropType<ZoomPaneProps['panOnScroll']>,
      required: false,
      default: false
    },
    panOnScrollSpeed: {
      type: Number as PropType<ZoomPaneProps['panOnScrollSpeed']>,
      required: false,
      default: 0.5
    },
    panOnScrollMode: {
      type: String as PropType<ZoomPaneProps['panOnScrollMode']>,
      required: false,
      default: PanOnScrollMode.Free
    },
    zoomOnDoubleClick: {
      type: Boolean as PropType<ZoomPaneProps['zoomOnDoubleClick']>,
      required: false,
      default: true
    },
    selectionKeyPressed: {
      type: Boolean as PropType<ZoomPaneProps['selectionKeyPressed']>,
      required: false,
      default: undefined
    },
    elementsSelectable: {
      type: Boolean as PropType<ZoomPaneProps['elementsSelectable']>,
      required: false,
      default: undefined
    },
    paneMoveable: {
      type: Boolean as PropType<ZoomPaneProps['paneMoveable']>,
      required: false,
      default: true
    },
    defaultPosition: {
      type: Array as unknown as PropType<ZoomPaneProps['defaultPosition']>,
      required: false,
      default: () => [0, 0]
    },
    defaultZoom: {
      type: Number as PropType<ZoomPaneProps['defaultZoom']>,
      required: false,
      default: 1
    },
    translateExtent: {
      type: Array as unknown as PropType<ZoomPaneProps['translateExtent']>,
      required: false,
      default: undefined
    },
    zoomActivationKeyCode: {
      type: [Number, String] as PropType<ZoomPaneProps['zoomActivationKeyCode']>,
      required: false,
      default: undefined
    }
  },
  setup(props, { slots }) {
    const store = inject<RevueFlowStore>('store')!;
    const zoomPane = ref<HTMLDivElement | null>(null);
    const prevTransform = ref<FlowTransform>({ x: 0, y: 0, zoom: 0 });
    const zoomActivationKeyPressed = useKeyPress(props.zoomActivationKeyCode);

    watchEffect(() => {
      if (zoomPane.value) useResizeHandler(zoomPane.value, store.updateSize);
    });

    watchEffect(() => {
      if (zoomPane.value && props.defaultPosition && props.defaultZoom) {
        const currentTranslateExtent =
          typeof props.translateExtent !== 'undefined' ? props.translateExtent : store.translateExtent;
        const d3ZoomInstance = zoom().scaleExtent([store.minZoom, store.maxZoom]).translateExtent(currentTranslateExtent);
        const selection = select(zoomPane.value as Element).call(d3ZoomInstance);

        const clampedX = clamp(props.defaultPosition[0], currentTranslateExtent[0][0], currentTranslateExtent[1][0]);
        const clampedY = clamp(props.defaultPosition[1], currentTranslateExtent[0][1], currentTranslateExtent[1][1]);
        const clampedZoom = clamp(props.defaultZoom, store.minZoom, store.maxZoom);
        const updatedTransform = zoomIdentity.translate(clampedX, clampedY).scale(clampedZoom);

        d3ZoomInstance.transform(selection, updatedTransform);

        store.initD3Zoom({
          d3Zoom: d3ZoomInstance,
          d3Selection: selection,
          d3ZoomHandler: selection.on('wheel.zoom'),
          // we need to pass transform because zoom handler is not registered when we set the initial transform
          transform: [clampedX, clampedY, clampedZoom]
        });
      }
    });

    watchEffect(() => {
      if (store.d3Selection && store.d3Zoom) {
        if (props.panOnScroll && zoomActivationKeyPressed) {
          store.d3Selection
            .on('wheel', (event: any) => {
              event.preventDefault();
              event.stopImmediatePropagation();

              const currentZoom = store.d3Selection?.property('__zoom').k || 1;

              if (event.ctrlKey && props.zoomOnPinch) {
                const point = pointer(event);
                // taken from https://github.com/d3/d3-zoom/blob/master/src/zoom.js
                const pinchDelta = -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * 10;
                const zoom = currentZoom * Math.pow(2, pinchDelta);
                if (store.d3Selection) store.d3Zoom?.scaleTo(store.d3Selection, zoom, point);

                return;
              }

              // increase scroll speed in firefox
              // firefox: deltaMode === 1; chrome: deltaMode === 0
              const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
              const deltaX = props.panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
              const deltaY = props.panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;

              if (store.d3Selection && props.panOnScrollSpeed)
                store.d3Zoom?.translateBy(
                  store.d3Selection,
                  -(deltaX / currentZoom) * props.panOnScrollSpeed,
                  -(deltaY / currentZoom) * props.panOnScrollSpeed
                );
            })
            .on('wheel.zoom', null);
        } else if (typeof store.d3ZoomHandler !== 'undefined') {
          store.d3Selection.on('wheel', null).on('wheel.zoom', store.d3ZoomHandler);
        }
      }
    });

    watchEffect(() => {
      if (store.d3Zoom) {
        if (props.selectionKeyPressed) {
          store.d3Zoom.on('zoom', null);
        } else {
          store.d3Zoom.on('zoom', (event: any) => {
            store.transform = [event.transform.x, event.transform.y, event.transform.k];

            if (props.onMove) {
              const flowTransform = eventToFlowTransform(event.transform);
              props.onMove(flowTransform);
            }
          });
        }
      }
    });

    watchEffect(() => {
      if (store.d3Zoom) {
        if (props.onMoveStart) {
          store.d3Zoom.on('start', (event: any) => {
            if (viewChanged(prevTransform.value, event.transform)) {
              const flowTransform = eventToFlowTransform(event.transform);
              prevTransform.value = flowTransform;

              if (props.onMoveStart) props.onMoveStart(flowTransform);
            }
          });
        } else {
          store.d3Zoom.on('start', null);
        }
      }
    });

    watchEffect(() => {
      if (store.d3Zoom) {
        if (props.onMoveEnd) {
          store.d3Zoom.on('end', (event: any) => {
            if (viewChanged(prevTransform.value, event.transform)) {
              const flowTransform = eventToFlowTransform(event.transform);
              prevTransform.value = flowTransform;

              if (props.onMoveEnd) props.onMoveEnd(flowTransform);
            }
          });
        } else {
          store.d3Zoom.on('end', null);
        }
      }
    });

    watchEffect(() => {
      if (store.d3Zoom) {
        store.d3Zoom.filter((event: any) => {
          const zoomScroll = props.zoomOnScroll;
          const pinchZoom = props.zoomOnPinch && event.ctrlKey;

          // if all interactions are disabled, we prevent all zoom events
          if (!props.paneMoveable && !zoomScroll && !props.panOnScroll && !props.zoomOnDoubleClick && !props.zoomOnPinch) {
            return false;
          }

          // during a selection we prevent all other interactions
          if (props.selectionKeyPressed) {
            return false;
          }

          // if zoom on double click is disabled, we prevent the double click event
          if (!props.zoomOnDoubleClick && event.type === 'dblclick') {
            return false;
          }

          if (event.target.closest('.nowheel') && event.type === 'wheel') {
            return false;
          }

          // when the target element is a node, we still allow zooming
          if (
            (event.target.closest('.revue-flow__node') || event.target.closest('.revue-flow__edge')) &&
            event.type !== 'wheel'
          ) {
            return false;
          }

          // when the target element is a node selection, we still allow zooming
          if (event.target.closest('.revue-flow__nodesselection') && event.type !== 'wheel') {
            return false;
          }

          if (!props.zoomOnPinch && event.ctrlKey && event.type === 'wheel') {
            return false;
          }

          // when there is no scroll handling enabled, we prevent all wheel events
          if (!zoomScroll && !props.panOnScroll && !pinchZoom && event.type === 'wheel') {
            return false;
          }

          // if the pane is not movable, we prevent dragging it with mousestart or touchstart
          if (!props.paneMoveable && (event.type === 'mousedown' || event.type === 'touchstart')) {
            return false;
          }

          // default filter for d3-zoom
          return (!event.ctrlKey || event.type === 'wheel') && !event.button;
        });
      }
    });

    return () => (
      <div class="revue-flow__renderer revue-flow__zoompane" ref={zoomPane}>
        {slots.default ? slots.default() : ''}
      </div>
    );
  }
});

export default ZoomPane;
