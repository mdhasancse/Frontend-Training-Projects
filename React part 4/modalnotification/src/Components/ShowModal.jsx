import React from 'react'
import PropTypes from 'prop-types';

export default function ShowModal(king) {
  return (
    <div>
      <h1>{king.heading}</h1>
      <h4>{king.footer}</h4>
    </div>
  )
}


ShowModal.propTypes={
    heading: PropTypes.string.isRequired,
    footer:PropTypes.string.isRequired
}
