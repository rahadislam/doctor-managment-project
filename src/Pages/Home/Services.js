import React from 'react';

const Services = ({img}) => {
    return (
        <div class="card w-96 bg-base-100 py-5 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-center text-2xl">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
            </div>
        </div>
    );
};

export default Services;