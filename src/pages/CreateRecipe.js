import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import ButtonComp from '../components/ButtonComp';
import SectionTitle from '../components/SectionTitle';
import NewRecipeForm from '../components/NewRecipeForm/NewRecipeForm';
import { selectUser } from '../redux/slices/userLogin';

const CreateRecipe = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <>
      <SectionTitle
        title={'Create New Recipe'}
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
      <NewRecipeForm requestMethod='POST' />
    </>
  );
};

export default CreateRecipe;
