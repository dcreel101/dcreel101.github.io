import * as PathUtils from "@lib/PathUtils";
import { loadAllMedia } from "@components/MediaLoader.astro"
import { getMediaSource } from "@components/MediaLoader.astro"
import { MediaSources } from "@components/MediaLoader.astro"

export { MediaSources };
export { getMediaSource };

function filterMedia(
    mediaSource: MediaSources,
    folder: string,
    media: ImageMetadata[],
): ImageMetadata[] {
    const containingFolder = PathUtils.joinPath(mediaSource, folder);

    let filtered = media.filter((v) => {
        let mediaPath = PathUtils.getPathFromId(v.src);
        if (mediaPath) {
            return mediaPath.endsWith(containingFolder);
        }

        return folder.length == 0;
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