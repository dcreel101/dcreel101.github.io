import { z, defineCollection, type CollectionConfig, type SchemaContext } from "astro:content";
import { entrySchema, entryWithTagsSchema, metaSchema, buildEntryWithTagsSchema } from "@lib/Entry.ts"
import { workProjectSchema } from "@lib/WorkProject.ts"

const blogPostSchema = entryWithTagsSchema.merge(z.object({
    publicationDate: z.coerce.date(),
}));

const storeItemSchema = entrySchema.merge(z.object({
    price: z.string(),
    oldPrice: z.string().nullable().optional(),
    shopUrl: z.string().nullable().optional(),
    customButtonLabel: z.string().nullable().optional(),
    customButtonUrl: z.string().nullable().optional()
}));

const projectSchema = entrySchema.merge(z.object({
    status: z.string().nullable().optional(),
    startDate: z.string().nullable().optional(),
    lastActiveDate: z.string().nullable().optional(),
}));

export const buildHobbySchema = (imageContext: any) => buildEntryWithTagsSchema(imageContext).merge(z.object({
    startDate: z.string().nullable().optional(),
    lastActiveDate: z.string().nullable().optional(),
}));
const hobbySchema = entryWithTagsSchema.merge(z.object({
    startDate: z.string().nullable().optional(),
    lastActiveDate: z.string().nullable().optional(),
}));

// schema?: S | ((context: SchemaContext) => S);
const hobbySchemaConfig: CollectionConfig<typeof hobbySchema> = {
    schema: (context: SchemaContext) => buildHobbySchema(context),
}

const blogPostsCollection = defineCollection({ schema: blogPostSchema });
const storeItemsCollection = defineCollection({ schema: storeItemSchema });
const projectsCollection = defineCollection({ schema: projectSchema });
// const hobbiesCollection = defineCollection({ schema: () => hobbySchema });
const hobbiesCollection = defineCollection(hobbySchemaConfig);
const workCollection = defineCollection({ schema: workProjectSchema });

export const collections = {
    'blog': blogPostsCollection,
    'store': storeItemsCollection,
    'projects': projectsCollection,
    'hobbies': hobbiesCollection,
    'work': workCollection,
}

const blogPostWithMetaSchema = blogPostSchema.merge(metaSchema);
const storeItemSchemaWithMetaSchema = storeItemSchema.merge(metaSchema);
const projectSchemaWithMetaSchema = projectSchema.merge(metaSchema);
const hobbySchemaWithMetaSchema = hobbySchema.merge(metaSchema);
export type BlogPost = z.infer<typeof blogPostWithMetaSchema>;
export type StoreItem = z.infer<typeof storeItemSchemaWithMetaSchema>;
export type Project = z.infer<typeof projectSchemaWithMetaSchema>;
export type Hobby = z.infer<typeof hobbySchemaWithMetaSchema>;