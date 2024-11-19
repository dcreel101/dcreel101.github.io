import * as PathUtils from "@lib/PathUtils";
import { loadAllMedia, type ImageMetadataX } from "@components/MediaLoader.astro"
import { getMediaSource } from "@components/MediaLoader.astro"
import { MediaSources } from "@components/MediaLoader.astro"

export { MediaSources };
export { getMediaSource };
export interface MediaInfo {
    source: MediaSources;
    media: ({
        folder: string;
        fileName: string | null;
    } | ImageMetadataX);
}

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

export async function loadSingleMedia(mediaInfo: MediaInfo): Promise<ImageMetadata | undefined> {
    let allMedia = await loadAllMedia(mediaInfo.source);

    if (mediaInfo.media.fsPath) {
        console.info(`loadSingleMedia: '${mediaInfo.media.fsPath}'`);
        const val = allMedia.find((m) => {
            console.info(`    ${m.fsPath}`);
            return m.fsPath.endsWith(mediaInfo.media.fsPath);
        }
        );

        return val;
    } else if (mediaInfo.media.folder && mediaInfo.media.fileName) {
        const containingFolder = PathUtils.joinPath(mediaInfo.source, mediaInfo.media.folder);
        const filePath = PathUtils.joinPath(containingFolder, mediaInfo.media.fileName);

        console.info(`loadSingleMedia: '${filePath}'`);
        const val = allMedia.find((m) => {
            const mPath = PathUtils.getPathWithoutParams(m.src);
            console.info(`    ${mPath}`);
            return mPath.endsWith(filePath);
        },
        );

        return val;
    }

    return;
}

export async function loadMedia(
    source: MediaSources,
    folder?: string,
): Promise<ImageMetadata[]> {
    let media = await loadAllMedia(source);
    console.info(`loadMedia: '${source}'`);
    media.forEach(m => console.info(`    ${m.src}`));

    if (folder) {
        media = filterMedia(source, folder, media);
    }

    return media;
}