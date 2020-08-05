import React from 'react';

const PageSelector = (props) => {
  return (
    <div className='row col-12 justify-content-center my-2'>
      {Array.from(Array(props.pages), (_, i) => (
        <button
          onClick={() => {
            props.page(i + 1);
          }}
          className='btn btn-sm btn-outline-success border border-0 font-weight-bold'
          key={i}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default PageSelector;
