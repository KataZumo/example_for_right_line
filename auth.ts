import { baseAPI } from './base';
import { Cookie } from '../utils/cookie';
import { IRegistrationBody } from '../types/auth';

const baseURL = "/auth"

export interface ILoginResponse {
    access_token: string
}

export const authAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, {
            email: string
            password: string
        }>({
            query: (body) => ({
                body,
                url: `${baseURL}`,
                method: "POST",
            }),
            transformResponse(body: ILoginResponse) {
                new Cookie("access_token").setValue(body.access_token)

                return body
            }
        }),
        // passwordRecoveryEmail: builder.mutation<void, {
        //     email: string
        //     link: string
        // }>({
        //     query: (body) => ({
        //         body,
        //         url: `${baseURL}/password-recovery-email`,
        //         method: "POST"
        //     })
        // }),
        // passwordRecovery: builder.mutation<void, {
        //     token: string
        //     password: string
        // }>({
        //     query: (body) => ({
        //         body,
        //         url: `${baseURL}/password-recovery`,
        //         method: "POST"
        //     })
        // }),
        // registration: builder.mutation<void, Partial<IRegistrationBody>>({
        //     query: (body) => ({
        //         body,
        //         url: `${baseURL}/registration`,
        //         method: "POST"
        //     })
        // })
    })
})

