import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import apoinbg from '../../assets/images/appointment.png'

const Apoinment = () => {
    return (
        <div style={{
            background:`url(${apoinbg})`
        }}  class="hero px-16">
            <div class="hero-content flex-col lg:flex-row-reverse py-0">
                <div className='p-10 lg:p-0'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                </div>
                <img style={{marginTop:"-100px"}} className="hidden lg:block" src={doctor} alt=""/>
            </div>
        </div>
    );
};

export default Apoinment;