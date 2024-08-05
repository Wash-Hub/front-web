import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './styles/globalStyle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { KakaoRedirection } from './components/login/kakao/kakaoRedirection';
import { Main } from './routes/main';
function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/api/auth/kakao/callback" element={<KakaoRedirection />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
