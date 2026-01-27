import { Link } from "react-router-dom";

export default function Card({ creator }) {
    return (
        <div className="card">
            {creator.imageURL ? (
                <img className="cardBg" src={creator.imageURL} alt="creator photo" />
            ) : null}

            <div className="cardTop">
                <h2 className="cardTitle">{creator.name}</h2>

                <div className="cardIcons">
                    <Link className="iconBtn" to={`/creators/${creator.id}`}>
                        i
                    </Link>
                    <Link className="iconBtn" to={`/creators/${creator.id}/edit`}>
                        ✎
                    </Link>
                </div>
            </div>

            <div className="cardBody">
                <p className="cardDesc">{creator.description}</p>

                <a
                    className="channelLink"
                    href={creator.url}
                    target="_blank"
                >
                    ▶ YouTube
                </a>
            </div>
        </div>
    );
}