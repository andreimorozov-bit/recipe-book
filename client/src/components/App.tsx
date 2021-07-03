import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './ui/theme';
import Button from '@material-ui/core/Button';
import { Header } from './ui/Header';
import { NewRecipePage } from '../pages/NewRecipe';
import { RecipeDetailPage } from '../pages/RecipeDetail';
import { RecipesListPage } from '../pages/RecipesList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/newrecipe'>
            <NewRecipePage />
          </Route>
          <Route path='/' exact>
            <Button variant='contained' color='secondary'>
              Home
            </Button>
          </Route>
          <Route path='/recipies' exact>
            <RecipesListPage />
          </Route>
          <Route path='/recipies/:id'>
            <RecipeDetailPage />
          </Route>
          <Route path='/signin/google' exact>
            <Button variant='contained' color='secondary'>
              Sign In with google
            </Button>
          </Route>
          <Route path='/signin/email' exact>
            <Button variant='contained' color='secondary'>
              Sign In with email
            </Button>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
