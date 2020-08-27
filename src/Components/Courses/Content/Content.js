import React from 'react';
import './Content.css'
const Content = (props) => {
    console.log(props);
    return (
        <div className='content-container'>
            <div className='image'>
                <img src={props.courses.image} alt="" />
            </div>
            <div className='course-info'>
                <h4 style = {{color:'Grey'}}>{props.courses.name}</h4>
                <p>Course ID: {props.courses.id}</p>
                <h3>Price:${props.courses.price}</h3>
                <h5>Course-Instructor:{props.courses.Instructor}</h5>
                <button className='btn btn-secondary' onClick = {()=>props.btn(props.courses)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Content;