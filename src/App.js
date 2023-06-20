import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {News} from "./News";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <News/>
                <ReactQueryDevtools initialIsOpen={false} />
            </div>

        </QueryClientProvider>
    );
}

export default App;
