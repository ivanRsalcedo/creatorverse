import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "../client";

export default function EditCreator({ fetchCreators }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

    useEffect(() => {
        const loadCreator = async () => {
            const { data, error } = await supabase
                .from("creators")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.error(error);
                return;
            }

            setForm({
                name: data.name ?? "",
                url: data.url ?? "",
                description: data.description ?? "",
                imageURL: data.imageURL ?? ""
            });
        };

        loadCreator();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from("creators")
            .update(form)
            .eq("id", id);

        if (error) {
            console.error(error);
            return;
        }

        await fetchCreators();
        navigate(`/creators/${id}`);
    };

    const handleDelete = async () => {
        const { error } = await supabase
            .from("creators")
            .delete()
            .eq("id", id);

        if (error) {
            console.error(error);
            return;
        }

        await fetchCreators();
        navigate("/");
    };

    return (
        <div className="formPage">
            <form className="formCard" onSubmit={handleSubmit}>
                <h2>Edit Creator</h2>

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="url"
                    placeholder="URL"
                    value={form.url}
                    onChange={handleChange}
                    required
                />
                <input
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
                <input
                    name="imageURL"
                    placeholder="Image URL (optional)"
                    value={form.imageURL}
                    onChange={handleChange}
                />

                <div className="actions">
                    <button className="btn" type="submit">Save</button>
                    <Link className="btn" to={`/creators/${id}`}>Cancel</Link>
                    <button className="btn danger" type="button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
}