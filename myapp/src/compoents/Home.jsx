import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from './Data'
import ReactPaginate from 'react-paginate'

const Home = () => {
  var [newdata, setnewdata] = useState([])
  var newdata = newdata.slice(0, 400)
  const [pagenumber, setPageNumber] = useState(0)
  const [filterdata1, setfilterdata1] = useState('')
  const [filterdata2, setfilterdata2] = useState('')
  const [datefilter, setdatefilter] = useState('')
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
    var getdata1 = await fetch(
      `https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000&vehicle_type_code1=${filterdata1}%20VEHICLE&vehicle_type_code2=${filterdata2}%20VEHICLE`
    )
    var actual_data1 = await getdata1.json()
    setnewdata(actual_data1)
  }, [filterdata2])
  console.log(newdata)

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
  console.log(filterdata1)

  return (
    <div>
      <div className='data_container'>
        <div className='filter_div'>
          <div className='date_div'>
            <label htmlFor=''>Filter date :</label>
            <input
              type='date'
              value={datefilter}
              onChange={e => setdatefilter(e.target.value)}
            />
          </div>
          <div className='vehical_div1'>
            <label htmlFor=''>Vechical Type 1: </label>
            <select
              onChange={e => setfilterdata1(e.target.value)}
              value={filterdata1}
            >
              <option value='"Sedan"'></option>
              <option value='PASSENGER'>PASSENGER VEHICLE</option>
            </select>
          </div>
          <div className='vehical_div2'>
            <label htmlFor=''>Vechical Type 2: </label>
            <select
              onChange={e => setfilterdata2(e.target.value)}
              value={filterdata2}
            >
              <option value='"Sedan"'></option>
              <option value='PASSENGER'>PASSENGER VEHICLE</option>
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
