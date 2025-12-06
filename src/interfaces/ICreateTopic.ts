import type { ICreatePerson } from "./ICreatePerson";

export interface ICreateTopic {
    name: string;
    speakers: ICreatePerson[];
}