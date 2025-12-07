import type { IFile } from "../interfaces/IFile";

export const buildIFile = (file: File): IFile => {
    return {
        name: file.name,
        contentLength: file.size,
        contentType: file.type
    };
}