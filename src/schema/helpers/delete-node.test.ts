import { beforeEach, describe, expect, it } from 'vitest'
import { TEmailNodeColumn, TEmailNodeRow, TEmailNodeSection, TEmailNodeUnion } from '../types.t'
import { deleteNodeFromBodyByRef } from './delete-node'

describe('deleteNodeFromBodyByRef', () => {
  let textNode1: TEmailNodeUnion
  let textNode2: TEmailNodeUnion
  let buttonNode: TEmailNodeUnion
  let headingNode: TEmailNodeUnion
  let imageNode: TEmailNodeUnion
  let spacerNode: TEmailNodeUnion
  let column1: TEmailNodeColumn
  let column2: TEmailNodeColumn
  let row: TEmailNodeRow
  let section: TEmailNodeSection
  let nestedSection: TEmailNodeSection

  beforeEach(() => {
    textNode1 = {
      type: 'TEXT',
      content: 'Hello World',
    }

    textNode2 = {
      type: 'TEXT',
      content: 'Another text node',
    }

    buttonNode = {
      type: 'BUTTON',
      content: 'Click me',
      bgColor: '#007bff',
    }

    headingNode = {
      type: 'HEADING',
      as: 'h1',
      content: 'Main Title',
    }

    imageNode = {
      type: 'IMAGE',
      src: 'https://example.com/image.jpg',
      alt: 'Example image',
    }

    spacerNode = {
      type: 'SPACER',
      height: 20,
    }

    column1 = {
      type: 'COLUMN',
      children: [textNode1, buttonNode],
    }

    column2 = {
      type: 'COLUMN',
      children: [textNode2, imageNode],
    }

    row = {
      type: 'ROW',
      columns: [column1, column2],
    }

    section = {
      type: 'SECTION',
      children: [headingNode, row, spacerNode],
    }

    nestedSection = {
      type: 'SECTION',
      children: [
        {
          type: 'SECTION',
          children: [textNode1],
        },
      ],
    }
  })

  describe('Simple node deletion from body array', () => {
    it('should delete a direct child node from body', () => {
      const body = [textNode1, buttonNode, headingNode]
      deleteNodeFromBodyByRef(body, buttonNode)

      expect(body).toHaveLength(2)
      expect(body).toEqual([textNode1, headingNode])
      expect(body).not.toContain(buttonNode)
    })

    it('should delete the first node in body', () => {
      const body = [textNode1, buttonNode, headingNode]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(2)
      expect(body).toEqual([buttonNode, headingNode])
      expect(body).not.toContain(textNode1)
    })

    it('should delete the last node in body', () => {
      const body = [textNode1, buttonNode, headingNode]
      deleteNodeFromBodyByRef(body, headingNode)

      expect(body).toHaveLength(2)
      expect(body).toEqual([textNode1, buttonNode])
      expect(body).not.toContain(headingNode)
    })

    it('should delete the only node in body', () => {
      const body = [textNode1]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(0)
      expect(body).toEqual([])
    })

    it('should not modify body if reference node is not found', () => {
      const body = [textNode1, buttonNode]
      const unknownNode = { type: 'TEXT', content: 'Unknown' } as TEmailNodeUnion
      deleteNodeFromBodyByRef(body, unknownNode)

      expect(body).toHaveLength(2)
      expect(body).toEqual([textNode1, buttonNode])
    })

    it('should handle empty body array', () => {
      const body: TEmailNodeUnion[] = []
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(0)
      expect(body).toEqual([])
    })
  })

  describe('Node deletion from section children', () => {
    it('should delete a node from section children', () => {
      const body = [section]
      deleteNodeFromBodyByRef(body, headingNode)

      expect(body).toHaveLength(1)
      expect(section.children).toHaveLength(2)
      expect(section.children).toEqual([row, spacerNode])
      expect(section.children).not.toContain(headingNode)
    })

    it('should delete a node from deeply nested section', () => {
      const body = [nestedSection]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(1)
      const innerSection = nestedSection.children[0] as TEmailNodeSection
      expect(innerSection.children).toHaveLength(0)
      expect(innerSection.children).not.toContain(textNode1)
    })

    it('should delete an entire section from body', () => {
      const body = [section, textNode1]
      deleteNodeFromBodyByRef(body, section)

      expect(body).toHaveLength(1)
      expect(body).toEqual([textNode1])
      expect(body).not.toContain(section)
    })

    it('should handle section with empty children array', () => {
      const emptySection = {
        type: 'SECTION',
        children: [],
      } as TEmailNodeUnion
      const body = [emptySection, textNode1]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(1)
      expect(body).toEqual([emptySection])
    })
  })

  describe('Node deletion from row columns', () => {
    it('should delete a column from row', () => {
      const body = [row]
      deleteNodeFromBodyByRef(body, column1)

      expect(body).toHaveLength(1)
      expect(row.columns).toHaveLength(1)
      expect(row.columns).toEqual([column2])
      expect(row.columns).not.toContain(column1)
    })

    it('should delete all columns from row', () => {
      const body = [row]
      deleteNodeFromBodyByRef(body, column1)
      deleteNodeFromBodyByRef(body, column2)

      expect(body).toHaveLength(1)
      expect(row.columns).toHaveLength(0)
      expect(row.columns).toEqual([])
    })

    it('should delete an entire row from body', () => {
      const body = [row, textNode1]
      deleteNodeFromBodyByRef(body, row)

      expect(body).toHaveLength(1)
      expect(body).toEqual([textNode1])
      expect(body).not.toContain(row)
    })

    it('should handle row with empty columns array', () => {
      const emptyRow = {
        type: 'ROW',
        columns: [],
      } as TEmailNodeUnion
      const body = [emptyRow, textNode1]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(1)
      expect(body).toEqual([emptyRow])
    })
  })

  describe('Node deletion from column children', () => {
    it('should delete a node from column children', () => {
      const body = [row]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(column1.children).toHaveLength(1)
      expect(column1.children).toEqual([buttonNode])
      expect(column1.children).not.toContain(textNode1)
    })

    it('should delete multiple nodes from different columns', () => {
      const body = [row]
      deleteNodeFromBodyByRef(body, textNode1)
      deleteNodeFromBodyByRef(body, imageNode)

      expect(column1.children).toHaveLength(1)
      expect(column1.children).toEqual([buttonNode])
      expect(column2.children).toHaveLength(1)
      expect(column2.children).toEqual([textNode2])
    })

    it('should delete all children from a column', () => {
      const body = [row]
      deleteNodeFromBodyByRef(body, textNode1)
      deleteNodeFromBodyByRef(body, buttonNode)

      expect(column1.children).toHaveLength(0)
      expect(column1.children).toEqual([])
    })
  })

  describe('Complex nested structure deletion', () => {
    it('should delete nodes from complex nested structure', () => {
      const deepTextNode = { type: 'TEXT', content: 'Deep text' } as TEmailNodeUnion
      const deepColumn: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [deepTextNode],
      }
      const deepRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [deepColumn],
      }
      const deepSection: TEmailNodeSection = {
        type: 'SECTION',
        children: [deepRow],
      }

      const body = [deepSection, textNode1]
      deleteNodeFromBodyByRef(body, deepTextNode)

      expect(deepColumn.children).toHaveLength(0)
      expect(deepColumn.children).not.toContain(deepTextNode)
    })

    it('should handle multiple levels of nesting with sections', () => {
      const level3Text = { type: 'TEXT', content: 'Level 3' } as TEmailNodeUnion
      const level3Section: TEmailNodeSection = {
        type: 'SECTION',
        children: [level3Text],
      }
      const level2Section: TEmailNodeSection = {
        type: 'SECTION',
        children: [level3Section],
      }
      const level1Section: TEmailNodeSection = {
        type: 'SECTION',
        children: [level2Section],
      }

      const body = [level1Section]
      deleteNodeFromBodyByRef(body, level3Text)

      expect(level3Section.children).toHaveLength(0)
      expect(level3Section.children).not.toContain(level3Text)
    })

    it('should handle rows within sections within columns', () => {
      const innerText = { type: 'TEXT', content: 'Inner text' } as TEmailNodeUnion
      const innerColumn: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [innerText],
      }
      const innerRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [innerColumn],
      }
      const innerSection: TEmailNodeSection = {
        type: 'SECTION',
        children: [innerRow],
      }
      const outerColumn: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [innerSection],
      }
      const outerRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [outerColumn],
      }

      const body = [outerRow]
      deleteNodeFromBodyByRef(body, innerText)

      expect(innerColumn.children).toHaveLength(0)
      expect(innerColumn.children).not.toContain(innerText)
    })

    it('should delete intermediate container nodes', () => {
      const body = [section]
      deleteNodeFromBodyByRef(body, row)

      expect(section.children).toHaveLength(2)
      expect(section.children).toEqual([headingNode, spacerNode])
      expect(section.children).not.toContain(row)
    })
  })

  describe('Multiple deletions and state consistency', () => {
    it('should handle sequential deletions correctly', () => {
      const body = [section, textNode1, buttonNode]

      deleteNodeFromBodyByRef(body, headingNode)
      expect(section.children).toHaveLength(2)

      deleteNodeFromBodyByRef(body, textNode1)
      expect(body).toHaveLength(2)
      expect(body).toEqual([section, buttonNode])

      deleteNodeFromBodyByRef(body, spacerNode)
      expect(section.children).toHaveLength(1)
      expect(section.children).toEqual([row])
    })

    it('should maintain correct indices after deletions', () => {
      const text1 = { type: 'TEXT', content: 'Text 1' } as TEmailNodeUnion
      const text2 = { type: 'TEXT', content: 'Text 2' } as TEmailNodeUnion
      const text3 = { type: 'TEXT', content: 'Text 3' } as TEmailNodeUnion
      const text4 = { type: 'TEXT', content: 'Text 4' } as TEmailNodeUnion

      const body = [text1, text2, text3, text4]

      deleteNodeFromBodyByRef(body, text2)
      expect(body).toEqual([text1, text3, text4])

      deleteNodeFromBodyByRef(body, text4)
      expect(body).toEqual([text1, text3])

      deleteNodeFromBodyByRef(body, text1)
      expect(body).toEqual([text3])
    })

    it('should handle deletion of non-existent nodes gracefully', () => {
      const nonExistentNode = { type: 'TEXT', content: 'Does not exist' } as TEmailNodeUnion
      const body = [section]
      const originalLength = section.children.length

      deleteNodeFromBodyByRef(body, nonExistentNode)

      expect(body).toHaveLength(1)
      expect(section.children).toHaveLength(originalLength)
    })
  })

  describe('Edge cases and error handling', () => {
    it('should handle nodes without children or columns properties', () => {
      const simpleNode = { type: 'TEXT', content: 'Simple' } as TEmailNodeUnion
      const body = [simpleNode, textNode1]

      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(1)
      expect(body).toEqual([simpleNode])
    })

    it('should handle mixed node types in body', () => {
      const htmlNode = {
        type: 'HTML',
        content: '<p>HTML content</p>',
      } as TEmailNodeUnion
      const codeNode = {
        type: 'CODE',
        content: 'console.log("Hello")',
        language: 'javascript',
        theme: 'dracula',
      } as TEmailNodeUnion
      const markdownNode = {
        type: 'MARKDOWN',
        content: '# Markdown heading',
      } as TEmailNodeUnion

      const body = [htmlNode, codeNode, markdownNode, section]

      deleteNodeFromBodyByRef(body, codeNode)
      expect(body).toHaveLength(3)
      expect(body).toEqual([htmlNode, markdownNode, section])

      deleteNodeFromBodyByRef(body, headingNode)
      expect(section.children).toHaveLength(2)
      expect(section.children).not.toContain(headingNode)
    })

    it('should handle very deeply nested structures', () => {
      const deepestNode: TEmailNodeUnion = { type: 'TEXT', content: 'Deep node' } as TEmailNodeUnion
      let currentLevel: TEmailNodeUnion = deepestNode

      for (let i = 0; i < 10; i++) {
        currentLevel = {
          type: 'SECTION',
          children: [currentLevel],
        } as TEmailNodeSection
      }

      const body = [currentLevel]

      deleteNodeFromBodyByRef(body, deepestNode)

      let current = currentLevel
      for (let i = 0; i < 9; i++) {
        expect((current as TEmailNodeSection).children).toHaveLength(1)
        current = (current as TEmailNodeSection).children[0]
      }
      expect((current as TEmailNodeSection).children).toHaveLength(0)
    })

    it('should preserve object references for non-deleted nodes', () => {
      const body = [textNode1, buttonNode, headingNode]
      const originalTextNode = textNode1
      const originalHeadingNode = headingNode

      deleteNodeFromBodyByRef(body, buttonNode)

      expect(body[0]).toBe(originalTextNode)
      expect(body[1]).toBe(originalHeadingNode)
    })
  })

  describe('Rare edge cases and boundary conditions', () => {
    it('should handle deletion from empty nested structures', () => {
      const emptyColumn: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [],
      }
      const emptyRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [],
      }
      const emptySection: TEmailNodeSection = {
        type: 'SECTION',
        children: [],
      }

      const body = [emptySection, emptyRow, emptyColumn, textNode1]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(3)
      expect(body).toEqual([emptySection, emptyRow, emptyColumn])
    })

    it('should handle deletion when node appears multiple times', () => {
      const sharedNode = { type: 'TEXT', content: 'Shared' } as TEmailNodeUnion

      const column1: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [sharedNode, textNode1],
      }

      const column2: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [sharedNode, textNode2],
      }

      const row: TEmailNodeRow = {
        type: 'ROW',
        columns: [column1, column2],
      }

      const body = [row, sharedNode]
      deleteNodeFromBodyByRef(body, sharedNode)

      expect(body).toHaveLength(1)
      expect(body).toEqual([row])
      expect(column1.children).toEqual([textNode1])
      expect(column2.children).toEqual([textNode2])
    })

    it('should handle massive arrays with many siblings', () => {
      const nodes = Array.from(
        { length: 1000 },
        (_, i) =>
          ({
            type: 'TEXT',
            content: `Node ${i}`,
          }) as TEmailNodeUnion
      )

      const targetNode = nodes[500]
      const body = [...nodes]

      deleteNodeFromBodyByRef(body, targetNode)

      expect(body).toHaveLength(999)
      expect(body).not.toContain(targetNode)
      expect(body[499]).toEqual(nodes[499])
      expect(body[500]).toEqual(nodes[501])
    })

    it('should handle deletion in deeply mixed container structures', () => {
      const leafNode = { type: 'SPACER', height: 10 } as TEmailNodeUnion

      const column: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [leafNode],
      }

      const row: TEmailNodeRow = {
        type: 'ROW',
        columns: [column],
      }

      const innerSection: TEmailNodeSection = {
        type: 'SECTION',
        children: [row],
      }

      const outerColumn: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [innerSection],
      }

      const outerRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [outerColumn],
      }

      const outerSection: TEmailNodeSection = {
        type: 'SECTION',
        children: [outerRow],
      }

      const body = [outerSection]
      deleteNodeFromBodyByRef(body, leafNode)

      expect(column.children).toHaveLength(0)
      expect(column.children).not.toContain(leafNode)
    })
  })

  describe('Performance edge cases', () => {
    it('should handle deletion from structure with many empty containers', () => {
      const targetNode = { type: 'TEXT', content: 'Target' } as TEmailNodeUnion

      const emptyColumns = Array.from(
        { length: 100 },
        () =>
          ({
            type: 'COLUMN',
            children: [],
          }) as TEmailNodeColumn
      )

      const targetColumn: TEmailNodeColumn = {
        type: 'COLUMN',
        children: [targetNode],
      }

      const row: TEmailNodeRow = {
        type: 'ROW',
        columns: [...emptyColumns, targetColumn],
      }

      const body = [row]
      deleteNodeFromBodyByRef(body, targetNode)

      expect(targetColumn.children).toHaveLength(0)
      expect(row.columns).toHaveLength(101)
    })

    it('should handle deletion from large arrays efficiently', () => {
      const manyNodes = Array.from(
        { length: 500 },
        (_, i) =>
          ({
            type: 'TEXT',
            content: `Node ${i}`,
          }) as TEmailNodeUnion
      )

      const lastNode = { type: 'TEXT', content: 'Last Node' } as TEmailNodeUnion

      const section: TEmailNodeSection = {
        type: 'SECTION',
        children: [...manyNodes, lastNode],
      }

      const body = [section]
      deleteNodeFromBodyByRef(body, lastNode)

      expect(section.children).toHaveLength(500)
      expect(section.children).not.toContain(lastNode)
      expect(section.children[499]).toEqual(manyNodes[499])
    })

    it('should handle maximum practical nesting depth', () => {
      const deepestNode: TEmailNodeUnion = { type: 'IMAGE', src: 'deep.jpg' } as TEmailNodeUnion
      let current: TEmailNodeUnion = deepestNode

      for (let i = 0; i < 50; i++) {
        current = {
          type: 'SECTION',
          children: [current],
        } as TEmailNodeSection
      }

      const body = [current]
      deleteNodeFromBodyByRef(body, deepestNode)

      let checkLevel = current
      for (let i = 0; i < 49; i++) {
        expect((checkLevel as TEmailNodeSection).children).toHaveLength(1)
        checkLevel = (checkLevel as TEmailNodeSection).children[0]
      }
      expect((checkLevel as TEmailNodeSection).children).toHaveLength(0)
    })
  })

  describe('Type-specific edge cases', () => {
    it('should handle all node types with minimal properties', () => {
      const minimalNodes = [
        { type: 'TEXT', content: '' },
        { type: 'BUTTON', content: '' },
        { type: 'HEADING', as: 'h1', content: '' },
        { type: 'IMAGE', src: '' },
        { type: 'SPACER', height: 0 },
        { type: 'HTML', content: '' },
        { type: 'CODE', content: '', language: 'javascript', theme: 'dracula' },
        { type: 'MARKDOWN', content: '' },
      ] as TEmailNodeUnion[]

      const body = [...minimalNodes]
      const targetNode = minimalNodes[3]

      deleteNodeFromBodyByRef(body, targetNode)

      expect(body).toHaveLength(7)
      expect(body).not.toContain(targetNode)
    })

    it('should handle nodes with all optional properties', () => {
      const maximalNode = {
        type: 'TEXT',
        content: 'Maximal text',
        linkHref: 'https://example.com',
        hideOn: 'desktop',
        meta: { custom: 'data', nested: { deep: 'value' } },
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#000000',
        bgColor: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        textDecoration: 'underline',
        lineHeight: 1.5,
        letterSpacing: 1,
        maxWidth: 600,
        width: '100%',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 20,
        paddingBottom: 25,
        containerPaddingTop: 5,
        containerPaddingLeft: 10,
        containerPaddingRight: 15,
        containerPaddingBottom: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        borderRadius: 5,
      } as unknown as TEmailNodeUnion

      const body = [textNode1, maximalNode, buttonNode]
      deleteNodeFromBodyByRef(body, maximalNode)

      expect(body).toHaveLength(2)
      expect(body).toEqual([textNode1, buttonNode])
      expect(body).not.toContain(maximalNode)
    })

    it('should handle rows with varying column counts', () => {
      const singleColumnRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [column1],
      }

      const multiColumnRow: TEmailNodeRow = {
        type: 'ROW',
        columns: [column1, column2],
      }

      const body = [singleColumnRow, multiColumnRow]

      deleteNodeFromBodyByRef(body, column1)

      expect(singleColumnRow.columns).toHaveLength(0)
      expect(multiColumnRow.columns).toHaveLength(1)
      expect(multiColumnRow.columns).toEqual([column2])
    })
  })

  describe('Boundary conditions', () => {
    it('should handle deletion of node with unusual but valid properties', () => {
      const nodeWithExtraProps = {
        type: 'TEXT',
        content: 'Valid node',
        customProperty: 'should not affect deletion',
        anotherProp: { nested: 'data' },
      } as TEmailNodeUnion

      const body = [textNode1, nodeWithExtraProps, buttonNode]
      deleteNodeFromBodyByRef(body, nodeWithExtraProps)

      expect(body).toHaveLength(2)
      expect(body).toEqual([textNode1, buttonNode])
      expect(body).not.toContain(nodeWithExtraProps)
    })

    it('should handle deletion when structure has no matching properties', () => {
      const nodeWithoutSpecialProps = {
        type: 'IMAGE',
        src: 'test.jpg',
      } as TEmailNodeUnion

      const body = [nodeWithoutSpecialProps, textNode1]
      deleteNodeFromBodyByRef(body, textNode1)

      expect(body).toHaveLength(1)
      expect(body).toEqual([nodeWithoutSpecialProps])
    })
  })

  describe('State consistency edge cases', () => {
    it('should maintain array integrity after multiple deletions', () => {
      const nodes = [
        { type: 'TEXT', content: 'A' },
        { type: 'TEXT', content: 'B' },
        { type: 'TEXT', content: 'C' },
        { type: 'TEXT', content: 'D' },
        { type: 'TEXT', content: 'E' },
      ] as TEmailNodeUnion[]

      const section: TEmailNodeSection = {
        type: 'SECTION',
        children: [...nodes],
      }

      const body = [section]

      deleteNodeFromBodyByRef(body, nodes[1])
      deleteNodeFromBodyByRef(body, nodes[3])
      deleteNodeFromBodyByRef(body, nodes[0])

      expect(section.children).toHaveLength(2)
      expect(section.children).toEqual([nodes[2], nodes[4]])
    })

    it('should handle deletion of nested containers without affecting siblings', () => {
      const siblingSection1: TEmailNodeSection = {
        type: 'SECTION',
        children: [textNode1],
      }

      const targetSection: TEmailNodeSection = {
        type: 'SECTION',
        children: [textNode2],
      }

      const siblingSection2: TEmailNodeSection = {
        type: 'SECTION',
        children: [buttonNode],
      }

      const parentSection: TEmailNodeSection = {
        type: 'SECTION',
        children: [siblingSection1, targetSection, siblingSection2],
      }

      const body = [parentSection]
      deleteNodeFromBodyByRef(body, targetSection)

      expect(parentSection.children).toHaveLength(2)
      expect(parentSection.children).toEqual([siblingSection1, siblingSection2])
      expect(siblingSection1.children).toEqual([textNode1])
      expect(siblingSection2.children).toEqual([buttonNode])
    })

    it('should handle concurrent-like operations on same structure', () => {
      const nodes = Array.from(
        { length: 100 },
        (_, i) =>
          ({
            type: 'TEXT',
            content: `Node ${i}`,
          }) as TEmailNodeUnion
      )

      const section: TEmailNodeSection = {
        type: 'SECTION',
        children: [...nodes],
      }

      const body = [section]

      const nodesToDelete = [nodes[10], nodes[50], nodes[90]]
      nodesToDelete.forEach((node) => deleteNodeFromBodyByRef(body, node))

      expect(section.children).toHaveLength(97)
      nodesToDelete.forEach((node) => {
        expect(section.children).not.toContain(node)
      })
    })
  })
})
