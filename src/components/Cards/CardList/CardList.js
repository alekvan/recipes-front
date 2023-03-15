import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard';
import axios from 'axios';
import Pagination from '../../Pagination/Pagination';

const CardList = ({ filterByCategory }) => {
  const [recipesList, setRecipesList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [pages, setPages] = useState(null);

  const pageNumber = useParams().pageNumber || 1;

  useEffect(() => {
    if (filterByCategory === 'new') {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/recipes/${filterByCategory}/?pageNumberNew=${pageNumber}`
        )
        .then((res) => {
          setPages(res.data.pages);
          setRecipesList(res.data.recipes);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (filterByCategory === 'popular') {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/recipes/${filterByCategory}/?pageNumberNew=${pageNumber}`
        )
        .then((res) => {
          setPages(res.data.pages);
          setRecipesList(res.data.recipes);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/recipes/${filterByCategory}/?pageNumber=${pageNumber}`
        )
        .then((res) => {
          setPages(res.data.pages);
          setRecipesList(res.data.recipes);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [pageNumber, filterByCategory]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '1rem',
        }}
      >
        {recipesList.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipeData={recipe}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
            setRecipesList={setRecipesList}
          />
        ))}
      </div>
      {filterByCategory !== 'new' && filterByCategory !== 'popular' && (
        <Pagination
          page={pageNumber}
          totalPages={pages}
          category={filterByCategory}
        />
      )}
    </>
  );
};

export default CardList;
