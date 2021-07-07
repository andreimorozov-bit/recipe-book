import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './recipe.entity';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(RecipesRepository)
    private recipesRepository: RecipesRepository,
  ) {}

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipe = this.recipesRepository.create({ ...createRecipeDto });
    const savedRecipe = await this.recipesRepository.save(recipe);

    console.log(savedRecipe);
    return savedRecipe;
  }
}
