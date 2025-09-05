import { ComponentRenderer } from '../renderer'

export const sectionComponents: ComponentRenderer[] = [
  {
    name: 'Basic Section',
    node: {
      type: 'SECTION',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      children: [],
    },
  },
  {
    name: 'Colored Section',
    node: {
      type: 'SECTION',
      bgColor: '#f8f9fa',
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
      children: [],
    },
  },
  {
    name: 'Section with Border',
    node: {
      type: 'SECTION',
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 25,
      borderStyle: 'solid',
      borderColor: '#007bff',
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      children: [],
    },
  },
  {
    name: 'Dark Section',
    node: {
      type: 'SECTION',
      bgColor: '#343a40',
      paddingTop: 40,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 40,
      children: [],
    },
  },
  {
    name: 'Section with Background Image',
    node: {
      type: 'SECTION',
      bgImage: 'https://picsum.photos/1200/300',
      paddingTop: 50,
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 50,
      children: [],
    },
  },
  {
    name: 'Minimal Section',
    node: {
      type: 'SECTION',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      children: [],
    },
  },
]
