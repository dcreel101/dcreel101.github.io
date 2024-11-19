import { z, defineCollection, type SchemaContext, type ImageFunction } from "astro:content";
import * as Entry from "@lib/Entry.ts"
// import { workProjectSchema } from "@lib/WorkProject.ts"

const blogPostSchema = z.object({
    publicationDate: z.coerce.date(),
});
const buildBlogPostSchema = (image: ImageFunction) => Entry.buildEntryWithTagsSchema(image).merge(blogPostSchema);

const storeItemSchema = z.object({
    price: z.string(),
    oldPrice: z.string().nullable().optional(),
    shopUrl: z.string().nullable().optional(),
    customButtonLabel: z.string().nullable().optional(),
    customButtonUrl: z.string().nullable().optional()
});
const buildStoreItemSchema = (image: ImageFunction) => Entry.buildEntrySchema(image).merge(storeItemSchema);

const projectSchema = z.object({
    status: z.string().nullable().optional(),
    startDate: z.string().nullable().optional(),
    lastActiveDate: z.string().nullable().optional(),
});
const buildProjectSchema = (image: ImageFunction) => Entry.buildEntrySchema(image).merge(projectSchema);

const hobbySchema = z.object({
    startDate: z.string().nullable().optional(),
    lastActiveDate: z.string().nullable().optional(),
});
const buildHobbySchema = (image: ImageFunction) => Entry.buildEntryWithTagsSchema(image).merge(hobbySchema);

const blogPostsCollection = defineCollection({ schema: (context: SchemaContext) => buildBlogPostSchema(context.image) });
const storeItemsCollection = defineCollection({ schema: (context: SchemaContext) => buildStoreItemSchema(context.image) });
const projectsCollection = defineCollection({ schema: (context: SchemaContext) => buildProjectSchema(context.image) });
const hobbiesCollection = defineCollection({ schema: (context: SchemaContext) => buildHobbySchema(context.image) });
// const workCollection = defineCollection({ schema: workProjectSchema });

export const collections = {
    'blog': blogPostsCollection,
    'store': storeItemsCollection,
    'projects': projectsCollection,
    'hobbies': hobbiesCollection,
    // 'work': workCollection,
}

const blogPostWithMetaSchema = blogPostSchema.merge(Entry.entryWithTagsSchemaWithMeta);
const storeItemSchemaWithMetaSchema = storeItemSchema.merge(Entry.entrySchemaWithMeta);
const projectSchemaWithMetaSchema = projectSchema.merge(Entry.entrySchemaWithMeta);
const hobbySchemaWithMetaSchema = hobbySchema.merge(Entry.entryWithTagsSchemaWithMeta);
export type BlogPost = z.infer<typeof blogPostWithMetaSchema>;
export type StoreItem = z.infer<typeof storeItemSchemaWithMetaSchema>;
export type Project = z.infer<typeof projectSchemaWithMetaSchema>;
export type Hobby = z.infer<typeof hobbySchemaWithMetaSchema>;