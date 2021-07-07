import {
  Controller,
  Query,
  Get,
  Post,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './recipe.entity';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipesService.createRecipe(createRecipeDto);
  }
}
