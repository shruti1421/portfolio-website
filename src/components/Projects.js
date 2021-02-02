import React, { Component } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import '../styles/projects.css';
import {Footer} from './Footer';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <Fade>
                    <>
                <h2 style={{color:'#ef3a55', fontFamily:"Luckiest Guy",fontSize:'40px'}}>PROJECTS</h2>
                </>
                </Fade>
                <ul class="tilesWrap">
	<li>
		<h2>01</h2>
		<h3>Github Users Finder</h3>
        <br/>
		<p>
        A React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management 
        .<br/><br/><a href='https://github-users-finder-1421.netlify.app/'>Click here to see the site live.</a>
		</p>
        <form href="https://github.com/shruti1421/github-finder/">
		<button type="Submit">Read more</button>
	    </form>
    </li>
	<li>
		<h2>02</h2>
		<h3>Online Compiler</h3>
        <br/>
		<p>
		An online compiler for Running Python, Java, C and C++. I have designed the UI for the compiler. It's site is not published yet, but you can checkout the Github repository in read more.
		<br/>
        <br/>
        </p>
		<form href="https://github.com/shruti1421/online-compiler/">
		<button type="Submit">Read more</button>
	    </form>
	</li>
	<li>
		<h2>03</h2>
		<h3>Vanilla Web Projects</h3>
        <br/>
		<p>
		Mini projects built with HTML5, CSS & JavaScript:
		<br/>
		<a>1.Registration Form</a>
		<br/>
		<a>2.Movie Seat Booking</a>
		<br/>
		<a>3.Expense Tracker</a>
		<br/>
		
            <br/>
            <br/>
		</p>
		<form href="https://github.com/shruti1421/">
		<button type="Submit">Read more</button>
	    </form>
	</li>
	
</ul>
        <Footer />
            
            </div>
        )
    }
}
