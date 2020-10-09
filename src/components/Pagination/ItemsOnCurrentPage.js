import React from 'react'
import { Link } from 'react-router-dom'

const ItemsOnCurrentPage = (props) => {
  // take currentItems array and handleClick function in props
  // currentItems to run map function
  // handleClick to use the function handleClick in List.js file
  const { currentItems, handleClick } = props

  return (
    <div>
      {currentItems.map((item, index) => (
        <li className='items' key={item._id}>
          <Link to={`/item/${item._id}`} className={item.isCompleted ? 'complete itemLink' : 'itemLink'}>
            {item.title}
          </Link>
          <input
            type='checkbox'
            id={item._id}
            readOnly
            checked={item.isCompleted}
            onClick={() => handleClick(index)} />
        </li>
      ))}
    </div>
  )
}

export default ItemsOnCurrentPage
