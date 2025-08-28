import { TEmailNodeUnion } from '../types.t'

export function deleteNodeFromBodyByRef(body: TEmailNodeUnion[], reference: TEmailNodeUnion): void {
  for (let i = body.length - 1; i >= 0; i--) {
    const node = body[i]

    if (node === reference) {
      body.splice(i, 1)
      continue
    }

    if ('children' in node && node.children) {
      deleteNodeFromBodyByRef(node.children, reference)
    }

    if ('columns' in node && node.columns) {
      for (let j = node.columns.length - 1; j >= 0; j--) {
        const column = node.columns[j]
        if (column === reference) {
          node.columns.splice(j, 1)
          continue
        }

        if (column.children) {
          deleteNodeFromBodyByRef(column.children, reference)
        }
      }
    }
  }
}
