import type { IRoute } from "./interfaces";
import { EventView } from "./pages/Event/view/EventView";
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
    },
    event: {
        path: "/event",
        getPath: () => "/event",
        Component: EventView,
        protected: true
    }
};