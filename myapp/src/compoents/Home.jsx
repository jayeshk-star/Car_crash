import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from './Data'

const Home = () => {
  var [newdata, setnewdata] = useState([])
  useEffect(async () => {
    var getdata = await fetch(
      'https://data.cityofnewyork.us/resource/h9gi-nx95.json'
    )
    var actual_data = await getdata.json()
    setnewdata(actual_data)
  }, [])
  console.log(newdata)
  return (
    <div>
      <div className='data_container'>
        {newdata.map((item, index) => {
          return (
            <NavLink activeStyle className='indiviualData' to={`./${index}`}>
              <Data key={index} item={item} />
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Home
