import React from "react";
import "./pagination.css";

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <div className="pagination">
        {prev ? (
          <div className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </div>
        ) : null}

        {next ? (
          <div className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Pagination;
