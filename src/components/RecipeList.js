import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};


// !this component receives an array of object
// only id property is described, as it is required by this component
// the rest of the properties of the object are just passed to the App

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, })
  ).isRequired,
};
