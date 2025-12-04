import { useForm } from 'react-hook-form';
import type { ILogin } from '../../interfaces';
import { login } from '../../service';
import { useCookies } from 'react-cookie';
import { routes } from '../../routes';

export interface ILoginProps {
}

export function Login(props: ILoginProps) {

    const { register, handleSubmit } = useForm<ILogin>()
    const [cookies, setCookies] = useCookies();
    const onSubmit = (data: ILogin) => {
        login(data).then((response) => {
            setCookies(import.meta.env.VITE_APP_COOKIE_TOKEN_KEY!, response.data.token, { path: '/' });
            window.location.href = routes.home.getPath();
        }).catch((error) => {
            console.error("Login error:", error);
        });
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('username')} />
                <input type="password" {...register('password')} />
                <button type="submit">Connexion</button>
            </form>
        </>
    );
}
