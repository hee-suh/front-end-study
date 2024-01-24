import '@testing-library/jest-dom';
import * as nock from 'nock'; // process.env.DEBUG = 'nock*';
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from '../pages/LoginPage';
import useLogin from '../hooks/useLogin';

const queryClient = new QueryClient({
	// https://tanstack.com/query/v4/docs/react/guides/testing
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
	// https://tanstack.com/query/v4/docs/react/guides/testing#turn-off-network-error-logging
	// logger: {
	// 	log: console.log,
	// 	warn: console.warn,
	// 	// ✅ no more errors on the console for tests
	// 	error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
	// },
});

const wrapper = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

describe('로그인 테스트', () => {
	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {});
	});
	afterAll(() => {
		jest.restoreAllMocks();
	});

	test('로그인에 실패하면 에러메시지가 나타난다', async () => {
		// given - 로그인 화면이 그려진다
		const routes = [
			{
				path: '/login',
				element: <LoginPage />,
			},
		];

		const router = createMemoryRouter(routes, {
			initialEntries: ['/login'],
			initialIndex: 0,
		});

		render(
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		);

		// when - 사용자가 로그인에 실패한다
		nock('https://server.byeongjinkang.com')
			.post('/user/login/', {
				email: 'wrong@email.com',
				password: 'wrongPassword',
			})
			.reply(400, { msg: 'NO_SUCH_USER' });

		const emailInput = screen.getByLabelText('이메일');
		const passwordInput = screen.getByLabelText('비밀번호');

		fireEvent.change(emailInput, { target: { value: 'wrong@email.com' } });
		fireEvent.change(passwordInput, { target: { value: 'wrongPassword' } });

		const loginButton = screen.getByRole('button', { name: '로그인' });
		fireEvent.click(loginButton);

		const { result } = renderHook(() => useLogin(), { wrapper });

		// then - 에러메시지가 나타난다
		await waitFor(() => result.current.isError);

		const errorMessage = await screen.findByTestId('error-message');
		expect(errorMessage).toBeInTheDocument();
	});
});
