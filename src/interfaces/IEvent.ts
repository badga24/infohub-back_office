import type { IFile } from "./IFile";

export interface IEvent {
    id: number | null;
    name: string | null;
    cover?: IFile | null; 
}