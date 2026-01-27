import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function ShowCreators({ creators }) {
    if (!creators || creators.length === 0) return <p>No creators found.</p>;

    return (
        <div>
            <Link to="/new" className="btn">Add Creator</Link>
            <div className="layout">
                {creators.map((creator) => (
                    <Card key={creator.id} creator={creator} />
                ))}
            </div>
        </div>
    );
}