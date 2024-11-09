
export function getPathFromId(id: string): string {
    const lastSlash = id.lastIndexOf('/');
    if (lastSlash > 0) {
        return id.substring(0, lastSlash);
    }

    return '';
}

export function joinPath(parent: string, child: string): string {
    if (parent.length > 0 && parent[parent.length - 1] === '/') {
        if (child.length > 0 && child[0] === '/') {
            return parent + child.slice(1);
        }

        return parent + child;
    }

    if (child.length > 0 && child[0] === '/') {
        return parent + child;
    }

    return parent + '/' + child;
}

export function getPathWithoutParams(path: string): string {
    const firstDot = path.indexOf('.');
    if (firstDot >= 0) {
        const firstQuestion = path.indexOf('?', firstDot);
        if (firstQuestion >= firstDot) {
            return path.substring(0, firstQuestion);
        }
    }

    return path;
}

export function getFileNameFromPath(path: string): string {
    const rawPath = getPathWithoutParams(path);
    const lastSlash = rawPath.lastIndexOf('/');

    if (lastSlash < 0) {
        return rawPath;
    }

    if (lastSlash < rawPath.length - 1) {
        return rawPath.substring(lastSlash + 1);
    }

    return '';
}

export function getExtensionFromPath(path: string): string {
    const rawPath = getPathWithoutParams(path);
    const lastDot = rawPath.lastIndexOf('.');

    if (lastDot < 0 || lastDot >= (rawPath.length - 1)) {
        return '';
    }

    return rawPath.substring(lastDot + 1);
}