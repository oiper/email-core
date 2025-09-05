import { ComponentRenderer } from '../renderer'

export const textComponents: ComponentRenderer[] = [
  {
    name: 'Basic Text',
    node: {
      type: 'TEXT',
      content: 'This is basic text content',
    },
  },
  {
    name: 'Bold Text',
    node: {
      type: 'TEXT',
      content: 'This is bold text',
      fontWeight: 'bold',
    },
  },
  {
    name: 'Italic Text',
    node: {
      type: 'TEXT',
      content: 'This is italic text',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Large Text',
    node: {
      type: 'TEXT',
      content: 'This is large text',
      fontSize: 20,
    },
  },
  {
    name: 'Colored Text',
    node: {
      type: 'TEXT',
      content: 'This is colored text',
      color: '#007bff',
    },
  },
  {
    name: 'Centered Text',
    node: {
      type: 'TEXT',
      content: 'This is centered text',
      textAlign: 'center',
    },
  },
  {
    name: 'Uppercase Text',
    node: {
      type: 'TEXT',
      content: 'this is uppercase text',
      textTransform: 'uppercase',
    },
  },
]
