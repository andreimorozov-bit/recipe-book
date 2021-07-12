import { Recipe } from '../../common/types';

interface RecipesListItemProps {
  recipe: Recipe;
}

export const RecipesListItem: React.FC<RecipesListItemProps> = ({ recipe }) => {
  return (
    <div>
      {recipe.title} {recipe.category}
    </div>
  );
};
