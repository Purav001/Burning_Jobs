import React from 'react';
import PropTypes from 'prop-types';

const FindCard = ({ heading, text, icon }) => {
  return (
    <div className="find-card">
      <div className="find-card-icon">{icon}</div>
      <div className="find-card-text">
        <h3 className="find-card-heading">{heading}</h3>
        <p className="find-card-paragraph">{text}</p>
      </div>
    </div>
  );
};

FindCard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default FindCard;
