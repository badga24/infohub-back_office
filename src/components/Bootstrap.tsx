import * as React from 'react';
import { useCookies } from 'react-cookie';
import { bootstrapAxios } from '../config';

export function Bootstrap() {

    const [cookies] = useCookies();

    bootstrapAxios(() => {
        return cookies.token || null;
    })

    return (
        <></>
    );
}
