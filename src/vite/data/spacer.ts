import { ComponentRenderer } from '../renderer'

export const spacerComponents: ComponentRenderer[] = [
  {
    name: 'Small Spacer',
    node: {
      type: 'SPACER',
      height: 10,
    },
  },
  {
    name: 'Medium Spacer',
    node: {
      type: 'SPACER',
      height: 20,
    },
  },
  {
    name: 'Large Spacer',
    node: {
      type: 'SPACER',
      height: 40,
    },
  },
  {
    name: 'Extra Large Spacer',
    node: {
      type: 'SPACER',
      height: 60,
    },
  },
  {
    name: 'Colored Spacer',
    node: {
      type: 'SPACER',
      height: 30,
      bgColor: '#007bff',
    },
  },
  {
    name: 'Bordered Spacer',
    node: {
      type: 'SPACER',
      height: 25,
      borderStyle: 'solid',
      borderColor: '#6c757d',
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
  },
]
