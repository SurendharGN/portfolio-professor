import { useState } from 'react'

import experienceChart from "../src/assets/experienceChart.png"
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

      </header>

      <main>
        <div>
          <div>
            
            <h1>Uthadayakumar GS</h1>
            <p>St. Joseph's Institute of Technology</p>
          </div>

          <div>
            <p>
              With a background in Electrical & Communication Engineering, complemented by an M.B.A in Marketing and an M.E. in Medical Electronics, I pursued a Ph.D. at the College of Engineering, Anna University. With over 31 years of comprehensive experience, I've engaged in diverse roles within IT, including 12 years focused on design and development, alongside 20 years dedicated to teaching.
              </p>

              <p>Throughout my career, I've contributed significantly to academia, publishing over 30 papers in international journals and presenting at numerous national and international conferences across various engineering colleges.</p>
              
              <p>Additionally, I've played a pivotal role in establishing multiple IEEE technical student branch chapters at our college, spanning areas such as Communication Society, Antenna and Propagation Society, Industrial Electronics Society, Engineering in Medicine and Biology Society, Broadcast Technology Society, Computer Society, Computational Intelligence Society, and Control Systems Society.</p>
            
          </div>


          <div>
            <img src='../src/assets/experienceChart.png' style={{height:"300px"}}/>
            <img src='../src/assets/googleScholar.png' style={{height:"300px"}}/>
          </div>
        </div>

        <navbar>
          <Link to="/education">
            Education
          </Link>
          <Link to="/career">
            Career
          </Link>
          <Link to="/patents">
            Patents
          </Link>
          <Link to="/workshops">
            Workshops
          </Link>
          <Link to="books">
            Books published
          </Link>
          <Link to="projects">
            Projects
          </Link>
          <Link to="papers">
            Papers
          </Link>
          <Link to="conferences">
            Conferences 
          </Link>
          
          <Link to="/experience">
            Experience
          </Link>
          <Link to="/membership">
            Membership
          </Link>
          <Link to="otherAchievements">
            Other achievement
          </Link>
          <Link to="/journals">
            Journals
          </Link>
        </navbar>
      </main>
    </>
  )
}

export default App
