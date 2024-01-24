import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://server.byeongjinkang.com',
	timeout: 8000,
	// adapter: 'http',
	// - nock이 localhost에서 요청하는 call을 정상적으로 intercept하기 위해 필요
	//   adapter: 'http' 활성화해주고, localhost 꺼야함; localhost가 실행되고 있을 때(npm run start)는 에러 발생
	// - 반면, localhost에서 axios 요청을 정상적으로 보내려면, adapter: 'http'를 비활성화해야 함
});

axiosClient?.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	if (token) {
		config.headers.Authorization = `Token ${token}`;
	}
	return config;
});

export default axiosClient;
