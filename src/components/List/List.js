import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

function List (props) {
  const [list, setList] = useState([])

  useEffect(() => {
    axios({
      url: apiUrl + '/items',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setList(res.data.items))
  }, [])

  function handleClick (event) {
    // finding the index of the item in the list array
    const foundItemIndex = list.findIndex(item => item._id === event.target.id)
    // making a copy of the list of items
    const copyList = list
    // finding the targeted item in the copy array and then setting the value of
    // isCompleted on the targeted item to the opposite
    copyList[foundItemIndex] = { ...copyList[foundItemIndex],
      isCompleted: !copyList[foundItemIndex].isCompleted }
    // console.log('our copy list\'s index ', copyList[foundItemIndex])
    console.log('our copy list ', copyList)
    return setList(copyList)
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item._id}>
          <Link to={`/item/${item._id}`} className={item.isCompleted ? '' : 'complete'}>
            {item.title}
          </Link>
          <button id={item._id} onClick={handleClick}>Completed</button>
        </li>
      ))}
    </ul>
  )
}

export default List
