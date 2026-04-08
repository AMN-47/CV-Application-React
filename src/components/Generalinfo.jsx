import { useState } from "react";

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [data, setData] = useState ({
        name: "",
        email: "",
        phone: ""
    });

    function handleChange(e) {
        setData ({
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
}