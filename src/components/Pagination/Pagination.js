import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

const PaginationButtons = (props) => {
  console.log('heyyyyyyyy')
  const { totalItems, itemsPerPage, paginate, currentPage } = props
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <Pagination className='justify-content-center'>
        {pageNumbers.map(number => (
          <Pagination.Item
            key={number}
            className='page-item paginationButtons'
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}

export default PaginationButtons
