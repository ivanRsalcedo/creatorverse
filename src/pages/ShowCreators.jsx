import Card from "../components/Card";

export default function ShowCreators({ creators }) {
    if (!creators || creators.length === 0) return <p>No creators found.</p>;

    return (
        <div className="layout">
            {creators.map((creator) => (
                <Card key={creator.id} creator={creator} />
            ))}
        </div>
    );
}