
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyles';
import { RecipeList } from './RecipeList/RecipeList';
import { Layout } from './Layout';



export const App = () => {
  return (
    <Layout>
    <RecipeList recipes={recipes}/>
    <GlobalStyle/>
    </Layout>
  );
};
