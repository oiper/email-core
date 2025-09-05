import { ComponentRenderer } from '../renderer'

export const buttonComponents: ComponentRenderer[] = [
  {
    name: 'Primary Button',
    node: {
      type: 'BUTTON',
      content: 'Click Me',
      bgColor: 'blue',
      paddingBottom: 12,
      paddingTop: 12,
      paddingLeft: 24,
      paddingRight: 24,
    },
  },

  {
    name: 'Secondary Button',
    node: {
      type: 'BUTTON',
      content: 'Click Me',
    },
  },
]
