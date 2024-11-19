import { getEntry, getCollection, type Render } from "astro:content";
import * as PathUtils from "@lib/PathUtils.ts"
import { type MetaInfo, type WorkProject } from "@lib/WorkProject.ts"
import createSlug from "@lib/createSlug.ts";

export { type WorkProject };

export async function getWorkSlugEntries()
    : Promise<({
        params: { slug: string },
        props: { workProject: WorkProject, render(): Render[".md"] }
    })[]> {
    const workProjects = (await getCollection("work")).map((td) => ({
        meta: ({ id: td.id, slug: td.slug, collection: "work" }) as MetaInfo,
        wp: td.data as WorkProject,
        render: td.render
    }));

    workProjects.forEach((td, i) => {
        td.wp.id = td.meta.id;
        td.wp.slug = td.meta.slug;
        td.wp.url = "/" + PathUtils.joinPath("work", createSlug(td.wp.title, td.meta.slug!));
    });

    return workProjects.map(e => ({
        params: { slug: createSlug(e.wp.title, e.wp.slug!) },
        props: { workProject: e.wp as WorkProject, render: () => e.render() }
    }));
}

export async function getWorkProject(id: string): Promise<WorkProject | undefined> {
    const raw = await getEntry("work", id);
    if (raw) {
        let wp: WorkProject = raw.data;
        wp.id = raw.id;
        wp.slug = raw.slug;
        wp.url = "/" + PathUtils.joinPath("work", createSlug(raw.data.title, raw.slug!));

        return wp;
    }

    return;
}