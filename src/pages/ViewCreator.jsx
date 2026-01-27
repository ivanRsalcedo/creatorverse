import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from("creators")
                .select("*")
                .eq("id", id)
                .single();

            if (!error) setCreator(data);
            setLoading(false);
        };

        fetchCreator();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!creator) return <p>Creator not found.</p>;

    return (
        <div className="profilePage">
            <div className="profileCard">
                {creator.imageURL ? (
                    <img className="profileImg" src={creator.imageURL} alt={creator.name} />
                ) : null}

                <h1 className="profileName">{creator.name}</h1>

                <a
                    className="channelLink"
                    href={creator.url}
                    target="_blank"
                >
                    ▶ YouTube
                </a>

                <p className="profileDesc">{creator.description}</p>

                <div className="profileActions">
                    <Link className="btn" to="/">
                        Back
                    </Link>
                    <Link className="btn" to={`/creators/${creator.id}/edit`}>
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    );
}