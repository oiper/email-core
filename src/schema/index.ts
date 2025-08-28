import { z } from 'zod'
import * as core from './core'
import type * as types from './types.t'

export const zodEmailNodeSchema: z.ZodType<types.TEmailNodeUnion> = z.lazy(() => {
  return z.discriminatedUnion('type', [
    core.emailHTMLSchema,
    core.emailCodeSchema,
    core.emailMarkdownSchema,

    core.emailTextSchema,
    core.emailButtonSchema,
    core.emailHeadingSchema,

    core.emailImageSchema,
    core.emailSpacerSchema,

    core.emailSectionSchema.extend({ children: z.array(zodEmailNodeSchema) }),
    core.emailRowSchema.extend({
      columns: z.array(core.emailColumnSchema.extend({ children: z.array(zodEmailNodeSchema) })),
    }),
  ])
})

export * as emailNodeHelpers from './common'
export * from './core'
export * from './helpers'
export * from './types.t'
