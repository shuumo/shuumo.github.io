import shuumopfp from '/shuumopfp.jpg'
import './App.css'

import { Spacer } from "./components/spacer"
import ProjectCard from "./components/ProjectCard.tsx"


function App() {
    let pswdmgerDescription = "hello world";

    return (
      <>
        <div class="initial">
        <div>
          <a href="https://github.com/shuumo" target="_blank">
            <img src={shuumopfp} className="logo" alt="Shuumo logo" />
          </a>
        </div>
        <h1>⚡ Shuumos Showcase Site 🔥</h1>
        <p> This site contains some of the projects I've been working on.</p> 
        <p className="read-the-docs">
          Arnav "Shuumo" Singh
          <br/>
          Software Engineer in the making from Sydney, Australia.
        </p>
        </div> 
        <ProjectCard class="card" title="Test Card" description={pswdmgerDescription} img="path"/>
      </>
    )
}

export default App
