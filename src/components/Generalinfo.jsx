import { useState } from "react";

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [data, setData] = useState ({
        name: "",
        email: "",
        phone: ""
    });

    function handleSubmit(e) {
        setData ({
            ...data,
            [e.target.name]: e.target.value
        });
    }
}