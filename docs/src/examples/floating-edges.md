---
layout: page

---

This example demonstrates "floating edges".

The positions of the source and target nodes are calculated dynamically,
the caveat here is, that edge-anchors are still tied to Handles (even though invisible in this example),
so connections would, by default, only be triggered when hovering over the handles (bottom / top by default).

<div class="mt-6">
  <iframe src="https://codesandbox.io/embed/vue-flow-floating-edges-zfxdok?eslint=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FFlow.vue&theme=dark"
    class="hidden dark:block bg-black h-full w-full min-h-[75vh]"
    title="Vue Flow: Floating Edges"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
  <iframe src="https://codesandbox.io/embed/vue-flow-floating-edges-zfxdok?eslint=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FFlow.vue&theme=light"
     class="block dark:hidden h-full w-full min-h-[75vh]"
      title="Vue Flow: Floating Edges"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
</div>
