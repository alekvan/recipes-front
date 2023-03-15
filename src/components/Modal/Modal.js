import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faClock,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import LikeComp from '../LikeComp';

const Modal = ({ selectedCard, setSelectedCard }) => {
  const handleClick = () => {
    setSelectedCard(null);
  };

  return (
    <div className='backdrop'>
      <div className='modal-wrapper'>
        <div
          className='modal-title-close-button'
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span className='modal-title'>{selectedCard.recipeTitle}</span>
          <button className='modal-close-btn' onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} size='2x' />
          </button>
        </div>
        <div className='modal-body'>
          <div className='modal-body-left'>
            <img src={selectedCard.recipeImg} alt='recipe_image' />
            <div
              className='recipe-category'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <span>Best Served For</span>
              <span>{selectedCard.category}</span>
            </div>
            <div
              className='recipe-short-description'
              style={{ marginTop: '1rem' }}
            >
              {selectedCard.shortDesc}
            </div>
            <div className='modal-icons'>
              <div className='modal-time'>
                <FontAwesomeIcon icon={faClock} color='gray' />{' '}
                {selectedCard.prepTime} min
              </div>
              <div className='modal-people' style={{ marginLeft: '10px' }}>
                <FontAwesomeIcon icon={faUtensils} color='gray' />{' '}
                {selectedCard.numberOfPeople} people
              </div>
              <LikeComp
                recipeLikes={selectedCard.likes}
                recipeId={selectedCard._id}
                className='modal-stars'
              />
            </div>
          </div>
          <div className='modal-body-right'>
            <div className='recipe-title'>Recipe Details</div>
            <div className='recipe-description'>{selectedCard.recipeDesc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
