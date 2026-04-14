import { useState } from "react";
import GeneralInfo from "./components/Generalinfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";


function App() {
  return (
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo/>
      <Education/>
      <Experience/>
    </div>
  );
}

export default App
