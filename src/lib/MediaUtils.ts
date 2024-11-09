import * as EntryUtils from "@lib/EntryUtils"
import * as PathUtils from "@lib/PathUtils";
import { loadAllMedia } from "@components/MediaLoader.astro"
import { MediaSources } from "@components/MediaLoader.astro"

export { MediaSources };

export function getMediaSource(
    entry: EntryUtils.Entry | EntryUtils.EntryWithTags,
): MediaSources {
    switch (entry.collection) {
        case "blog":
            return MediaSources.Blog;
        case "hobbies":
            return MediaSources.Hobbies;
        case "projects":
            return MediaSources.Projects;
        case "store":
            return MediaSources.Store;
        default:
            throw new Error("Unknown collection");
    }
}

function filterMedia(
    mediaSource: MediaSources,
    folder: string,
    media: ImageMetadata[],
): ImageMetadata[] {
    const containingFolder = PathUtils.joinPath(mediaSource, folder);

    let filtered = media.filter((v) => {
        let mediaPath = PathUtils.getPathFromId(v.src);
        return mediaPath.endsWith(containingFolder);
    });

    return filtered;
}

export async function loadSingleMedia(
    source: MediaSources,
    folder: string,
    fileName: string,
): Promise<ImageMetadata | undefined> {
    let allMedia = await loadAllMedia(source);

    const containingFolder = PathUtils.joinPath(source, folder);
    const filePath = PathUtils.joinPath(containingFolder, fileName);

    const val = allMedia.find((m) =>
        PathUtils.getPathWithoutParams(m.src).endsWith(filePath),
    );

    return val;
}

export async function loadMedia(
    source: MediaSources,
    folder?: string,
): Promise<ImageMetadata[]> {
    let media = await loadAllMedia(source);

    if (folder) {
        media = filterMedia(source, folder, media);
    }

    return media;
}