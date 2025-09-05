import { ComponentRenderer } from '../renderer'

export const headingComponents: ComponentRenderer[] = [
  {
    name: 'H1 Heading',
    node: {
      type: 'HEADING',
      as: 'h1',
      content: 'Main Heading H1',
    },
  },
  {
    name: 'H2 Heading',
    node: {
      type: 'HEADING',
      as: 'h2',
      content: 'Secondary Heading H2',
    },
  },
  {
    name: 'H3 Heading',
    node: {
      type: 'HEADING',
      as: 'h3',
      content: 'Tertiary Heading H3',
    },
  },
  {
    name: 'Colored H2',
    node: {
      type: 'HEADING',
      as: 'h2',
      content: 'Colored Heading',
      color: '#007bff',
    },
  },
  {
    name: 'Centered H1',
    node: {
      type: 'HEADING',
      as: 'h1',
      content: 'Centered Heading',
      textAlign: 'center',
    },
  },
  {
    name: 'Bold H3',
    node: {
      type: 'HEADING',
      as: 'h3',
      content: 'Bold Heading',
      fontWeight: 'bold',
    },
  },
]
