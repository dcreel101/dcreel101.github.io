
import { z } from 'astro:content';
import { metaSchema, type MetaInfo } from './Entry';

export const workProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date(),
    heroImage: z.string().nullable().optional(),
    cardIcon: z.string().nullable().optional(),
});

const workProjectSchemaWithMeta = workProjectSchema.merge(metaSchema);

export type WorkProject = z.infer<typeof workProjectSchemaWithMeta>;
export { type MetaInfo };