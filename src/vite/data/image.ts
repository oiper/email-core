import { ComponentRenderer } from '../renderer'

export const imageComponents: ComponentRenderer[] = [
  {
    name: 'Basic Image',
    node: {
      type: 'IMAGE',
      src: 'https://placehold.co/620x410/png',
      alt: 'Sample image',
    },
  },
  {
    name: 'Rounded Image',
    node: {
      type: 'IMAGE',
      src: 'https://placehold.co/380x380/png',
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
      src: 'https://placehold.co/480x290/png',
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
      src: 'https://placehold.co/320x180/png',
      alt: 'Clickable image',
      href: 'https://example.com',
    },
  },
  {
    name: 'Small Image',
    node: {
      type: 'IMAGE',
      src: 'https://placehold.co/180x180/png',
      alt: 'Small image',
    },
  },
  {
    name: 'Wide Image',
    node: {
      type: 'IMAGE',
      src: 'https://placehold.co/750x190/png',
      alt: 'Wide image',
    },
  },
]
