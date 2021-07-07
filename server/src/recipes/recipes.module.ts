import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesController } from './recipes.controller';
import { RecipesRepository } from './recipes.repository';
import { RecipesService } from './recipes.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecipesRepository])],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
