import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
     
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Programming</h3>
          </div>
          <ul className='service__list'>
            <li ><BiCheck className='service__list-icon'/>
            <p>150+ {" "}
                <a href="https://leetcode.com/nadeem10shagulam/" target="_blank">
                  Leetcode
                </a>{" "}
                problem solved
                </p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Custom software development</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>API integration and development</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>E-commerce development and management</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Coding in C++ for more than 6 years</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Excellent understanding and use of OOPS concepts.</p>
            </li>
            </ul>
        </article>
        {/* END OF Programming */}

        <article className='service'>
          <div className="service__head">
            <h3>Front-End</h3>
          </div>
          <ul className='service__list'>
            <li ><BiCheck className='service__list-icon'/>
            <p>Website design and development</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>HTML/CSS coding and styling.</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Dynamic page creation with ReactJS</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Mobile-first and cross-browser compatibility</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Website optimization for speed and performance</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>User interface (UI) and User Experience (UX) design</p>
            </li> 
            </ul>
        </article>
        {/* END Front-End */}


        <article className='service'>
          <div className="service__head">
            <h3>Back-End</h3>
          </div>
          <ul className='service__list'>
            <li ><BiCheck className='service__list-icon'/>
            <p>RESTful API Development.</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Server-side scripting (Node.js, PHP, etc.)</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>User authentication and authorization</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Server-side Rendering with frameworks (Express, Laravel, etc.)</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Cloud Computing and Server Deployment (AWS, Heroku, etc.)</p>
            </li> 
            <li ><BiCheck className='service__list-icon'/>
            <p>Third-Party Integration (Payment gateways, Social Media APIs, etc.)</p>
            </li> 
            
            </ul>
        </article>
        {/* END OF CONTENT*/}
      </div>
    </section>
  )
}

export default services