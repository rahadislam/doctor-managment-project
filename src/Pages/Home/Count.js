import React from 'react';
import CountDetails from './CountDetails';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Count = () => {
    return (
       <div className='grid grid-cols-1 lg:grid-cols-3'>
           <CountDetails img={clock} bg={"bg-gradient-to-r from-primary to-secondary"}></CountDetails>
           <CountDetails img={marker} bg={"bg-accent"}></CountDetails>
           <CountDetails img={phone} bg={"bg-gradient-to-r from-primary to-secondary"}></CountDetails>
       </div>
    );
};

export default Count;