import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: ""
  });

  const [experienceList, setExperienceList] = useState([]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedList = experienceList.map((item, index) => {
        if (index === editIndex) {
          return formData;
        }
        return item;
      });

      setExperienceList(updatedList);
      setEditIndex(null);
    } else {
      setExperienceList([...experienceList, formData]);
    }

    setFormData({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: ""
    });
  }

  function handleDelete(indexToRemove) {
    const updatedList = experienceList.filter((item, index) => {
      return index !== indexToRemove;
    });

    setExperienceList(updatedList);
  }

  function handleEditItem(index) {
    setFormData(experienceList[index]);
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
      <h2>Experience</h2>

      {isEditing ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
            <input name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
            <input name="responsibilities" placeholder="Responsibilities" value={formData.responsibilities} onChange={handleChange} />
            <input name="from" placeholder="From" value={formData.from} onChange={handleChange} />
            <input name="to" placeholder="To" value={formData.to} onChange={handleChange} />

            <button type="submit">
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </form>

          <button onClick={handleFinish}>Finish</button>

          <h3>Preview</h3>
          {experienceList.map((exp, index) => (
            <div key={index}>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
              <p>{exp.responsibilities}</p>
              <p>{exp.from} - {exp.to}</p>

              <button onClick={() => handleEditItem(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>

              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {experienceList.map((exp, index) => (
            <div key={index}>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Position:</strong> {exp.position}</p>
              <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
              <p><strong>Duration:</strong> {exp.from} - {exp.to}</p>
            </div>
          ))}

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;