import { baseURL } from '../constants/api';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" 
import { Cookie } from '../utils/cookie';

export const baseAPI = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers, { getState }) => {
            const access_token = new Cookie("access_token").getValue()
            // console.log("🚀 ~ file: base.ts:11 ~ access_token:", access_token)
            if (access_token) {
                headers.set("Authorization", `Bearer ${access_token}`);
        }
        console.log("HEADERS", headers);

            return headers;
        },
    }),
    endpoints: (builder) => ({
    })
})
