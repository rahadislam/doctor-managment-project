import React from 'react';
import bgcontact from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background:`url(${bgcontact})`,

        }}>
            <div className='w-2/5 py-10 px-10 text-left lg:mx-auto text-primary lg:text-center text-xl'>
                <h3>Contact us</h3>
                <h3 className='text-white text-3xl'>Stay Connected With Us</h3>
                <input className='mt-5 pl-5 pr-32 py-3 rounded-lg ' type="text" placeholder='Email address'/><br />
                <input className='mt-5 pl-5 pr-32 py-3 rounded-lg ' type="text" placeholder='Subject'/><br />
                <textarea className='my-5 pl-4 pr-16 pt-3 rounded-lg ' name="" id="" cols="30" rows="5" placeholder='Your Message'></textarea><br />
                <button class="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Submit</button>
            </div>
        </div>
    );
};

export default Contact;