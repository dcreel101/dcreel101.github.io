import { z, defineCollection } from "astro:content";
import { entrySchema, entryWithTagsSchema, metaSchema } from "@lib/Entry.ts"
import { workProjectSchema } from "@lib/WorkProject.ts"

const blogPostSchema = entryWithTagsSchema.merge(z.object({
    publicationDate: z.coerce.date(),
}));

const storeItemSchema = entrySchema.merge(z.object({
    price: z.string().optional(),
    oldPrice: z.string().optional(),
    shopUrl: z.string().optional(),
    customButtonLabel: z.string().optional(),
    customButtonUrl: z.string().optional()
}));

const projectSchema = entrySchema.merge(z.object({
    status: z.string().optional(),
    startDate: z.string().optional(),
    lastActiveDate: z.string().optional(),
}));

const hobbySchema = entryWithTagsSchema.merge(z.object({
    startDate: z.string().optional(),
    lastActiveDate: z.string().optional(),
}));

const blogPostsCollection = defineCollection({ schema: blogPostSchema });
const storeItemsCollection = defineCollection({ schema: storeItemSchema });
const projectsCollection = defineCollection({ schema: projectSchema });
const hobbiesCollection = defineCollection({ schema: hobbySchema });
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