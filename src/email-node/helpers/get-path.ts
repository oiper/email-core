import { TRenderNodePaths } from '../../render-email'
import { TEmailNodeUnion } from '../types.t'

export function getPathFromBodyByRef(
  body: TEmailNodeUnion[],
  reference: TEmailNodeUnion
): TRenderNodePaths | null {
  if (!body || !Array.isArray(body) || !reference) {
    return null
  }

  for (let i = 0; i < body.length; i++) {
    const node = body[i]

    if (!node) {
      continue
    }

    const currentPath = [[i]]

    if (node === reference) {
      return currentPath
    }

    const result = getPathFromBodyInner(node, reference, currentPath)
    if (result.length > 0) {
      return result
    }
  }

  return null
}

function getPathFromBodyInner(
  input: TEmailNodeUnion,
  reference: TEmailNodeUnion,
  prevPath: TRenderNodePaths = []
): TRenderNodePaths {
  if (!input || typeof input !== 'object') return []

  if ('children' in input && Array.isArray(input.children)) {
    for (let i = 0; i < input.children.length; i++) {
      const child = input.children[i]
      if (!child) continue

      const currentPath = [...prevPath, ['children', i]]

      if (child === reference) return currentPath

      const result = getPathFromBodyInner(child, reference, currentPath)
      if (result.length > 0) return result
    }
  }

  if ('columns' in input && Array.isArray(input.columns)) {
    for (let i = 0; i < input.columns.length; i++) {
      const column = input.columns[i]
      if (!column) continue

      const currentPath = [...prevPath, ['columns', i]]

      if (column === reference) return currentPath

      const result = getPathFromBodyInner(column, reference, currentPath)
      if (result.length > 0) return result
    }
  }

  return []
}
