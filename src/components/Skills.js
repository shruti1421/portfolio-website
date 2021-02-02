import React from 'react';
import '../styles/skills.css';
import {Footer} from './Footer';

const Skills = () => {
        return (
            <>
            <div style={style1} className="skills-body">
                <div style={style2}>
                    <h1>Tech-stack</h1>
                     <div className="list-tech">
                          <div className="num">
                              <h3>JavaScript , JSX , CSS , HTML</h3>
                          </div>
                          <div className="num">
                              <h3> Nodejs, Mern Stack</h3>
                          </div>
                          <div className="num">
                              <h3> REACTJS , Express</h3>
                          </div>
                          <div className="num">
                              <h3> C++ </h3>
                          </div>
                          <div className="num">
                              <h3> VSCode , Sublime Text , Ubuntu , Windows10 </h3>
                           </div>
                     </div>
                </div>
                <div style={style3}>
                <h1>Experience</h1>
                <div className="list-exp">
                          <div className="num">
                              <h3>SCHAFFEN SOFTWARES (INTERNSHIP NOV 2020 - JAN 2021)</h3>
                          </div>
                          <div className="num">
                              <h3>CODECHEF IIIT BBSR CHAPTER</h3>
                          </div>
                          <div className="num">
                              <h3></h3>
                          </div>
                          <div className="num">
                              <h3></h3>
                          </div>
                          <div className="num">
                              <h3></h3>
                           </div>
                     </div>
                </div>
               
            </div>
            <div style={style1} className="skills-body education">
            <div style={style2}>
                    <h1>Education</h1>
                     <div className="list-edu">
                          <div className="num">
                              <h3>Kendriya Vidyalaya No.4 Bhubaneswar</h3>
                          </div>
                          <div className="num">
                              <h3>International Institute of Information Technology, Bhubaneswar</h3>
                          </div>
                          <div className="num">
                              <h3></h3>
                          </div>
                          <div className="num">
                              <h3> C++ </h3>
                          </div>
                          <div className="num">
                              <h3></h3>
                           </div>
                     </div>
                </div>
            </div>
        <Footer />

            </>
        )
}

const style1 = {
    display: 'flex',
    width:'100%',
    marginTop:'2%',
    fontSize:'20px',
    ColumnCount: '2',
    marginBottom: '0'
}

const style2 = {
    display: 'block',
    backgroundColor: '#fff',
    width: '100%',
    color: '#019282'
}

const style3 = {
    display: 'block',
    backgroundColor: '#019282',
    color: 'white',
    width:'100%',
}

export default Skills;
