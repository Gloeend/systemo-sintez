import {api} from "@app/store/api/api.ts";
import {ILoginDTO} from "@app/store/api/auth.types.ts";
import {IUser} from "@app/types";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IUser, ILoginDTO>({
      query: (data) => ({
        url: "/client-login",
        body: data,
        method: "POST"
      })
    })
  }),
});

export const {
  useLoginMutation,
} = userApi;

export default userApi;
