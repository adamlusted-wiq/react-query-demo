import {useQuery} from "@tanstack/react-query";
import {Article} from "./Article";
import {useState} from "react";

export const News = () => {

    const [id, setId] = useState(0)

    const {data, isLoading, isError} = useQuery(['spaceflightnewsapi', 'articles'],() => fetch('https://api.spaceflightnewsapi.net/v3/articles')
        .then(res => res.json()))

    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <div>Error...</div>

    return (
        <div className="App">
            <header className="App-header">
                <h1>NEWSSSSS</h1>
                <div>
                    {data.map((news) => {
                        return <span onClick={()=> setId(news.id)}>{news.id} |</span>
                    })}
                </div>
                <Article id={id}/>
            </header>
        </div>
    )
}
