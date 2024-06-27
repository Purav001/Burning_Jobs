import React from 'react';
import PropTypes from 'prop-types';

const FindCard = ({ heading, text, icon }) => {
  return (
    <div className="find-card padding-medium">
      <div className="find_card_heading_wrapper">
        <h3 className="find_card-heading">{heading}</h3>
        <div className="find_icon">{icon}</div>
      </div>
      <p className="find_text">{text}</p>
    </div>
  );
};

FindCard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default FindCard;
