import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/userLogin';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAlert } from '@blaumaus/react-alert';

const LikeComp = ({ recipeId, className }) => {
  const alert = useAlert();
  const userState = useSelector(selectUser);
  const [numOfLikes, setNumOfLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/recipes/${recipeId}`)
      .then((res) => {
        setIsLiked(res.data.recipe.likes.includes(userState.userId));
        setNumOfLikes(res.data.recipe.likes.length);
      });
  }, [numOfLikes, isLiked]);
  const handleLike = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/recipes/likes`,
        {
          userId: userState.userId,
          recipeId: recipeId,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        setIsLiked(res.data.like);
        setNumOfLikes(res.data.likeArr.length);
      })
      .catch((err) => alert.error('You must be logged in!'));
  };
  return (
    <div className={className}>
      <FontAwesomeIcon
        icon={faStar}
        color={userState.userId && isLiked ? '#f0972a' : 'gray'}
        onClick={handleLike}
      />{' '}
      {numOfLikes}
    </div>
  );
};

export default LikeComp;
