import { client } from "../config";
import type { ILogin } from "../interfaces";
import type { IAuthenticated } from "../interfaces/IAuthenticate";

export const login = async (dto: ILogin) => client.post<IAuthenticated>("/user/authenticate", dto);