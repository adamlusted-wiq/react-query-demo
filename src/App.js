import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {Episode} from "./Episode";
import {EpisodeList} from "./EpisodeList";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Routes, Route, Link} from "react-router-dom";


function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <section className="section">
                <div className="container">
                    <h1 className="title"><Link to={`/`}>
                        Simpsons Explorer
                    </Link></h1>
                    <Routes>
                        <Route path="/" element={<EpisodeList/>}/>
                        <Route path="/season/*" element={<Episode/>}/>
                    </Routes>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </div>
            </section>


        </QueryClientProvider>
    );
}

export default App;
