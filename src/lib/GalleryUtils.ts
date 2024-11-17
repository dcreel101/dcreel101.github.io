import * as MediaUtils from "@lib/MediaUtils";
import * as PathUtils from "@lib/PathUtils";
import { type Entry, type EntryWithTags } from "@lib/Entry";

export type GallerySortBy = "random"
    | "fileNameText"
    | "fileNameList"
    | "captionText"
    | "captionList";

export interface GalleryMediaInfo {
    media: ImageMetadata;
    caption: string;
}

export async function loadGalleryMedia(
    entry?: Entry | EntryWithTags,
    customCollection?: string,
    customFolder?: string,
    fileNames?: string[]): Promise<GalleryMediaInfo[] | undefined> {
    const mediaCaptions = new Map<string, string>(entry?.mediaCaptionsByFilename);

    let media: { media: ImageMetadata; caption: string }[] | undefined;
    if (customCollection && customFolder) {
        const ms = MediaUtils.getMediaSource(customCollection);
        if (ms) {
            media = (await MediaUtils.loadMedia(ms, customFolder)).map((m) => ({
                media: m,
                caption:
                    mediaCaptions.get(PathUtils.getFileNameFromPath(m.src)) ??
                    PathUtils.getFileNameFromPath(m.src),
            }));
        }
    } else if (entry?.id && entry?.collection) {
        const ms = MediaUtils.getMediaSource(entry.collection);
        if (ms) {
            const mf = PathUtils.getPathFromId(entry.id);
            if (mf && mf.length > 0) {
                media = (await MediaUtils.loadMedia(ms, mf)).map((m) => ({
                    media: m,
                    caption:
                        mediaCaptions.get(PathUtils.getFileNameFromPath(m.src)) ??
                        PathUtils.getFileNameFromPath(m.src),
                }));
            }
        }
    }

    // filtering
    if (fileNames && media) {
        // TODO: use a Map?
        let fns = fileNames.map((fn) => fn.toLowerCase());
        media = media.filter((m) =>
            fns.includes(PathUtils.getFileNameFromPath(m.media.src).toLowerCase()),
        );
    }

    return media;
}

function sortByFileNameList(media: GalleryMediaInfo[], fileNames: string[]): GalleryMediaInfo[] {
    let temp: { media: ImageMetadata; caption: string }[] = [];
    for (const fn of fileNames) {
        let m = media.findIndex(
            (v, _) =>
                PathUtils.getFileNameFromPath(v.media.src)
                    .toLocaleLowerCase()
                    .localeCompare(fn) == 0,
        );
        if (m >= 0) {
            temp.push(media[m]);
            media.splice(m, 1);
        }
    }

    temp.push(...media);
    return temp;
}

function sortByCaptionList(media: GalleryMediaInfo[], captionsByFilename: [string, string][]): GalleryMediaInfo[] {
    let temp: { media: ImageMetadata; caption: string }[] = [];
    for (const [fileName, _] of captionsByFilename) {
        let m = media.findIndex(
            (v, _) =>
                PathUtils.getFileNameFromPath(v.media.src)
                    .toLocaleLowerCase()
                    .localeCompare(fileName) == 0,
        );
        if (m >= 0) {
            temp.push(media[m]);
            media.splice(m, 1);
        }
    }

    temp.push(...media);
    return temp;
}

export function sortGalleryMedia(
    media: GalleryMediaInfo[],
    sortBy: GallerySortBy,
    entry?: Entry | EntryWithTags,
    fileNames?: string[]): GalleryMediaInfo[] {
    switch (sortBy) {
        case "random":
            media.sort(() => Math.random() - 0.5);
            break;
        case "fileNameList": // sort to match list of names as given
            if (fileNames) {
                media = sortByFileNameList(media, fileNames);
                break;
            }
        // NOTE: fall through if no file list
        case "fileNameText":
            media.sort((a, b) =>
                PathUtils.getFileNameFromPath(a.media.src)
                    .toLocaleLowerCase()
                    .localeCompare(
                        PathUtils.getFileNameFromPath(b.media.src).toLocaleLowerCase(),
                    ),
            );
            break;
        case "captionList": // sort to match list of captions as given
            if (entry?.mediaCaptionsByFilename) {
                media = sortByCaptionList(media, entry.mediaCaptionsByFilename);
                break;
            }
        // NOTE: fall through if no caption list
        case "captionText":
            media.sort((a, b) => a.caption.localeCompare(b.caption));
            break;
    }

    return media;
}