import type { ICreateCategory } from "./ICreateCategory";
import type { ICreateLocation } from "./ICreateLocation";
import type { ICreateTopic } from "./ICreateTopic";
import type { IFile } from "./IFile";

export interface ICreateEvent {
    name: string;
    location: ICreateLocation;
    topics: ICreateTopic[];
    categories: ICreateCategory[];
    cover?: IFile;
}