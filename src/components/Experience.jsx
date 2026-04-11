import { useState } from "react";

function Experience() {
    const [isEditing, setIsEditing] = useState(true);

    const [data, setData] = useState({
        company:"",
        position: "",
        responsibilities:"",
        from:"",
        to: ""
    });

    function handleChange(e) {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <div>
            <h2>Experience</h2>
        </div>
    )
}