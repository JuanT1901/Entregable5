import "./styles/pagination.css"

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePrev10 = () => {
    if (currentPage > 1 && currentPage > 10) {
      setCurrentPage(currentPage - 10);
    } else {
      setCurrentPage(1);
    }
  }

  const handlePrev5 = () => {
    if (currentPage > 1 && currentPage > 5) {
      setCurrentPage(currentPage - 5);
    } else {
      setCurrentPage(1);
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleNext5 = () => {
    if (currentPage  < totalPages && currentPage < totalPages - 4) {
      setCurrentPage(currentPage + 5)
    } else {
      setCurrentPage(totalPages)
    }
  }

  const handleNext10 = () => {
    if (currentPage  < totalPages && currentPage < totalPages - 9) {
      setCurrentPage(currentPage + 10)
    } else {
      setCurrentPage(totalPages)
    }
  }
  
  return (
      <div className="button__container">
        <button onClick={handlePrev10}>-10</button>
        <button onClick={handlePrev5}>-5</button>
        <button onClick={handlePrev}>Prev</button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleNext5}>+5</button>
        <button onClick={handleNext10}>+10</button>
      </div>
  )
}

export default Pagination