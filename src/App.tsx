import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './styles/globalStyle.css';
import { KakaoMap } from './routes/map';
function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <KakaoMap />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
