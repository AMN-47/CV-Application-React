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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        setEducationList([...educationList, formData]);

        setFormData({
            school: "",
            study: "",
            date: ""
        });
    }

    function handleFinish() {
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    return (
    <div>
      <h2>Education</h2>

      {isEditing ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="school"
              placeholder="School Name"
              value={formData.school}
              onChange={handleChange}
            />

            <input
              name="study"
              placeholder="Title of Study"
              value={formData.study}
              onChange={handleChange}
            />

            <input
              name="date"
              placeholder="Date of Study"
              value={formData.date}
              onChange={handleChange}
            />

            <button type="submit">Add</button>
          </form>

          <button onClick={handleFinish}>Finish</button>

          <h3>Preview</h3>
          {educationList.map((edu, index) => (
            <div key={index}>
              <p>{edu.school}</p>
              <p>{edu.study}</p>
              <p>{edu.date}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {educationList.map((edu, index) => (
            <div key={index}>
              <p><strong>School:</strong> {edu.school}</p>
              <p><strong>Study:</strong> {edu.study}</p>
              <p><strong>Date:</strong> {edu.date}</p>
            </div>
          ))}

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;