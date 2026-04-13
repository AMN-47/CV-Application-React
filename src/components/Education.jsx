import { useState } from "react";

function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [formData, setFormData] = useState({
        school: "",
        study: "",
        date: ""
    });

    const [educationList, setEducationList]= useState([]);
    
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
                    <p><strong>School:</strong> {data.school}</p>
                    <p><strong>Study:</strong> {data.study}</p>
                    <p><strong>Date:</strong> {data.date}</p>

                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Education;