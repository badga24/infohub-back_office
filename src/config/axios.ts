import axios from "axios";


const client = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
})

client.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 401) {
            // window.location.href = routes.login.getPath();
            // return;
        }
        return Promise.reject(error);
    }
)

const bootstrapAxios = (getToken: () => string | null) => {
    client.interceptors.request.use(
        config => {
            const token = getToken();
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        }
    );
}

const external = axios.create({});


export { client, bootstrapAxios, external };