function parsePxValue(input: unknown) {
  const numInput = Number(input)
  if (Number.isNaN(numInput) || !numInput) return '0'
  return numInput + 'px'
}

export function sideRadiusToCombined({
  top,
  left,
  right,
  bottom,
}: {
  top: unknown
  left: unknown
  right: unknown
  bottom: unknown
}) {
  return [
    parsePxValue(top),
    parsePxValue(right),
    parsePxValue(bottom),
    parsePxValue(left),
  ].join(' ')
}

export function sidePaddingToCombined({
  top,
  left,
  right,
  bottom,
}: {
  top: unknown
  left: unknown
  right: unknown
  bottom: unknown
}) {
  return [
    parsePxValue(top),
    parsePxValue(right),
    parsePxValue(bottom),
    parsePxValue(left),
  ].join(' ')
}
