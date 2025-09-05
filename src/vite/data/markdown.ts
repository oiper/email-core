import { ComponentRenderer } from '../renderer'

export const markdownComponents: ComponentRenderer[] = [
  {
    name: 'Basic Markdown',
    node: {
      type: 'MARKDOWN',
      content: '# Hello World\n\nThis is **bold** and *italic* text.',
    },
  },
  {
    name: 'Markdown with List',
    node: {
      type: 'MARKDOWN',
      content:
        '# Shopping List\n\n- Apples\n- Bananas\n- Oranges\n\n## Instructions\n\n1. Wash the fruits\n2. Cut them\n3. Enjoy!',
    },
  },
  {
    name: 'Markdown with Links',
    node: {
      type: 'MARKDOWN',
      content:
        '# Welcome\n\nVisit our [website](https://example.com) for more information.\n\nContact us at [support@example.com](mailto:support@example.com).',
    },
  },
  {
    name: 'Markdown with Code',
    node: {
      type: 'MARKDOWN',
      content:
        '# Code Example\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```\n\nUse the `greet()` function to say hello.',
    },
  },
  {
    name: 'Markdown Table',
    node: {
      type: 'MARKDOWN',
      content:
        '# Product Comparison\n\n| Feature | Basic | Pro |\n|---------|-------|-----|\n| Users | 1 | 10 |\n| Storage | 1GB | 100GB |\n| Support | Email | Phone |',
    },
  },
  {
    name: 'Styled Markdown',
    node: {
      type: 'MARKDOWN',
      content:
        '> **Important Note:** This is a highlighted note.\n\n---\n\n## Getting Started\n\n1. **Install** the package\n2. **Configure** your settings\n3. **Run** the application',
    },
  },
]
