import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import ButtonComp from '../components/ButtonComp';
import SectionTitle from '../components/SectionTitle';
import { selectUser } from '../redux/slices/userLogin';
import EditRecipe from '../components/EditRecipe';

const EditRecipePage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <>
      <SectionTitle
        title={'Edit Recipe'}
        button={
          <ButtonComp
            type='add-new-recipe'
            handleClick={() => navigate(`/my-recipes/${user.userId}`)}
            innerText={
              <FontAwesomeIcon icon={faReply} size='2x' color='white' />
            }
          />
        }
      />
      <EditRecipe />
    </>
  );
};

export default EditRecipePage;
