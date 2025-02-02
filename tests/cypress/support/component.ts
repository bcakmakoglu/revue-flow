import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import './commands'

import { mount } from 'cypress/vue'
import { VueFlow } from '@vue-flow/core'
import type { FlowProps } from '@vue-flow/core'

function mountVueFlow(props?: FlowProps, attrs?: Record<string, any>, slots?: Record<string, any>) {
  cy.mount(VueFlow, {
    props: {
      id: 'test',
      fitViewOnInit: true,
      ...props,
    } as FlowProps,
    attrs: {
      style: {
        height: '100vh',
        width: '100vw',
      } as CSSStyleDeclaration,
      ...attrs,
    },
    slots,
  })
}

function useZoomPane() {
  return cy.get('.vue-flow__zoom-pane')
}

function useViewport() {
  return cy.get('.vue-flow__viewport')
}

function retry(assertion: Function, { interval = 20, timeout = 1000 } = {}) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now()

    const tryAgain = () => {
      setTimeout(() => {
        try {
          resolve(assertion())
        } catch (err) {
          Date.now() - startTime > timeout ? reject(err) : tryAgain()
        }
      }, interval)
    }

    tryAgain()
  })
}

function dragConnection(from: string, to: string) {
  cy.window().then((win) => {
    const sourceHandle = cy.get(`[data-nodeid="${from}"].source`)
    const targetHandle = cy.get(`[data-nodeid="${to}"].target`)

    targetHandle.then((handle) => {
      const target = handle[0]
      const { x, y } = target.getBoundingClientRect()

      sourceHandle
        .trigger('mousedown', {
          button: 0,
          force: true,
          view: win,
        })
        .trigger('mousemove', {
          clientX: x + 5,
          clientY: y + 5,
          force: true,
        })
        .trigger('mouseup', {
          clientX: x + 5,
          clientY: y + 5,
          force: true,
          view: win,
        })
    })
  })
}

function connect(from: string, to: string) {
  const sourceHandle = cy.get(`[data-nodeid="${from}"].source`)
  const targetHandle = cy.get(`[data-nodeid="${to}"].target`)

  sourceHandle.click({ force: true })
  targetHandle.click({ force: true })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      vueFlow: typeof mountVueFlow
      viewPort: typeof useZoomPane
      transformationPane: typeof useViewport
      tryAssertion: typeof retry
      connect: typeof connect
      dragConnection: typeof dragConnection
    }
  }
}

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('vueFlow', mountVueFlow)

Cypress.Commands.add('viewPort', useZoomPane)

Cypress.Commands.add('transformationPane', useViewport)

Cypress.Commands.add('tryAssertion', retry)

Cypress.Commands.add('connect', connect)

Cypress.Commands.add('dragConnection', dragConnection)
