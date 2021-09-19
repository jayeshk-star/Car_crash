import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from './Data'
import ReactPaginate from 'react-paginate'

const Home = () => {
  var [newdata, setnewdata] = useState([])

  var newdata = newdata.slice(0, 400)
  const [pagenumber, setPageNumber] = useState(0)

  const userperpage = 6
  const pagevisited = pagenumber * userperpage

  const displayuser = newdata
    .slice(pagevisited, pagevisited + userperpage)
    .map((user, index) => {
      return (
        <NavLink activeStyle className='indiviualData' to={`./${index}`}>
          <Data key={index} item={user} />
        </NavLink>
      )
    })

  useEffect(async () => {
    var getdata = await fetch(
      'https://data.cityofnewyork.us/resource/h9gi-nx95.json'
    )
    var actual_data = await getdata.json()
    setnewdata(actual_data)
  }, [])
  console.log(newdata)

  const pageCount = Math.ceil(newdata.length / userperpage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <div>
      <div className='data_container'>
        <div className='filter_div'>
          <div className='date_div'>
            <label htmlFor=''>Filter date :</label> <input type='date' />
          </div>
          <div className='vehical_div1'>
            <label htmlFor=''>Vechical Type 1: </label>
            <select>
              <option value='vehical1'>sedan</option>
              <option value='vehical2'>Truck</option>
              <option value='vehical2'>Car</option>
              <option value='vehical2'>STATION WAGON</option>
              <option value='vehical2'>PASSENGER VEHICLE</option>
              <option value='vehical2'>Bus</option>
            </select>
          </div>
          <div className='vehical_div2'>
            <label htmlFor=''>Vechical Type 2: </label>
            <select>
              <option value='vehical1'>sedan</option>
              <option value='vehical2'>Truck</option>
              <option value='vehical2'>Car</option>
              <option value='vehical2'>STATION WAGON</option>
              <option value='vehical2'>PASSENGER VEHICLE</option>
              <option value='vehical2'>Bus</option>
            </select>
          </div>
        </div>
        {displayuser}

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtn'}
          previousLinkClassName={'previosBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDis'}
          activeClassName={'paginationActive'}
        />
      </div>
    </div>
  )
}

export default Home
