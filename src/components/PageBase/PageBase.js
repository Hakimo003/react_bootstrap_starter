import React, { PropTypes } from 'react';

function PageBase(props) {
  return (

    <div >
      {props.children}
    </div>
  );
}

PageBase.propTypes = {
  children: PropTypes.element.isRequired,

};

export default PageBase;
