import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

function List (props) {
  const [list, setList] = useState([])
  // const [load, setLoad] = useState(false)

  useEffect(() => {
    axios({
      url: apiUrl + '/items',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setList(res.data.items))
      // .then(res => setList(res.data.items))
  }, [])

  return (
    <ul>
      {list.map(item => (
        <li key={item._id}>
          <Link to={`/item/${item._id}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default List
