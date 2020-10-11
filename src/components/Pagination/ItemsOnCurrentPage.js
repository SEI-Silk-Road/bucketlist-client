import React from 'react'
import { Link } from 'react-router-dom'

const ItemsOnCurrentPage = (props) => {
  // take currentItems array and handleClick function in props
  // handleClick to use the function handleClick in List.js file
  const { currentItems, handleClick, itemsPerPage, currentPage } = props

  // since the items in currentItems have different index than what they should
  // have in list array, calculating the different and add them on later
  const addOn = itemsPerPage * (currentPage - 1)

  return (
    <div>
      {currentItems.map((item, index) => (
        <li className={item.isCompleted ? 'dimmed items' : 'items'} key={item._id}>
          <Link to={`/item/${item._id}`} className='itemLink'>
            <span className={item.isCompleted ? 'complete' : ''}>{item.title}</span>
          </Link>
          <input
            type='checkbox'
            id={item._id}
            readOnly
            checked={item.isCompleted}
            onClick={() => handleClick(index + addOn)} />
        </li>
      ))}
    </div>
  )
}

export default ItemsOnCurrentPage
