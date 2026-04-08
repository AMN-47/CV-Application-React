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

    return (
        <div>
            <h2>General Information</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
                    <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
                    <input name="phone" placeholder="Phone" value={data.phone} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                   <p><strong>Name:</strong>{data.name}</p>
                   <p><strong>Email:</strong>{data.email}</p>
                   <p><strong>Phone:</strong>{data.phone}</p> 

                   <button onClick={handleEdit}>Submit</button>
                </div>
            )}
        </div>
    );
}

export default GeneralInfo;