import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div>hi</div>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
