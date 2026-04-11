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

            {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            placeholder="Company Name"
            value={data.company}
            onChange={handleChange}
          />

          <input
            name="position"
            placeholder="Position Title"
            value={data.position}
            onChange={handleChange}
          />

          <input
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={data.responsibilities}
            onChange={handleChange}
          />

          <input
            name="from"
            placeholder="From"
            value={data.from}
            onChange={handleChange}
          />

          <input
            name="to"
            placeholder="To"
            value={data.to}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {data.company}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Responsibilities:</strong> {data.responsibilities}</p>
          <p><strong>Duration:</strong> {data.from} - {data.to}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
        </div>
    )
}