import React from 'react';
import char from '../../assets/images/chair.png'
import Count from './Count';

const Home = () => {
    return (
        <>
        <div class="hero min-h-screen px-16">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img height={355} width={594} src={char} />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
        <Count></Count>
        </>
    );
};

export default Home;