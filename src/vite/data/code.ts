import { ComponentRenderer } from '../renderer'

export const codeComponents: ComponentRenderer[] = [
  {
    name: 'Basic JavaScript',
    node: {
      type: 'CODE',
      content: 'function hello() {\n  console.log("Hello World!");\n}',
      language: 'javascript',
      theme: 'a11yDark',
    },
  },
  {
    name: 'Python Code',
    node: {
      type: 'CODE',
      content: 'def greet(name):\n    return f"Hello, {name}!"',
      language: 'python',
      theme: 'a11yDark',
    },
  },
  {
    name: 'HTML Code',
    node: {
      type: 'CODE',
      content: '<div class="container">\n  <h1>Hello World</h1>\n</div>',
      language: 'html',
      theme: 'a11yDark',
    },
  },
  {
    name: 'CSS Code',
    node: {
      type: 'CODE',
      content: '.button {\n  background: blue;\n  color: white;\n  padding: 10px;\n}',
      language: 'css',
      theme: 'a11yDark',
    },
  },
  {
    name: 'Code with Line Numbers',
    node: {
      type: 'CODE',
      content: 'const users = [\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 }\n];',
      language: 'javascript',
      theme: 'a11yDark',
      showLineNumber: true,
    },
  },
  {
    name: 'Dark Theme Code',
    node: {
      type: 'CODE',
      content: '\n\nexport default function App() {\n  return <div>Hello React!</div>;\n}',
      language: 'javascript',
      theme: 'a11yDark',
      bgColor: '#1e1e1e',
    },
  },
]
