import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {Episodes} from "./Episodes";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Hello World
                    </h1>
                    <p className="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>
                    <Episodes/>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </div>
            </section>


        </QueryClientProvider>
    );
}

export default App;
