import {useEffect, useState} from "react";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch('https://api.sampleapis.com/simpsons/episodes').then(res => res.json()).then(ep => setEpisodes(ep))
    }, [])


    return (
        <div>
            <div className="columns is-multiline">
                {episodes.map(ep => (<div className="column is-one-quarter">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src={ep.thumbnailUrl} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={ep.thumbnailUrl}
                                             alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{ep.name}</p>
                                    <p className="subtitle is-6">{ep.rating}</p>
                                </div>
                            </div>

                            <div className="content">
                                {ep.description}
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}
