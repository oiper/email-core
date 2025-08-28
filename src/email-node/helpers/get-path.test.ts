import { describe, expect, it } from 'bun:test'
import { TEmailNodeColumn, TEmailNodeUnion } from '../types.t'
import { getPathFromBodyByRef } from './get-path'

function createTextNode(content: string): TEmailNodeUnion {
  return {
    type: 'TEXT',
    content,
  }
}

function createButtonNode(content: string): TEmailNodeUnion {
  return {
    type: 'BUTTON',
    content,
  }
}

function createHeadingNode(content: string): TEmailNodeUnion {
  return {
    type: 'HEADING',
    content,
    as: 'h1',
  }
}

function createImageNode(alt: string): TEmailNodeUnion {
  return {
    type: 'IMAGE',
    alt,
    src: 'https://example.com/image.jpg',
  }
}

function createSpacerNode(): TEmailNodeUnion {
  return {
    type: 'SPACER',
    height: 20,
  }
}

function createSectionNode(children: TEmailNodeUnion[]): TEmailNodeUnion {
  return {
    type: 'SECTION',
    children,
  }
}

function createColumnNode(children: TEmailNodeUnion[]): TEmailNodeColumn {
  return {
    type: 'COLUMN',
    children,
  }
}

function createRowNode(columns: TEmailNodeColumn[]): TEmailNodeUnion {
  return {
    type: 'ROW',
    columns,
  }
}

function createHTMLNode(content: string): TEmailNodeUnion {
  return {
    type: 'HTML',
    content,
  }
}

function createCodeNode(content: string): TEmailNodeUnion {
  return {
    type: 'CODE',
    content,
    language: 'javascript',
    theme: 'dracula',
  }
}

function createMarkdownNode(content: string): TEmailNodeUnion {
  return {
    type: 'MARKDOWN',
    content,
  }
}

