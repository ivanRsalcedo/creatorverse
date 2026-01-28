import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";

export default function AddCreator({ fetchCreators }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await supabase
            .from("creators")
            .insert([form]);

        await fetchCreators();

        navigate("/");
    };

    return (
        <div className="formPage">
            <form className="formCard" onSubmit={handleSubmit}>
                <h2>Add Creator</h2>

                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="url" placeholder="URL" onChange={handleChange} required />
                <input name="description" placeholder="Description" onChange={handleChange} required />
                <input name="imageURL" placeholder="Image URL (optional)" onChange={handleChange} />

                <div className="actions">
                    <button className="btn">Add</button>
                    <Link to="/" className="btn">Cancel</Link>
                </div>
            </form>
        </div>
    );
}