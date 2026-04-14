function CVPreview({ general, education, experience }) {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>{general.name}</h1>
        <p>{general.email} | {general.phone}</p>
      </header>

      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="cv-item">
            <p><strong>{edu.school}</strong></p>
            <p>{edu.study}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="cv-item">
            <p><strong>{exp.company}</strong></p>
            <p>{exp.position}</p>
            <p>{exp.responsibilities}</p>
            <p>{exp.from} - {exp.to}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CVPreview;