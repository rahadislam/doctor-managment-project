import React from 'react';
import Services from './Services';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div>
            <h1 className="text-center text-3xl "><span className='text-primary uppercase'>Our Services</span> <br /> Services We Porvides</h1>
            <div className='grid grid-cols-1 mx-10 lg:grid-cols-3 gap-5'>
            <Services img={fluoride}></Services>
            <Services img={cavity}></Services>
            <Services img={whitening}></Services>
            </div>
        </div>
    );
};

export default Service;