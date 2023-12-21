import { apiSlice } from '../services/apiSlice';

interface User {
	first_name: string;
	last_name: string;
	otp: number;
	phone_number: number;
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
			query: ({ phone_number, otp }) => ({
				url: '/user/jwt/create/',
				method: 'POST',
				body: { phone_number, otp },
			}),
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				phone_number,
			}) => ({
				// SHOULD THERE BE A TRAILING SLASH??????????
				url: '/user/register/',
				method: 'POST',
				body: { first_name, last_name, phone_number},
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
			query: ({ uid, otp }) => ({
				url: '/user/verify/',
				method: 'POST',
				body: { uid, otp },
			}),
		}),
		resetPassword: builder.mutation({
			query: email => ({
				url: '/users/reset_password/',
				method: 'POST',
				body: { email },
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
