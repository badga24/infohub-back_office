export interface IRoute {
    path: string;
    getPath: () => string;
    Component: React.ComponentType;
    protected: boolean;
}