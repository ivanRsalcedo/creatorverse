export default function Card({ creator }) {
    return (
        <div>
            <h2>{creator.name}</h2>
            <a href={creator.url}>{creator.url}</a>
            <p>{creator.description}</p>
            {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
        </div>
    );
}