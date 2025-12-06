import { client } from "../config";
import type { ICreateEvent } from "../interfaces/ICreateEvent";

export const createEvent = async (dto: ICreateEvent) => client.post<void>("/event", dto);