import React from 'react'

const Pagination = (props) => {
  console.log('heyyyyyyyy')
  const { totalItems, itemsPerPage, paginate } = props
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className='pagination justify-content-center'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <button onClick={() => paginate(number)}
            className='page-link badge badge-secondary p-2'
          >
            {number}
          </button>
        </li>
      ))}
    </div>
  )
}

export default Pagination
