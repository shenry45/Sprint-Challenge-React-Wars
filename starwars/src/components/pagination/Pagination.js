import React from 'react';
import './pagination.css';

function Pagination(props) {
  return (
    <div className="pagination">
      <button className="prevPage" onClick={props.pagePrevious}>Previous Page</button>
      <p className="current-page">{props.page}</p>
      <button className="nextPage" onClick={props.pageNext}>Next Page</button>
    </div>
  )
}

export default Pagination;