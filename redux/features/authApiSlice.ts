import { apiSlice } from '../services/apiSlice';

interface User {
	first_name: string;
	last_name: string;
	phone_number: string;
}

interface SocialAuthArgs {
	provider: string;
	state: string;
	code: string;
}

interface CreateUserResponse {
	success: boolean;
	user: User;
}

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveUser: builder.query<User, void>({
			query: () => '/user/me/',
		}),
		socialAuthenticate: builder.mutation<
			CreateUserResponse,
			SocialAuthArgs
		>({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(
					state
				)}&code=${encodeURIComponent(code)}`,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}),
		}),
		login: builder.mutation({
			query: ({ phone_number, password }) => ({
				url: '/user/jwt/create/',
				method: 'POST',
				body: { phone_number, password },
			}),
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				phone_number,
				otp_method,
				password,
				re_password,
			}) => ({
				// SHOULD THERE BE A TRAILING SLASH??????????
				url: '/user/register/',
				method: 'POST',
				body: { first_name, last_name, phone_number, otp_method, password, re_password},
			}),
		}),
		verify: builder.mutation({
			query: () => ({
				url: '/user/jwt/verify/',
				method: 'POST',
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/user/logout/',
				method: 'POST',
			}),
		}),
		activation: builder.mutation({
			query: ({ uid, token }) => ({
				url: '/users/activation/',
				method: 'POST',
				body: { uid, token },
			}),
		}),
		verifyUser: builder.mutation({
			query: ({ uid, token , otp}) => ({
				url: '/user/verify/',
				method: 'POST',
				body: { uid, token, otp },
			}),
		}),
		resetPassword: builder.mutation({
			query: phone_number => ({
				url: '/users/reset_password/',
				method: 'POST',
				body: { phone_number },
			}),
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: '/users/reset_password_confirm/',
				method: 'POST',
				body: { uid, token, new_password, re_new_password },
			}),
		}),
		
	}),
});

export const {
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useVerifyUserMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
} = authApiSlice;
