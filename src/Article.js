import {useQuery} from "@tanstack/react-query";

/**
 * /id/[0-9]
 */
export const Article = (props) => {
    const ID = props.id
    const {
        data,
        isLoading,
        isError
    } = useQuery(['spaceflightnewsapi', 'articleID', ID], () => fetch(`https://api.spaceflightnewsapi.net/v3/articles/${ID}`)
        .then(res => res.json()),{enabled: ID !== 0})

    if (isLoading) return <h1>Loading...</h1>

    if (isError) return <div>Error...</div>


    return (
        <div className="App">
            <h2>{data.title}</h2>
            <p>{data.summary}</p>
        </div>
    )
}
