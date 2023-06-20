import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Episode = () => {
    const [, seasonNo, episodeNo] = window.location.href.match(/\d+/g);
    const [ep, setEpisodes] = useState()

    useEffect(() => {
        fetch('https://api.sampleapis.com/simpsons/episodes').then(res => res.json()).then(ep => setEpisodes(ep.find(e => {
            console.log(episodeNo)
            if (JSON.stringify(e.episode) === episodeNo && JSON.stringify(e.season) === seasonNo) return e
        })))
    }, [window.location.href])


    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-16by9">
                    <img src={ep?.thumbnailUrl} alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={ep?.thumbnailUrl}
                                 alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <Link to={`/episode/${ep?.id}`}><p className="title is-4">{ep?.name}</p></Link>
                        <p className="subtitle is-6">{ep?.rating}</p>
                    </div>
                </div>

                <div className="content">
                    {ep?.description}
                </div>
            </div>
        </div>
    )
}
