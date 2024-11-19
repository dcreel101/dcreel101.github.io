import { z, type ImageFunction } from 'astro:content';

const zodAssetInfo = z.object({
    // ASTRO_ASSET: z.any().nullable().optional(),
    src: z.string(),
    width: z.number(),
    height: z.number(),
    format: z.union([
        z.literal("png"),
        z.literal("jpg"),
        z.literal("jpeg"),
        z.literal("tiff"),
        z.literal("webp"),
        z.literal("gif"),
        z.literal("svg"),
        z.literal("avif")]),
    // orientation: z.number(),
    // isESMImport: z.boolean()
});

export const buildEntrySchema = (image: ImageFunction) => {
    return z.object({
        sort: z.number(),
        title: z.string(),
        description: z.string(),
        updatedDate: z.coerce.date(),
        heroImage: image().nullable().optional(),
        cardIcon: z.string().nullable().optional(),
        badge: z.string().nullable().optional(),
        galleryImages: z.array(z.tuple([z.string(), image()])).nullable().optional(),
        hideMainGallery: z.boolean().nullable().optional(),
    });
};

export const buildEntryWithTagsSchema = (imageContext: ImageFunction) => buildEntrySchema(imageContext).merge(z.object({
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).nullable().optional(),
}));

const metaSchema = z.object({
    id: z.string().optional(),
    slug: z.string().optional(),
    collection: z.string().optional(),
    url: z.string().optional()
});

const entrySchema = buildEntrySchema(() => zodAssetInfo);
const entryWithTagsSchema = buildEntryWithTagsSchema(() => zodAssetInfo);
export const entrySchemaWithMeta = entrySchema.merge(metaSchema);
export const entryWithTagsSchemaWithMeta = entryWithTagsSchema.merge(metaSchema);

export type Entry = z.infer<typeof entrySchemaWithMeta>;
export type EntryImage = z.infer<typeof zodAssetInfo>;
export type EntryWithTags = z.infer<typeof entryWithTagsSchemaWithMeta>;
export type MetaInfo = z.infer<typeof metaSchema>;