describe('getPathFromBodyByRef', () => {
  it('should return null for empty body array', () => {
    const reference = createTextNode('test')
    const result = getPathFromBodyByRef([], reference)
    expect(result).toBeNull()
  })

  it('should return null when reference is not found in body', () => {
    const node1 = createTextNode('node1')
    const node2 = createTextNode('node2')
    const reference = createTextNode('notfound')
    const body = [node1, node2]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toBeNull()
  })

  it('should find reference at root level - first position', () => {
    const reference = createTextNode('target')
    const body = [reference, createTextNode('other')]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0]])
  })

  it('should find reference at root level - middle position', () => {
    const reference = createTextNode('target')
    const body = [createTextNode('first'), reference, createTextNode('last')]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1]])
  })

  it('should find reference at root level - last position', () => {
    const reference = createTextNode('target')
    const body = [createTextNode('first'), createTextNode('second'), reference]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[2]])
  })

  it('should handle various node types at root level', () => {
    const textRef = createTextNode('text')
    const buttonRef = createButtonNode('button')
    const headingRef = createHeadingNode('heading')
    const imageRef = createImageNode('image')
    const spacerRef = createSpacerNode()
    const htmlRef = createHTMLNode('<p>html</p>')
    const codeRef = createCodeNode('console.log("test")')
    const markdownRef = createMarkdownNode('# Markdown')

    const body = [
      textRef,
      buttonRef,
      headingRef,
      imageRef,
      spacerRef,
      htmlRef,
      codeRef,
      markdownRef,
    ]

    expect(getPathFromBodyByRef(body, textRef)).toEqual([[0]])
    expect(getPathFromBodyByRef(body, buttonRef)).toEqual([[1]])
    expect(getPathFromBodyByRef(body, headingRef)).toEqual([[2]])
    expect(getPathFromBodyByRef(body, imageRef)).toEqual([[3]])
    expect(getPathFromBodyByRef(body, spacerRef)).toEqual([[4]])
    expect(getPathFromBodyByRef(body, htmlRef)).toEqual([[5]])
    expect(getPathFromBodyByRef(body, codeRef)).toEqual([[6]])
    expect(getPathFromBodyByRef(body, markdownRef)).toEqual([[7]])
  })

  it('should find reference in section children - first child', () => {
    const reference = createTextNode('target')
    const section = createSectionNode([reference, createTextNode('other')])
    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 0]])
  })

  it('should find reference in section children - nested deeper', () => {
    const reference = createTextNode('target')
    const innerSection = createSectionNode([createTextNode('first'), reference])
    const outerSection = createSectionNode([createTextNode('outer'), innerSection])
    const body = [outerSection]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 1], ['children', 1]])
  })

  it('should find reference in column children', () => {
    const reference = createTextNode('target')
    const column = createColumnNode([createTextNode('first'), reference, createTextNode('last')])
    const body = [column]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 1]])
  })

  it('should find reference in row columns', () => {
    const reference = createColumnNode([createTextNode('target')])
    const row = createRowNode([createColumnNode([createTextNode('first')]), reference])
    const body = [row]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['columns', 1]])
  })

  it('should find reference in row column children', () => {
    const reference = createTextNode('target')
    const column = createColumnNode([createTextNode('first'), reference])
    const row = createRowNode([column])
    const body = [row]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['columns', 0], ['children', 1]])
  })

  it('should handle complex nested structure', () => {
    const reference = createTextNode('deep-target')

    const deepColumn = createColumnNode([
      createTextNode('col-text'),
      reference,
      createButtonNode('col-button'),
    ])

    const deepRow = createRowNode([
      createColumnNode([createTextNode('first-col')]),
      deepColumn,
      createColumnNode([createTextNode('third-col')]),
    ])

    const section = createSectionNode([
      createTextNode('section-start'),
      deepRow,
      createTextNode('section-end'),
    ])

    const body = [createTextNode('body-start'), section, createTextNode('body-end')]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1], ['children', 1], ['columns', 1], ['children', 1]])
  })

  it('should handle multiple levels of sections', () => {
    const reference = createTextNode('target')

    const innerSection = createSectionNode([
      createTextNode('inner-1'),
      createSectionNode([createTextNode('deep-1'), reference, createTextNode('deep-2')]),
      createTextNode('inner-2'),
    ])

    const outerSection = createSectionNode([
      createTextNode('outer-1'),
      innerSection,
      createTextNode('outer-2'),
    ])

    const body = [outerSection]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 1], ['children', 1], ['children', 1]])
  })

  it('should handle multiple levels of rows and columns', () => {
    const reference = createTextNode('target')

    const innerColumn = createColumnNode([
      createTextNode('inner-col-1'),
      createRowNode([
        createColumnNode([createTextNode('nested-col-1')]),
        createColumnNode([reference, createTextNode('nested-col-2-text')]),
      ]),
      createTextNode('inner-col-2'),
    ])

    const outerRow = createRowNode([createColumnNode([createTextNode('outer-col-1')]), innerColumn])

    const body = [outerRow]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['columns', 1], ['children', 1], ['columns', 1], ['children', 0]])
  })

  it('should find the first occurrence when multiple identical references exist', () => {
    const reference = createTextNode('duplicate')
    const duplicate1 = createTextNode('duplicate')
    const duplicate2 = createTextNode('duplicate')

    const body = [createTextNode('first'), reference, duplicate1, duplicate2]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1]])
  })

  it('should distinguish between object references even with same content', () => {
    const content = 'same content'
    const reference = createTextNode(content)
    const different = createTextNode(content)

    const body = [different, reference]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1]])
  })

  it('should handle empty children arrays in sections', () => {
    const reference = createTextNode('target')
    const emptySection = createSectionNode([])
    const sectionWithTarget = createSectionNode([reference])

    const body = [emptySection, sectionWithTarget]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1], ['children', 0]])
  })

  it('should handle empty columns arrays in rows', () => {
    const reference = createColumnNode([createTextNode('target')])
    const emptyRow = createRowNode([])
    const rowWithTarget = createRowNode([reference])

    const body = [emptyRow, rowWithTarget]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1], ['columns', 0]])
  })

  it('should handle nodes without children or columns properties', () => {
    const reference = createTextNode('target')
    const textNode = createTextNode('text')
    const buttonNode = createButtonNode('button')
    const imageNode = createImageNode('image')
    const spacerNode = createSpacerNode()

    const body = [textNode, buttonNode, imageNode, spacerNode, reference]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[4]])
  })

  it('should handle mixed node types in complex structure', () => {
    const reference = createImageNode('target-image')

    const column = createColumnNode([
      createTextNode('text'),
      createButtonNode('button'),
      reference,
      createHeadingNode('heading'),
      createSpacerNode(),
      createHTMLNode('<div>html</div>'),
      createCodeNode('code'),
      createMarkdownNode('markdown'),
    ])

    const row = createRowNode([column])
    const section = createSectionNode([row])
    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 0], ['columns', 0], ['children', 2]])
  })

  it('should handle very deep nesting', () => {
    const reference = createTextNode('deep-target')

    let current: TEmailNodeUnion = reference

    for (let i = 0; i < 10; i++) {
      current = createSectionNode([createTextNode(`level-${i}`), current])
    }

    const body = [current]

    const expectedPath: (string | number)[][] = [[0]]
    for (let i = 0; i < 10; i++) {
      expectedPath.push(['children', 1])
    }

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual(expectedPath)
  })

  it('should handle alternating row/column deep nesting', () => {
    const reference = createTextNode('deep-target')

    let current: TEmailNodeUnion = createColumnNode([reference])

    for (let i = 0; i < 5; i++) {
      const row = createRowNode([current])
      current = createColumnNode([row])
    }

    const body = [current]

    const expectedPath: (string | number)[][] = [[0], ['children', 0]]
    for (let i = 0; i < 5; i++) {
      expectedPath.push(['columns', 0])
      expectedPath.push(['children', 0])
    }

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual(expectedPath)
  })

  it('should return null for large body without reference', () => {
    const nodes = []
    for (let i = 0; i < 1000; i++) {
      nodes.push(createTextNode(`node-${i}`))
    }

    const reference = createTextNode('not-in-body')
    const result = getPathFromBodyByRef(nodes, reference)
    expect(result).toBeNull()
  })

  it('should find reference in large body at various positions', () => {
    const reference = createTextNode('target')
    const nodes = []

    for (let i = 0; i < 500; i++) {
      nodes.push(createTextNode(`node-${i}`))
    }

    nodes.push(reference)

    for (let i = 500; i < 1000; i++) {
      nodes.push(createTextNode(`node-${i}`))
    }

    const result = getPathFromBodyByRef(nodes, reference)
    expect(result).toEqual([[500]])
  })

  it('should handle sections with mixed node types in children', () => {
    const reference = createCodeNode('target-code')

    const section = createSectionNode([
      createTextNode('text'),
      createButtonNode('button'),
      createHeadingNode('heading'),
      createImageNode('image'),
      createSpacerNode(),
      createHTMLNode('<p>html</p>'),
      reference,
      createMarkdownNode('# markdown'),
      createRowNode([createColumnNode([createTextNode('nested')])]),
      createSectionNode([createTextNode('nested-section')]),
    ])

    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 6]])
  })

  it('should handle columns with mixed node types in children', () => {
    const reference = createMarkdownNode('target-markdown')

    const column = createColumnNode([
      createTextNode('text'),
      createButtonNode('button'),
      createHeadingNode('heading'),
      createImageNode('image'),
      createSpacerNode(),
      createHTMLNode('<p>html</p>'),
      createCodeNode('code'),
      reference,
      createRowNode([createColumnNode([createTextNode('nested')])]),
      createSectionNode([createTextNode('nested-section')]),
    ])

    const body = [column]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 7]])
  })

  it('should handle rows with multiple columns of different types', () => {
    const reference = createColumnNode([createTextNode('target-column')])

    const row = createRowNode([
      createColumnNode([createTextNode('col1')]),
      createColumnNode([createButtonNode('col2')]),
      createColumnNode([createHeadingNode('col3')]),
      reference,
      createColumnNode([createImageNode('col5')]),
      createColumnNode([createSpacerNode()]),
    ])

    const body = [row]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['columns', 3]])
  })

  it('should handle edge case: reference is section containing target in children', () => {
    const targetText = createTextNode('target-text')
    const reference = createSectionNode([targetText])

    const body = [createTextNode('before'), reference, createTextNode('after')]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1]])
  })

  it('should handle edge case: reference is row containing target in columns', () => {
    const targetColumn = createColumnNode([createTextNode('target-column')])
    const reference = createRowNode([targetColumn])

    const body = [createTextNode('before'), reference, createTextNode('after')]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1]])
  })

  it('should handle edge case: reference is column containing target in children', () => {
    const targetText = createTextNode('target-text')
    const reference = createColumnNode([targetText])

    const body = [createTextNode('before'), reference, createTextNode('after')]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1]])
  })

  it('should handle multiple containers with same structure but different references', () => {
    const target1 = createTextNode('target1')
    const target2 = createTextNode('target2')

    const section1 = createSectionNode([createTextNode('section1-text'), target1])

    const section2 = createSectionNode([createTextNode('section2-text'), target2])

    const body = [section1, section2]

    const result1 = getPathFromBodyByRef(body, target1)
    const result2 = getPathFromBodyByRef(body, target2)

    expect(result1).toEqual([[0], ['children', 1]])
    expect(result2).toEqual([[1], ['children', 1]])
  })

  it('should handle complex grid-like structure', () => {
    const reference = createTextNode('target-cell')

    function createCell(content: string) {
      return createColumnNode([createTextNode(content)])
    }

    const row1 = createRowNode([
      createCell('cell-1-1'),
      createCell('cell-1-2'),
      createCell('cell-1-3'),
    ])

    const row2 = createRowNode([
      createCell('cell-2-1'),
      createColumnNode([createTextNode('cell-2-2'), reference]),
      createCell('cell-2-3'),
    ])

    const row3 = createRowNode([
      createCell('cell-3-1'),
      createCell('cell-3-2'),
      createCell('cell-3-3'),
    ])

    const section = createSectionNode([row1, row2, row3])
    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 1], ['columns', 1], ['children', 1]])
  })

  it('should return early when reference found (performance test)', () => {
    const reference = createTextNode('early-target')

    const body = [
      reference,
      createSectionNode([
        createTextNode('should-not-search-here-1'),
        createTextNode('should-not-search-here-2'),
      ]),
      createRowNode([createColumnNode([createTextNode('should-not-search-here-3')])]),
    ]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0]])
  })

  it('should handle undefined/null children gracefully', () => {
    const reference = createTextNode('target')

    const nodeWithUndefinedChildren = {
      type: 'SECTION' as const,
      children: undefined,
    }

    const nodeWithNullChildren = {
      type: 'SECTION' as const,
      children: null,
    }

    const body = [
      nodeWithUndefinedChildren as unknown as TEmailNodeUnion,
      nodeWithNullChildren as unknown as TEmailNodeUnion,
      reference,
    ]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[2]])
  })

  it('should handle undefined/null columns gracefully', () => {
    const reference = createTextNode('target')

    const nodeWithUndefinedColumns = {
      type: 'ROW' as const,
      columns: undefined,
    }

    const nodeWithNullColumns = {
      type: 'ROW' as const,
      columns: null,
    }

    const body = [
      nodeWithUndefinedColumns as unknown as TEmailNodeUnion,
      nodeWithNullColumns as unknown as TEmailNodeUnion,
      reference,
    ]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[2]])
  })

  it('should handle maximum depth nesting without stack overflow', () => {
    const reference = createTextNode('max-depth-target')

    let current: TEmailNodeUnion = reference
    const maxDepth = 100

    for (let i = 0; i < maxDepth; i++) {
      if (i % 2 === 0) {
        current = createSectionNode([current])
      } else {
        current = createColumnNode([current])
      }
    }

    const body = [current]

    const expectedPath: (string | number)[][] = [[0]]
    for (let i = 0; i < maxDepth; i++) {
      expectedPath.push(['children', 0])
    }

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual(expectedPath)
  })

  it('should handle reference at different positions in large children arrays', () => {
    const reference = createTextNode('target')

    const children = []
    for (let i = 0; i < 100; i++) {
      children.push(createTextNode(`child-${i}`))
    }

    children.splice(50, 0, reference)

    const section = createSectionNode(children)
    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 50]])
  })

  it('should handle reference at different positions in large columns arrays', () => {
    const reference = createColumnNode([createTextNode('target-column')])

    const columns = []
    for (let i = 0; i < 100; i++) {
      columns.push(createColumnNode([createTextNode(`column-${i}`)]))
    }

    columns.splice(75, 0, reference)

    const row = createRowNode(columns)
    const body = [row]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['columns', 75]])
  })

  it('should prioritize direct children over nested children in search order', () => {
    const reference = createTextNode('target')
    const duplicate = createTextNode('target')

    const nestedSection = createSectionNode([duplicate])
    const section = createSectionNode([nestedSection, reference])

    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 1]])
  })

  it('should handle breadth-first search pattern correctly', () => {
    const reference = createTextNode('breadth-target')

    const deepNested = createSectionNode([
      createSectionNode([createSectionNode([createTextNode('very-deep')])]),
    ])

    const section = createSectionNode([deepNested, createTextNode('shallow'), reference])

    const body = [section]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[0], ['children', 2]])
  })

  it('should handle complex real-world email structure', () => {
    const reference = createButtonNode('cta-button')

    const headerSection = createSectionNode([
      createImageNode('logo'),
      createHeadingNode('Email Title'),
    ])

    const contentRow = createRowNode([
      createColumnNode([createTextNode('Left column content'), createImageNode('left-image')]),
      createColumnNode([
        createHeadingNode('Main Content'),
        createTextNode('Some text content'),
        reference,
        createTextNode('More content below button'),
      ]),
    ])

    const footerSection = createSectionNode([
      createTextNode('Footer text'),
      createTextNode('Copyright notice'),
    ])

    const body = [headerSection, contentRow, footerSection]

    const result = getPathFromBodyByRef(body, reference)
    expect(result).toEqual([[1], ['columns', 1], ['children', 2]])
  })

  describe('Extreme Edge Cases and Stress Tests (100 additional cases)', () => {
    it('should handle empty body with null reference', () => {
      const result = getPathFromBodyByRef([], null as unknown as TEmailNodeUnion)
      expect(result).toBeNull()
    })

    it('should handle empty body with undefined reference', () => {
      const result = getPathFromBodyByRef([], undefined as unknown as TEmailNodeUnion)
      expect(result).toBeNull()
    })

    it('should handle null body array', () => {
      const reference = createTextNode('test')
      const result = getPathFromBodyByRef(null as unknown as TEmailNodeUnion[], reference)
      expect(result).toBeNull()
    })

    it('should handle undefined body array', () => {
      const reference = createTextNode('test')
      const result = getPathFromBodyByRef(undefined as unknown as TEmailNodeUnion[], reference)
      expect(result).toBeNull()
    })

    it('should handle body with null elements', () => {
      const reference = createTextNode('test')
      const body = [
        null as unknown as TEmailNodeUnion,
        reference,
        null as unknown as TEmailNodeUnion,
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle body with undefined elements', () => {
      const reference = createTextNode('test')
      const body = [
        undefined as unknown as TEmailNodeUnion,
        undefined as unknown as TEmailNodeUnion,
        reference,
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[2]])
    })

    it('should handle mixed null/undefined elements in body', () => {
      const reference = createTextNode('test')
      const body = [
        null as unknown as TEmailNodeUnion,
        undefined as unknown as TEmailNodeUnion,
        createTextNode('other'),
        reference,
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[3]])
    })

    it('should handle section with null children array', () => {
      const reference = createTextNode('test')
      const section = {
        type: 'SECTION' as const,
        children: null as unknown as TEmailNodeUnion[],
      }
      const body = [section, reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle row with null columns array', () => {
      const reference = createTextNode('test')
      const row = { type: 'ROW' as const, columns: null as unknown as TEmailNodeColumn[] }
      const body = [row, reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle column with null children array', () => {
      const reference = createTextNode('test')
      const column = {
        type: 'COLUMN' as const,
        children: null as unknown as TEmailNodeUnion[],
      }
      const body = [column, reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle deeply nested null/undefined arrays', () => {
      const reference = createTextNode('deep')
      const deepSection = createSectionNode([
        { type: 'SECTION' as const, children: null as unknown as TEmailNodeUnion[] },
        { type: 'SECTION' as const, children: undefined as unknown as TEmailNodeUnion[] },
        createSectionNode([reference]),
      ])
      const body = [deepSection]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 2], ['children', 0]])
    })

    it('should handle extremely large flat array (10000 elements)', () => {
      const reference = createTextNode('needle')
      const body = []
      for (let i = 0; i < 5000; i++) {
        body.push(createTextNode(`hay-${i}`))
      }
      body.push(reference)
      for (let i = 5000; i < 9999; i++) {
        body.push(createTextNode(`hay-${i}`))
      }
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[5000]])
    })

    it('should handle reference at very end of large array', () => {
      const reference = createTextNode('last')
      const body = []
      for (let i = 0; i < 1000; i++) {
        body.push(createTextNode(`item-${i}`))
      }
      body.push(reference)
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1000]])
    })

    it('should handle massive nested structure (500 levels deep)', () => {
      const reference = createTextNode('bottom')
      let current = reference
      for (let i = 0; i < 500; i++) {
        current = createSectionNode([current])
      }
      const body = [current]
      const expectedPath: (string | number)[][] = [[0]]
      for (let i = 0; i < 500; i++) {
        expectedPath.push(['children', 0])
      }
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual(expectedPath)
    })

    it('should handle circular-like references (different objects, same content)', () => {
      const content = 'duplicate-content'
      const nodes = []
      for (let i = 0; i < 100; i++) {
        nodes.push(createTextNode(content))
      }
      const reference = createTextNode(content)
      nodes.splice(50, 0, reference)
      const result = getPathFromBodyByRef(nodes, reference)
      expect(result).toEqual([[50]])
    })

    it('should handle reference with same object reference but modified properties', () => {
      const reference = createTextNode('original')
      const body = [reference]
      ;(reference as unknown as { content: string }).content = 'modified'
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle empty string content nodes', () => {
      const reference = createTextNode('')
      const body = [createTextNode('text'), reference, createTextNode('')]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle whitespace-only content', () => {
      const reference = createTextNode('   \n\t  ')
      const body = [createTextNode('normal'), reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle unicode content', () => {
      const reference = createTextNode('🚀✨🎉💫🌟')
      const body = [createTextNode('normal'), reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle very long content strings', () => {
      const longContent = 'x'.repeat(100000)
      const reference = createTextNode(longContent)
      const body = [reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle nodes with extra unknown properties', () => {
      const reference = {
        type: 'TEXT' as const,
        content: 'test',
        extraProp: 'unknown',
        anotherProp: { nested: 'value' },
      } as unknown as TEmailNodeUnion
      const body = [reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle nodes missing required properties', () => {
      const reference = { type: 'TEXT' as const, content: 'test' } as unknown as TEmailNodeUnion
      const body = [createTextNode('normal'), reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1]])
    })

    it('should handle invalid node types', () => {
      const reference = {
        type: 'INVALID_TYPE' as const,
        content: 'test',
      } as unknown as TEmailNodeUnion
      const body = [reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle row with massive number of columns (1000)', () => {
      const reference = createColumnNode([createTextNode('target')])
      const columns = []
      for (let i = 0; i < 999; i++) {
        columns.push(createColumnNode([createTextNode(`col-${i}`)]))
      }
      columns.push(reference)
      const row = createRowNode(columns)
      const body = [row]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['columns', 999]])
    })

    it('should handle section with massive number of children (1000)', () => {
      const reference = createTextNode('target')
      const children = []
      for (let i = 0; i < 999; i++) {
        children.push(createTextNode(`child-${i}`))
      }
      children.push(reference)
      const section = createSectionNode(children)
      const body = [section]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 999]])
    })

    it('should handle alternating empty and filled containers', () => {
      const reference = createTextNode('target')
      const body = [
        createSectionNode([]),
        createRowNode([]),
        createSectionNode([createTextNode('filler')]),
        createRowNode([createColumnNode([])]),
        createSectionNode([reference]),
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[4], ['children', 0]])
    })

    it('should handle mixed valid and invalid nested structures', () => {
      const reference = createTextNode('target')
      const invalidSection = {
        type: 'SECTION' as const,
        children: 'invalid' as unknown as TEmailNodeUnion[],
      }
      const invalidRow = {
        type: 'ROW' as const,
        columns: 'invalid' as unknown as TEmailNodeColumn[],
      }
      const body = [invalidSection, invalidRow, createSectionNode([reference])]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[2], ['children', 0]])
    })

    it('should handle reference in first position of massive nested structure', () => {
      const reference = createTextNode('first')
      const children = [reference]
      for (let i = 0; i < 1000; i++) {
        children.push(createTextNode(`filler-${i}`))
      }
      const section = createSectionNode(children)
      const body = [section]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 0]])
    })

    it('should handle reference in middle of massive nested structure', () => {
      const reference = createTextNode('middle')
      const children = []
      for (let i = 0; i < 500; i++) {
        children.push(createTextNode(`before-${i}`))
      }
      children.push(reference)
      for (let i = 0; i < 500; i++) {
        children.push(createTextNode(`after-${i}`))
      }
      const section = createSectionNode(children)
      const body = [section]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 500]])
    })

    it('should handle extremely wide structure (100 top-level elements)', () => {
      const reference = createTextNode('target')
      const body = []
      for (let i = 0; i < 50; i++) {
        body.push(createTextNode(`item-${i}`))
      }
      body.push(reference)
      for (let i = 50; i < 99; i++) {
        body.push(createTextNode(`item-${i}`))
      }
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[50]])
    })

    it('should handle reference as last element in deeply nested structure', () => {
      const reference = createTextNode('last-deep')
      let current = createSectionNode([createTextNode('first'), reference])
      for (let i = 0; i < 50; i++) {
        current = createSectionNode([createTextNode(`level-${i}`), current])
      }
      const body = [current]
      const expectedPath: (string | number)[][] = [[0]]
      for (let i = 0; i < 50; i++) {
        expectedPath.push(['children', 1])
      }
      expectedPath.push(['children', 1])
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual(expectedPath)
    })

    it('should handle multiple references at same depth level', () => {
      const ref1 = createTextNode('ref1')
      const ref2 = createTextNode('ref2')
      const ref3 = createTextNode('ref3')
      const section = createSectionNode([ref1, ref2, ref3])
      const body = [section]
      expect(getPathFromBodyByRef(body, ref1)).toEqual([[0], ['children', 0]])
      expect(getPathFromBodyByRef(body, ref2)).toEqual([[0], ['children', 1]])
      expect(getPathFromBodyByRef(body, ref3)).toEqual([[0], ['children', 2]])
    })

    it('should handle heterogeneous node type mixing in large structures', () => {
      const reference = createCodeNode('target-code')
      const mixed = [
        createTextNode('text'),
        createButtonNode('button'),
        createHeadingNode('heading'),
        createImageNode('image'),
        createSpacerNode(),
        createHTMLNode('<div>html</div>'),
        reference,
        createMarkdownNode('markdown'),
        createSectionNode([createTextNode('nested')]),
        createRowNode([createColumnNode([createTextNode('grid')])]),
      ]
      const section = createSectionNode(mixed)
      const body = [section]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 6]])
    })

    it('should handle sparse arrays with holes', () => {
      const reference = createTextNode('target')
      const sparseArray = new Array(10)
      sparseArray[0] = createTextNode('first')
      sparseArray[5] = reference
      sparseArray[9] = createTextNode('last')
      const result = getPathFromBodyByRef(sparseArray, reference)
      expect(result).toEqual([[5]])
    })

    it('should handle identical object references in different positions', () => {
      const sharedNode = createTextNode('shared')
      const body = [
        createSectionNode([sharedNode]),
        createRowNode([createColumnNode([sharedNode])]),
        sharedNode,
      ]
      const result = getPathFromBodyByRef(body, sharedNode)
      expect(result).toEqual([[0], ['children', 0]])
    })

    it('should handle massive breadth at each level', () => {
      const reference = createTextNode('needle')
      const level3Children = []
      for (let i = 0; i < 100; i++) {
        level3Children.push(createTextNode(`l3-${i}`))
      }
      level3Children.push(reference)
      const level3Section = createSectionNode(level3Children)

      const level2Children = []
      for (let i = 0; i < 100; i++) {
        level2Children.push(createTextNode(`l2-${i}`))
      }
      level2Children.push(level3Section)
      const level2Section = createSectionNode(level2Children)

      const level1Children = []
      for (let i = 0; i < 100; i++) {
        level1Children.push(createTextNode(`l1-${i}`))
      }
      level1Children.push(level2Section)
      const level1Section = createSectionNode(level1Children)

      const body = [level1Section]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 100], ['children', 100], ['children', 100]])
    })

    it('should handle node with prototype pollution attempts', () => {
      const maliciousNode = JSON.parse(
        '{"type":"TEXT","content":"test","__proto__":{"polluted":true}}'
      )
      const reference = maliciousNode
      const body = [reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle extremely long property names', () => {
      const longPropName = 'x'.repeat(10000)
      const reference = {
        type: 'TEXT' as const,
        content: 'test',
        [longPropName]: 'long-prop-value',
      } as unknown as TEmailNodeUnion
      const body = [reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle nodes with circular property references', () => {
      const reference = createTextNode('circular')
      const circular: unknown = { ref: reference }
      ;(circular as { self?: unknown }).self = circular
      ;(reference as unknown as { circular: unknown }).circular = circular
      const body = [reference]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle reference search in structure with many false positives', () => {
      const reference = createTextNode('target')
      const similarNodes = []
      for (let i = 0; i < 1000; i++) {
        similarNodes.push(createTextNode('target'))
      }
      similarNodes.splice(500, 0, reference)
      const body = similarNodes
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[500]])
    })

    it('should handle structure where reference appears multiple times as different object instances', () => {
      const content = 'duplicate-content'
      const reference = createTextNode(content)
      const duplicates = []
      for (let i = 0; i < 100; i++) {
        duplicates.push(createTextNode(content))
      }
      const section = createSectionNode([...duplicates, reference, ...duplicates])
      const body = [section]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['children', 100]])
    })

    it('should handle empty containers at various nesting levels', () => {
      const reference = createTextNode('target')
      const body = [
        createSectionNode([]),
        createSectionNode([
          createSectionNode([]),
          createRowNode([]),
          createSectionNode([createSectionNode([]), reference]),
        ]),
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1], ['children', 2], ['children', 1]])
    })

    it('should handle reference in complex zigzag nesting pattern', () => {
      const reference = createTextNode('zigzag')
      let current = reference
      for (let i = 0; i < 20; i++) {
        if (i % 3 === 0) {
          current = createSectionNode([createTextNode(`s${i}`), current])
        } else if (i % 3 === 1) {
          current = createColumnNode([createTextNode(`c${i}`), current])
        } else {
          current = createSectionNode([
            createRowNode([createColumnNode([current])]),
            createTextNode(`r${i}`),
          ])
        }
      }
      const body = [current]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).not.toBeNull()
      expect(result!.length).toBeGreaterThan(20)
    })

    it('should handle reference as immediate child of multiple container types', () => {
      const reference = createTextNode('multi-container')
      const body = [
        createSectionNode([createTextNode('other'), reference]),
        createRowNode([createColumnNode([reference, createTextNode('other')])]),
        createColumnNode([createTextNode('first'), createTextNode('second'), reference]),
      ]
      const result1 = getPathFromBodyByRef([body[0]], reference)
      const result2 = getPathFromBodyByRef([body[1]], reference)
      const result3 = getPathFromBodyByRef([body[2]], reference)
      expect(result1).toEqual([[0], ['children', 1]])
      expect(result2).toEqual([[0], ['columns', 0], ['children', 0]])
      expect(result3).toEqual([[0], ['children', 2]])
    })

    it('should handle performance stress test with early termination', () => {
      const reference = createTextNode('early-target')
      const hugeStructure = []
      for (let i = 0; i < 10000; i++) {
        hugeStructure.push(
          createSectionNode([
            createTextNode(`big-${i}-1`),
            createTextNode(`big-${i}-2`),
            createTextNode(`big-${i}-3`),
          ])
        )
      }
      const body = [reference, ...hugeStructure]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0]])
    })

    it('should handle reference in last position of massively wide row', () => {
      const reference = createColumnNode([createTextNode('last-column')])
      const columns = []
      for (let i = 0; i < 1000; i++) {
        columns.push(createColumnNode([createTextNode(`col-${i}`)]))
      }
      columns.push(reference)
      const row = createRowNode(columns)
      const body = [row]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[0], ['columns', 1000]])
    })

    it('should handle nested structure with alternating empty/full containers', () => {
      const reference = createTextNode('alternating-target')
      const body = [
        createSectionNode([]),
        createSectionNode([
          createRowNode([]),
          createRowNode([
            createColumnNode([]),
            createColumnNode([createSectionNode([]), createSectionNode([reference])]),
          ]),
        ]),
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([
        [1],
        ['children', 1],
        ['columns', 1],
        ['children', 1],
        ['children', 0],
      ])
    })

    it('should handle structure with maximum practical email complexity', () => {
      const reference = createButtonNode('cta-deep')
      const complexEmail = createSectionNode([
        createRowNode([
          createColumnNode([
            createSectionNode([
              createTextNode('header'),
              createRowNode([
                createColumnNode([createImageNode('logo')]),
                createColumnNode([
                  createHeadingNode('Title'),
                  createSectionNode([
                    createTextNode('content'),
                    createRowNode([
                      createColumnNode([createTextNode('left')]),
                      createColumnNode([
                        createSectionNode([
                          createTextNode('nested-content'),
                          reference,
                          createTextNode('after-cta'),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ])
      const body = [complexEmail]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([
        [0],
        ['children', 0],
        ['columns', 0],
        ['children', 0],
        ['children', 1],
        ['columns', 1],
        ['children', 1],
        ['children', 1],
        ['columns', 1],
        ['children', 0],
        ['children', 1],
      ])
    })

    it('should handle extremely unbalanced tree structure', () => {
      const reference = createTextNode('unbalanced-target')
      let leftBranch = reference
      for (let i = 0; i < 100; i++) {
        leftBranch = createSectionNode([leftBranch])
      }
      const rightBranch = createTextNode('shallow-right')
      const body = [
        createRowNode([createColumnNode([leftBranch]), createColumnNode([rightBranch])]),
      ]
      const result = getPathFromBodyByRef(body, reference)
      const expectedPath = [[0], ['columns', 0], ['children', 0]]
      for (let i = 0; i < 100; i++) {
        expectedPath.push(['children', 0])
      }
      expect(result).toEqual(expectedPath)
    })

    it('should handle reference search with memory pressure simulation', () => {
      const reference = createTextNode('memory-pressure')
      const memoryIntensive = []
      for (let i = 0; i < 1000; i++) {
        const largeContent = 'x'.repeat(1000)
        memoryIntensive.push(
          createSectionNode([
            createTextNode(largeContent),
            createRowNode([
              createColumnNode([createTextNode(largeContent)]),
              createColumnNode([createTextNode(largeContent)]),
            ]),
          ])
        )
      }
      memoryIntensive.push(reference)
      const body = memoryIntensive
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([[1000]])
    })

    it('should handle structure that could cause stack overflow in naive implementations', () => {
      const reference = createTextNode('stack-test')
      let current = reference
      for (let i = 0; i < 1000; i++) {
        if (i % 2 === 0) {
          current = createSectionNode([current])
        } else {
          current = createRowNode([createColumnNode([current])])
        }
      }
      const body = [current]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).not.toBeNull()
      expect(result!.length).toBeGreaterThan(1000)
    })

    it('should handle pathological case with maximum nesting and maximum width', () => {
      const reference = createTextNode('pathological')
      let current = createSectionNode([])
      const children = (current as unknown as { children: TEmailNodeUnion[] }).children
      for (let i = 0; i < 100; i++) {
        children.push(createTextNode(`wide-${i}`))
      }
      children.push(reference)
      for (let depth = 0; depth < 50; depth++) {
        current = createSectionNode([current])
      }
      const body = [current]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).not.toBeNull()
      expect(result?.[result!.length - 1]).toEqual(['children', 100])
    })

    it('should handle malformed structure that breaks type expectations', () => {
      const reference = createTextNode('malformed-test')
      const malformed = {
        type: 'SECTION',
        children: {
          0: createTextNode('fake-array-0'),
          1: reference,
          length: 2,
          push: Array.prototype.push,
        },
      } as unknown as TEmailNodeUnion
      const body = [malformed]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toBeNull()
    })

    it('should handle reference that exists in a detached subtree', () => {
      const reference = createTextNode('detached')
      const _detachedSection = createSectionNode([reference])
      const body = [
        createTextNode('main-content'),
        createSectionNode([createTextNode('other-content')]),
      ]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toBeNull()
    })

    it('should handle structure with recursive-like patterns', () => {
      const reference = createTextNode('recursive-pattern')
      function createRecursivePattern(depth: number): TEmailNodeUnion {
        if (depth === 0) return reference
        return createSectionNode([
          createTextNode(`level-${depth}`),
          createRowNode([
            createColumnNode([createRecursivePattern(depth - 1)]),
            createColumnNode([createTextNode(`sibling-${depth}`)]),
          ]),
        ])
      }
      const body = [createRecursivePattern(10)]
      const result = getPathFromBodyByRef(body, reference)
      expect(result).not.toBeNull()
      expect(result!.length).toBeGreaterThan(20)
    })

    it('should handle final stress test: everything combined', () => {
      const reference = createButtonNode('ultimate-test')
      const ultimateStructure = []

      for (let i = 0; i < 10; i++) {
        const section = createSectionNode([])
        for (let j = 0; j < 50; j++) {
          if (j === 25 && i === 5) {
            ;(section as unknown as { children: TEmailNodeUnion[] }).children.push(
              createRowNode([
                createColumnNode([createTextNode('decoy')]),
                createColumnNode([
                  createSectionNode([
                    createTextNode('nested'),
                    reference,
                    createTextNode('after-target'),
                  ]),
                ]),
              ])
            )
          } else {
            ;(section as unknown as { children: TEmailNodeUnion[] }).children.push(
              createRowNode([
                createColumnNode([createTextNode(`content-${i}-${j}-1`)]),
                createColumnNode([createTextNode(`content-${i}-${j}-2`)]),
              ])
            )
          }
        }
        ultimateStructure.push(section)
      }

      const body = ultimateStructure
      const result = getPathFromBodyByRef(body, reference)
      expect(result).toEqual([
        [5],
        ['children', 25],
        ['columns', 1],
        ['children', 0],
        ['children', 1],
      ])
    })
  })
})
