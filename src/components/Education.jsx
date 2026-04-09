import { useState } from "react";

function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [data, setData] = useState({
        school: "",
        study: "",
        date: ""
    });
    
    function handleChanges(e) {
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
            <h2>Education</h2>
        </div>
    )
}