import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Example from "./Example";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Example />
    </QueryClientProvider>
  );
};

export default App;
