import React from 'react';
import{customersData} from '../data/dummy';

const Customers =()=> {
  return (
    <div className='mt-12'>
      <div className='ml-12'>
        <span className='text-gray-300'>Page</span>
        <h2 className='font-bold'>Customers</h2>
      </div>
      <div className='mt-12'>
       <table className='border-color'></table>
      </div>

    </div>
  )
}

export default Customers