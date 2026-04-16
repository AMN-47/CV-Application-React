import { useState } from "react";
import GeneralInfo from "./components/Generalinfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
import "./styles/cv.css"


function App() {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  
  return (
    <div className="app-container">
      <div className="form-selection">
        <GeneralInfo setGeneral={setGeneral} />
        <Education setEducation={setEducation}/>
        <Experience setExperience={setExperience}/>
      </div>

      <CVPreview
        general={general}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App
