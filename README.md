# @oiper/email-core

A comprehensive email core package for [Oiper.com](https://oiper.com) that provides email compilation, schema validation, and rendering capabilities. This package is designed to be used as a foundation for email-related applications and services.

## Overview

`@oiper/email-core` is not intended for direct use in creating email editors, but rather serves as a core infrastructure package that enables:

- **Email Compilation**: Transform email node structures into rendered HTML
- **Schema Validation**: Verify email structures using Zod schemas
- **Email Rendering**: Render email components with React Email
- **Type Safety**: Full TypeScript support with comprehensive type definitions

## Features

### 🏗️ Email Node System

- **Structured Components**: Row, Column, Section layouts
- **Content Elements**: Text, Button, Heading, Image, Spacer
- **Rich Content**: HTML, Markdown, and Code blocks with syntax highlighting
- **Responsive Design**: Mobile/desktop visibility controls and responsive layouts

### ✅ Schema Validation

- **Zod Integration**: Comprehensive validation using Zod schemas
- **Type Safety**: Full TypeScript support with discriminated unions
- **Runtime Validation**: Verify email structures at runtime

### 🎨 Rendering Engine

- **React Email**: Built on top of React Email components
- **Customizable**: Configurable rendering with editor integration
- **Flexible Output**: Support for both full HTML and component-only rendering

### 🛠️ Developer Tools

- **Live Templates**: Development server for testing email templates
- **Helper Functions**: Utilities for node manipulation and path resolution
- **Comprehensive Types**: Detailed TypeScript definitions for all components

## Installation

```bash
# npm
npm install @oiper/email-core

# yarn
yarn add @oiper/email-core

# pnpm
pnpm add @oiper/email-core

# bun
bun add @oiper/email-core
```

## Usage

### Basic Email Rendering

```typescript
import { RenderEmail } from '@oiper/email-core'

const emailData = [
  {
    type: 'TEXT',
    content: 'Hello World',
    textAlign: 'center',
    containerPaddingTop: 10,
    containerPaddingBottom: 10,
  },
  {
    type: 'BUTTON',
    content: 'Click Me',
    linkHref: 'https://example.com',
    textAlign: 'center',
  },
]

const emailComponent = (
  <RenderEmail
    body={emailData}
    mode="detailed"
    config={{ maxWidth: '768px' }}
  />
)
```

### Schema Validation

```typescript
import { zodEmailNodeSchema } from '@oiper/email-core'

function validateEmail(data: unknown) {
  try {
    const validated = zodEmailNodeSchema.parse(data)
    return { success: true, data: validated }
  } catch (error) {
    return { success: false, error }
  }
}
```

### Working with Email Nodes

```typescript
import { emailNodeHelpers } from '@oiper/email-core'

// Get node paths
const paths = emailNodeHelpers.getPath(node, targetNode)

// Delete nodes
const updatedNodes = emailNodeHelpers.deleteNode(nodes, path)
```

## Component Types

### Layout Components

- **Row**: Horizontal layout container with columns
- **Column**: Vertical layout container within rows
- **Section**: Content grouping container

### Content Components

- **Text**: Simple text content with styling
- **Button**: Interactive button elements
- **Heading**: Text headings (h1-h6)
- **Image**: Image elements with responsive sizing
- **Spacer**: Vertical spacing elements

### Rich Content

- **HTML**: Raw HTML content
- **Markdown**: Markdown-formatted content
- **Code**: Syntax-highlighted code blocks

## Development

### Running Tests

```bash
npm test
```

### Development Server

```bash
npm run live:template
```

### Building

```bash
npm run build
```

## Architecture

The package is organized into three main modules:

1. **`email-node`**: Core email node definitions, schemas, and helpers
2. **`render-email`**: React-based email rendering system
3. **`types`**: Shared TypeScript type definitions

## Contributing

This package is part of the Oiper.com ecosystem. For contributions, please refer to the project's contribution guidelines.

## License

Private package - All rights reserved by Oiper.com
