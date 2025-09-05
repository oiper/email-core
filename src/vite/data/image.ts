import { ComponentRenderer } from '../renderer'

export const imageComponents: ComponentRenderer[] = [
  {
    name: 'Basic Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/600/400',
      alt: 'Sample image',
    },
  },
  {
    name: 'Rounded Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/400/400',
      alt: 'Rounded image',
      radiusTopLeft: 50,
      radiusTopRight: 50,
      radiusBottomLeft: 50,
      radiusBottomRight: 50,
    },
  },
  {
    name: 'Image with Border',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/500/300',
      alt: 'Image with border',
      borderStyle: 'solid',
      borderColor: '#007bff',
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
    },
  },
  {
    name: 'Clickable Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/300/200',
      alt: 'Clickable image',
      href: 'https://example.com',
    },
  },
  {
    name: 'Small Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/200/200',
      alt: 'Small image',
    },
  },
  {
    name: 'Wide Image',
    node: {
      type: 'IMAGE',
      src: 'https://picsum.photos/800/200',
      alt: 'Wide image',
    },
  },
]
