import * as React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from '../routes';
import type { IRoute } from '../interfaces/IRoute';
import { useCookies } from 'react-cookie';

const WebRouter = () => {

    const routesList: React.JSX.Element[] = [];
    const protectedRoutesList: React.JSX.Element[] = [];
    const [cookies] = useCookies([import.meta.env.VITE_APP_COOKIE_TOKEN_KEY!]);

    for (const routeName in routes) {
        const route: IRoute = routes[routeName];
        if (route.protected) {
            protectedRoutesList.push(<Route path={route.path} element={<route.Component />} key={routeName} />);
        } else {
            routesList.push(<Route path={route.path} element={<route.Component />} key={routeName} />);
        }
    }

    function PrivateRoutes() {
        if (!cookies[import.meta.env.VITE_APP_COOKIE_TOKEN_KEY!]) {
            window.location.href = routes.login.getPath();
        } else {
            return <Outlet />;
        }
    }

    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                {protectedRoutesList}
            </Route>
            {routesList}
        </Routes>
    );
}

export default WebRouter;
