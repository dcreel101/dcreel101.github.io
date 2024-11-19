
import { z, type SchemaContext } from 'astro:content';

export const buildEntrySchema = (imageContext: any) => {
    const xyz = z.object({
        sort: z.number(),
        title: z.string(),
        description: z.string(),
        updatedDate: z.coerce.date(),
        heroImage: imageContext.image(),
        cardIcon: z.string().nullable().optional(),
        badge: z.string().nullable().optional(),
        mediaCaptionsByFilename: z.array(z.tuple([z.string(), z.string()])).nullable().optional(),
        hideMainGallery: z.boolean().nullable().optional(),
        sortMainGalleryBy: z.enum(["random", "fileNameText", "fileNameList", "captionText", "captionList"]).nullable().optional()
    });
    return xyz;
};

export const entrySchema = z.object({
    sort: z.number(),
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date(),
    heroImage: z.string().nullable().optional(),
    cardIcon: z.string().nullable().optional(),
    badge: z.string().nullable().optional(),
    mediaCaptionsByFilename: z.array(z.tuple([z.string(), z.string()])).nullable().optional(),
    hideMainGallery: z.boolean().nullable().optional(),
    sortMainGalleryBy: z.enum(["random", "fileNameText", "fileNameList", "captionText", "captionList"]).nullable().optional()
});

export const buildEntryWithTagsSchema = (imageContext: any) => buildEntrySchema(imageContext).merge(z.object({
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).nullable().optional(),
}));

export const entryWithTagsSchema = entrySchema.merge(z.object({
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).nullable().optional(),
}));

export const metaSchema = z.object({
    id: z.string().optional(),
    slug: z.string().optional(),
    collection: z.string().optional(),
    url: z.string().optional()
});

const entrySchemaWithMeta = entrySchema.merge(metaSchema);

export const buildEntryWithTagsSchemaWithMeta = (imageContext: any) => buildEntryWithTagsSchema(imageContext).merge(metaSchema);
const entryWithTagsSchemaWithMeta = entryWithTagsSchema.merge(metaSchema);

export type Entry = z.infer<typeof entrySchemaWithMeta>;
export type EntryWithTags = z.infer<typeof entryWithTagsSchemaWithMeta>;
export type MetaInfo = z.infer<typeof metaSchema>;