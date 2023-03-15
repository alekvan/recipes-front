import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RecipeTable.css';

const RecipeTable = ({ tableData, setTableData }) => {
  const navigate = useNavigate();

  const handleDeleteRecipe = (recipeId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/recipes/${recipeId}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then(() => {
        let list = tableData.filter((recipe) => recipe._id !== recipeId);
        console.log(list);
        setTableData(list);
      })
      .catch((err) => console.log(err));
  };

  const handleEditRecipe = (recipeId) => {
    navigate(`/edit-recipe/${recipeId}`);
  };

  return (
    <table
      className="recipe-table"
      style={{ width: '100%', marginTop: '2rem' }}
    >
      <colgroup>
        <col span="1" style={{ width: '20%' }} />
        <col span="1" style={{ width: '10%' }} />
        <col span="1" style={{ width: '20%' }} />
        <col span="1" style={{ width: '40%' }} />
      </colgroup>
      <thead>
        <tr className="table-row-headers">
          <th className="table-headers">Recipe Name</th>
          <th className="table-headers">Category</th>
          <th className="table-headers">Created On</th>
          <th
            className="table-headers"
            style={{ textAlign: 'end', paddingRight: '1rem' }}
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((recipe) => (
          <tr className="table-row" key={recipe._id}>
            <td
              className="recipe-table-row"
              onClick={() => handleEditRecipe(recipe._id)}
            >
              {recipe.recipeTitle}
            </td>
            <td
              className="recipe-table-row"
              onClick={() => handleEditRecipe(recipe._id)}
            >
              <button>{recipe.category}</button>
            </td>
            <td
              className="recipe-table-row"
              onClick={() => handleEditRecipe(recipe._id)}
            >
              {moment(recipe.createdAt).format('DD.MM.YYYY')}
            </td>
            <td style={{ textAlign: 'end', paddingRight: '1.3rem' }}>
              <button
                onClick={() => handleDeleteRecipe(recipe._id)}
                style={{ border: '0', background: 'none' }}
              >
                <FontAwesomeIcon icon={faTrashCan} size="xl" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTable;
