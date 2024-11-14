/// <reference path="Entry.ts" />
import { getCollection, type ContentEntryMap, type Render } from "astro:content";
import { type EntryWithTags, type Entry, type MetaInfo } from "@lib/Entry.ts"
import * as PathUtils from "@lib/PathUtils.ts"
import createSlug from "@lib/createSlug.ts";
import type { BlogPost, Hobby, Project, StoreItem } from "src/content/config.ts";

export { type Entry };
export { type EntryWithTags };
export { type BlogPost, type Hobby, type Project, type StoreItem };

export function getTagCountsByTag(entries: Iterable<EntryWithTags>): { tag: string, count: number }[] {
    let tagCountsByTag = new Map<string, { tag: string, count: number }>();

    for (const e of entries) {
        let tags = e.tags ?? [];
        for (const t of tags) {
            let c = tagCountsByTag.has(t) ? tagCountsByTag.get(t)!.count : 0;
            c++;
            tagCountsByTag.set(t, { tag: t, count: c });
        }
    }

    let res = Array.from(tagCountsByTag.values());

    res.sort((a, b) => (b.count - a.count) || a.tag.localeCompare(b.tag));

    return res;
}

async function getCollectionMetaEntries<TEntry extends Entry | EntryWithTags>(collectionName: keyof ContentEntryMap): Promise<
    {
        meta: MetaInfo,
        entry: any,
        render(): Render[".md"]
    }[]> {
    const metaEntries = (await getCollection(collectionName)).map((td) => ({
        meta: ({ id: td.id, slug: td.slug, collection: collectionName }) as MetaInfo,
        entry: td.data,
        render: td.render
    }));

    return metaEntries;
}

export async function getCollectionEntries<TEntry extends Entry | EntryWithTags>(collectionName: keyof ContentEntryMap): Promise<Entry[] | EntryWithTags[]> {
    const metaEntries = await getCollectionMetaEntries<TEntry>(collectionName);

    metaEntries.forEach((td, i) => {
        td.entry.id = td.meta.id;
        td.entry.slug = td.meta.slug;
        td.entry.collection = td.meta.collection;
        td.entry.url = "/" + PathUtils.joinPath(td.meta.collection!, createSlug(td.entry.title, td.meta.slug!));
    });

    const entries = metaEntries.map((td) => td.entry) as Entry[];
    entries.sort((a, b) => a.sort - b.sort);

    return entries;
}

export async function getLatestCollectionEntries(entryCount: number = 5): Promise<Entry[] | EntryWithTags[]> {
    let entries = new Array<Entry | EntryWithTags>();
    const blogEntries = (await getCollectionEntries<BlogPost>("blog"));
    const projectEntries = (await getCollectionEntries<Project>("projects"));
    const hobbyEntries = (await getCollectionEntries<Hobby>("hobbies"));
    const storeEntries = (await getCollectionEntries<StoreItem>("store"));

    entries.push(...blogEntries);
    entries.push(...projectEntries);
    entries.push(...hobbyEntries);
    entries.push(...storeEntries);

    entries.sort((a, b) => b.updatedDate.valueOf() - a.updatedDate.valueOf());
    const latestEntries = entries.slice(0, entryCount);

    return latestEntries;
}

export async function getCollectionSlugEntries<TEntry extends (Entry | EntryWithTags)>(collectionName: keyof ContentEntryMap)
    : Promise<({
        params: { slug: string },
        props: { entryWrapper: TEntry, render(): Render[".md"] }
    })[]> {
    const entries = await getCollectionMetaEntries<TEntry>(collectionName);
    entries.forEach((td, i) => {
        td.entry.id = td.meta.id;
        td.entry.slug = td.meta.slug;
        td.entry.collection = td.meta.collection;
        td.entry.url = "/" + PathUtils.joinPath(td.meta.collection!, createSlug(td.entry.title, td.meta.slug!));
    });

    return entries.map(e => ({
        params: { slug: createSlug(e.entry.title, e.entry.slug!) },
        props: { entryWrapper: e.entry as TEntry, render: e.render }
    }));
}