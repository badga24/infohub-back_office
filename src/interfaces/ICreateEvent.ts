import type { ICreateCategory } from "./ICreateCategory";
import type { ICreateLocation } from "./ICreateLocation";
import type { ICreateTopic } from "./ICreateTopic";

export interface ICreateEvent {
    name: string;
    location: ICreateLocation;
    topics: ICreateTopic[];
    categories: ICreateCategory[];
}