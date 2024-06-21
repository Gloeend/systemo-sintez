import { createApi } from '@reduxjs/toolkit/query/react'
import client from "@app/@http-base-fetch/client.ts";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: client,
    endpoints: () => ({}),
});
