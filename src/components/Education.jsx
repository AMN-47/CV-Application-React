import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    school: "",
    study: "",
    date: ""
  });

  const [educationList, setEducationList] = useState([]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedList = educationList.map((item, index) => {
        if (index === editIndex) {
          return formData;
        }
        return item;
      });

      setEducationList(updatedList);
      setEditIndex(null);
    } else {
      setEducationList([...educationList, formData]);
    }

    setFormData({
      school: "",
      study: "",
      date: ""
    });
  }

  function handleDelete(indexToRemove) {
    const updatedList = educationList.filter((item, index) => {
      return index !== indexToRemove;
    });

    setEducationList(updatedList);
  }

  function handleEditItem(index) {
    setFormData(educationList[index]);
    setEditIndex(index);
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
            <input name="school" placeholder="School Name" value={formData.school} onChange={handleChange} />
            <input name="study" placeholder="Title of Study" value={formData.study} onChange={handleChange} />
            <input name="date" placeholder="Date of Study" value={formData.date} onChange={handleChange} />

            <button type="submit">
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </form>

          <button onClick={handleFinish}>Finish</button>

          <h3>Preview</h3>
          {educationList.map((edu, index) => (
            <div key={index}>
              <p>{edu.school}</p>
              <p>{edu.study}</p>
              <p>{edu.date}</p>

              <button onClick={() => handleEditItem(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>

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