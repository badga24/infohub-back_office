import { client, external } from "../config"
import type { IFile } from "../interfaces/IFile"

const baseURI = "/file";

export const uploadFile = async (appFile: IFile, file: File) => {
    const uploadUrl = await getUploadUrl(appFile);
    await external.put(uploadUrl.data, file, {
        headers: {
            'Content-Type': file.type,
        }
    });
    await confirmFileUpload(appFile);
}

export const getUploadUrl = async (file: IFile) => client.get<string>(`${baseURI}/${file.id}/upload-url`);

export const getDownloadUrl = async (file: IFile) => client.get<string>(`${baseURI}/${file.id}/download-url`);

export const confirmFileUpload = async (file: IFile) => client.post<void>(`${baseURI}/${file.id}/confirm-upload`);