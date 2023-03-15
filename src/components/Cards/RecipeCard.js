import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faClock,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import './RecipeCard.css';
import LikeComp from '../LikeComp';
import Modal from '../Modal/Modal';

const RecipeCard = ({ recipeData, setSelectedCard, selectedCard }) => {
  return (
    <>
      <div className='card-wrapper'>
        <div
          className='card-top'
          style={{ backgroundImage: `url(${recipeData.recipeImg})` }}
        >
          <div className='recipe-type'>{recipeData.category}</div>
        </div>
        <div className='card-bottom'>
          <div>
            <h2>{recipeData.recipeTitle}</h2>
            <p>{recipeData.shortDesc}</p>
          </div>
          <div className='card-icons'>
            <div className='card-time'>
              <FontAwesomeIcon icon={faClock} color='gray' />{' '}
              {recipeData.prepTime} min
            </div>
            <div className='card-people' style={{ marginLeft: '10px' }}>
              <FontAwesomeIcon icon={faUtensils} color='gray' />{' '}
              {recipeData.numberOfPeople} people
            </div>
            <LikeComp
              recipeLikes={recipeData.likes}
              recipeId={recipeData._id}
              className='card-stars'
            />
            <div className='card-button'>
              <button onClick={() => setSelectedCard(recipeData)}>
                <FontAwesomeIcon icon={faAnglesRight} color='white' />
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedCard && (
        <Modal selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      )}
    </>
  );
};

export default RecipeCard;
