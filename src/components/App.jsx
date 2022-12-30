
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyles';
import { RecipeList } from './RecipeList';



export const App = () => {
  return (
    <>
    <RecipeList recipes={recipes}/>
    <GlobalStyle/>
    </>
  );
};
