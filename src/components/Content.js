import React from 'react';
import profile from '../styles/IMG_20201223_104457.jpg';
import { Slide } from "react-awesome-reveal";
import '../styles/content.css';
import { Footer } from './Footer';

const Content = ({removeNav}) => {


    return (
        <>
        <Slide triggerOnce>
            <div className="content-body">
            <div className="content-intro">
                <img src={profile} className="profile_pic"/>

                <span>A <a>Web</a> Developer </span>
                <span>CSE Sophomore at <a>IIIT</a> Bhubaneswar</span>
                <span>Getting my grip on <a>Competive Programming</a> and <a>Open Source</a></span>
                <br/><br/>
           
            </div>
            <div className="content-about">
                <h3>A Little Bit <a>About Myself</a> </h3>
                <br/>
                
                <p>Hi! myself Smriti Naik. I am pursuing my undergraduation in Computer Science and Engineering from IIIT Bhubaneswar.</p>
                <p>I love to learn and explore new things everyday and always try to give my best in everything. I've started my programming journey since last year from a simple "Hello World!" program in C and in a year I've learnt so many things and developed myself a lot in programming. And I'm so much excited to explore more in programming in future. </p>
                <p>Now I'm good in frontend development in REACTJS, JavaScript, CSS, HTML. I have made so many small projects using Vanilla JavaScript( you can check in my <a href="https://github.com/shruti1421">Github profile</a> ).Also made some projects using Reactjs Framework ( you can see all those projects in Project Section ).</p>
                <p>I'm also very much interested in Competive Programming and developing my problem solving and DS&Algo skills from it. Here is my <a href="https://www.codechef.com/users/smritinaik1421">CodeChef account</a>. </p>
            
            </div>
           </div>
           
        </Slide>
        <Footer />
        </>
    )
}

export default Content;
