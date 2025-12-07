import { client } from "../config";
import type { ICreateEvent } from "../interfaces/ICreateEvent";
import type { IEvent } from "../interfaces/IEvent";

export const createEvent = async (dto: ICreateEvent) => client.post<IEvent>("/event", dto);