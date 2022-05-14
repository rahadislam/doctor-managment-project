import React from 'react';

const CountDetails = ({img,bg}) => {
    return (
        <div class="hero py-10">
        <div class={`hero-content rounded-lg  py-8 flex-col lg:flex-row ${bg}`}>
            <img height={86} src={img} class="max-w-sm" />
            <div>
                <h1 class="text-2xl font-bold text-white">Box Office News!</h1>
                <p class="py-6 text-white">Provident cupiditate voluptatem et in.</p>
            </div>
        </div>
    </div>
    );
};

export default CountDetails;