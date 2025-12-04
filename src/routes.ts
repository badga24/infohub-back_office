import type { IRoute } from "./interfaces";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";

export const routes: Record<string, IRoute> = {
    home: {
        path: "/",
        getPath: () => "/",
        Component: Home,
        protected: true
    },
    login: {
        path: "/login",
        getPath: () => "/login",
        Component: Login,
        protected: false
    }
};