import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Tretment = () => {
    return (
        <div class="hero min-h-screen px-16 pb-20 my-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='pl-20'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                </div>
                <img height={576} width={458} src={treatment} alt=""/>
            </div>
        </div>
    );
};

export default Tretment;