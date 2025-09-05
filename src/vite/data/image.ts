import { ComponentRenderer } from '../renderer'

export const imageComponents: ComponentRenderer[] = [
  {
    name: 'Primary Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/600/400',
    },
  },

  {
    name: 'Secondary Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/600/400',
    },
  },
]
