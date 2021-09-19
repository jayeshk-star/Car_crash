import React, { useEffect } from 'react'
import './Data.css'

const Data = (props)=> {
    console.log(props.item.collision_id)
  return (
    <div className='data_card'>
      <span>
        <h3>Collision Id-{props.item.collision_id}</h3>
        <p>
          <span className='crashdate'>Crash Date-</span>
          {props.item.crash_date}
        </p>
        <p>
          <span className='crashTime'>Crash Time-</span>{props.item.crash_time}
        </p>
        <p>
          <span className='vehicle1'>Vehicle Type Code1-</span>
          {props.item.vehicle_type_code1}
        </p>
        <p>
          <span className='vehicle2'>Vehicle Type Code2-</span>
          {props.item.vehicle_type_code2}
        </p>
      </span>
    </div>
  )
}

export default Data
