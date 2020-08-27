import React from 'react';
import fakeDate from '../../fakeData/Fake'
import './Course.css'
import { useState } from 'react';
import Content from './Content/Content';
import Cart from '../Cart/Cart';

const Course = () => {
    const [course, setCourse] = useState(fakeDate);

    //Cart state
    const [cart,setCart] = useState([]);

    //Event Handler 
    const clickButton = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
         
    return (
        <div className="main-container">
            <div className='course-section'>
                {
                    course.map(courses => <Content courses={courses} btn = {clickButton}></Content>)
                }
            </div>
            <div className = 'cart-section'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Course;