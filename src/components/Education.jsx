import { useState } from "react";

function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [data, setData] = useState({
        school: "",
        study: "",
        date: ""
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
            <h2>Education</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        name="school"
                        placeholder="School Mame"
                        value={data.school}
                        onChange={handleChange}    
                    />

                    <input
                        name="study" 
                        placeholder="Title of Study"
                        value={data.study}
                        onChange={handleChange}
                    />

                    <input 
                        name="date"
                        placeholder="Date of Study"
                        value={data.date}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
}