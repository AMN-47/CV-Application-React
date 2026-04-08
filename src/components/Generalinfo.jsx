import { useState } from "react";

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [data, setData] = useState ({
        name: "",
        email: "",
        phone: ""
    });
}