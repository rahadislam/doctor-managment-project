import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    const makeTestimonial = [
        {
            name: 'Jon tuiter',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            subtitle: 'Winson Herry',
            title: 'California',
            img: people1
        },
        {
            name: 'Jon tuiter',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            subtitle: 'Winson Herry',
            title: 'California',
            img: people2
        },
        {
            name: 'Jon tuiter',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            subtitle: 'Winson Herry',
            title: 'California',
            img: people3
        }
    ]
    return (
        <div className='py-10'>
            <div className='flex justify-between'>
                <div className='p-5'>
                    <h4 className='text-xl text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <img src={quote} height={156} width={156} alt="" />
            </div>
            <div className='grid py-16 grid-cols-1 mx-10 lg:grid-cols-3 gap-5'>
                {
                    makeTestimonial.map(testimonial =>
                        <div className='card w-96 bg-base-100 py-5 shadow-xl'>

                            <div class="card-body text-center">
                                <p>{testimonial.description}</p>

                            </div>
                            <figure>
                                <div class="avatar">
                                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={testimonial.img} alt=''/>
                                    </div>
                                </div>
                                <div className='ml-5'>
                                    <h2 class="text-center text-2xl">{testimonial.subtitle}</h2>
                                    <h3>{testimonial.title}</h3>
                                </div>
                            </figure>
                        </div>)
                }

            </div>

        </div>
    );
};

export default Testimonial;