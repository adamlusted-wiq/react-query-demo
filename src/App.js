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
                    <div className="buttons">
                        <button className="button is-info"
                                onClick={() => queryClient.invalidateQueries({queryKey: ['simpsons']})}>Invalidate All
                        </button>
                        <button className="button is-info"
                                onClick={() => queryClient.invalidateQueries({queryKey: ['simpsons', 'episodeDetail']})}>Invalidate
                            All Episodes
                        </button>
                        <button className="button is-info"
                                onClick={() => queryClient.invalidateQueries({queryKey: ['simpsons', 'episodeDetail', {seasonNo: '2'}]})}>Invalidate
                            Season
                            2
                        </button>
                        <button className="button is-info"
                                onClick={() => queryClient.invalidateQueries({
                                    queryKey: ['simpsons', 'episodeDetail', {
                                        seasonNo: '1',
                                        episodeNo: '3'
                                    }]
                                })}>Invalidate S1E3
                        </button>
                    </div>
                    <Routes>
                        <Route path="/" element={<EpisodeList/>}/>
                        <Route path="/season/*" element={<Episode/>}/>
                    </Routes>
                    <ReactQueryDevtools initialIsOpen={true}/>
                </div>
            </section>
        </QueryClientProvider>
    );
}

export default App;
