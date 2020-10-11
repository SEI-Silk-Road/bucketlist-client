import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

const PaginationButtons = (props) => {
  // take out variables from props which are passed down from List.js
  const { totalItems, itemsPerPage, paginate, currentPage } = props

  // number of pages need for the list
  const numberOfPages = Math.ceil(totalItems / itemsPerPage)

  // set min and max for the buttons on the screen,
  let minPage = 0
  let maxPage = 0

  // if users are viewing pages in range of 1-4 and the total of pages is less than 5
  // then set min to 1 and max to the last page
  if (currentPage < 5 && numberOfPages < 5) {
    minPage = 1
    maxPage = numberOfPages

  // else if the total of pages is larger or equal to 5, and users are viewing pages
  // in range 1-3, then set min to 1 and max to 5
  } else if (currentPage < 4) {
    minPage = 1
    maxPage = 5

  // else if users are viewing the last 3 pages, then set max to last page and
  // min to max - 4
  } else if (currentPage >= numberOfPages - 2) {
    maxPage = numberOfPages
    minPage = maxPage - 4
  } else {
    minPage = currentPage - Math.floor(itemsPerPage / 2)
    maxPage = currentPage + Math.floor(itemsPerPage / 2)
  }

  // empty array to store page numbers which for-loop function
  const pageNumbers = []

  // creating page numbers basing on min and max of currentPage
  for (let i = minPage; i <= maxPage; i++) {
    pageNumbers.push(i)
  }

  // building previous button
  let previous = ''
  if (currentPage !== 1) {
    previous = (
      <Pagination.Item
        className='page-item paginationButtons'
        onClick={() => paginate(currentPage - 1)}
      >
        &lt;
      </Pagination.Item>
    )
  }

  // building next button
  let next = ''
  if (currentPage !== numberOfPages) {
    next = (
      <Pagination.Item
        className='page-item paginationButtons'
        onClick={() => paginate(currentPage + 1)}
      >
        &gt;
      </Pagination.Item>
    )
  }
  return (
    <div>
      <Pagination className='justify-content-center'>
        {previous}
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
        {next}
      </Pagination>
    </div>
  )
}

export default PaginationButtons
