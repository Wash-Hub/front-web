import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './styles/globalStyle.css';
import { KakaoMap } from './routes/map';
import { Sidebar } from './components/sideBar/sideBar';
import { container, map, pageSideBar } from './styles/globalStyle.css';
function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className={container}>
          <div className={pageSideBar}>
            <Sidebar />
          </div>
          <div className={map}>
            <KakaoMap />
          </div>
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
