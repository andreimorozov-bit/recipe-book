import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { IngredientFormItem } from './IngredientFormItem';
import { DescriptionForm } from './DescriptionForm';
import {
  Ingredient,
  NewRecipe as NewRecipeType,
  Unit,
} from '../../../common/types';
import { createRecipe } from '../../../api/recipes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
      '& input': {
        height: '36px',
        padding: '0px 12px',
      },

      '& label': {
        height: '36px',
        top: '-3px',
        left: '-3px',
      },
      '& label[data-shrink=true]': {
        top: 0,
      },
    },
    addIngredientContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    addIngredientIcon: {
      width: '3rem',
      height: '3rem',
      color: theme.palette.primary.main,
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    title: {
      margin: '1rem 1.5rem',
      width: '25rem',
    },
    save: {
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        margin: '1rem',
      },
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
    },
    category: {
      margin: '1rem',
      width: '12rem',
    },
  })
);

export const NewRecipe: React.FC = () => {
  const classes = useStyles();
  const [ingredientName, setIngredientName] = useState<string>('');
  const [unit, setUnit] = useState<string>('gram');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { amount: '', unit: '', name: '' },
  ]);

  const handleTitleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setTitle(event.target.value);
  };

  const handleUnitChange = (
    event: React.ChangeEvent<{ value: any }>,
    index: number
  ) => {
    const newIngredients = ingredients.map((item, ind) => {
      const newItem = { ...item, unit: event.target.value };
      if (index === ind) {
        return newItem;
      }
      return item;
    });

    setIngredients(newIngredients);
  };

  const handleAmountChange = (
    event: React.ChangeEvent<{ value: any }>,
    index: number
  ) => {
    const newAmount =
      event.target.value.length > 0 ? parseInt(event.target.value) : '';
    console.log(typeof newAmount);
    console.log(newAmount);
    let newIngredients = [];
    if (
      (typeof newAmount === 'number' && newAmount >= 0 && newAmount !== NaN) ||
      event.target.value === ''
    ) {
      newIngredients = ingredients.map((item, ind) => {
        const newItem = { ...item, amount: newAmount.toString() };
        if (index === ind) {
          return newItem;
        }
        return item;
      });

      setIngredients(newIngredients);
    }
    return;
  };

  const handleIngredientNameChange = (
    event: React.ChangeEvent<{ value: any }>,
    index: number
  ) => {
    const newIngredients = ingredients.map((item, ind) => {
      const newItem = { ...item, name: event.target.value };
      if (index === ind) {
        return newItem;
      }
      return item;
    });
    setIngredients(newIngredients);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<{ value: any }>
  ) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<{ value: any }>) => {
    setCategory(event.target.value);
  };

  const handleAddIngredientClick = () => {
    const newIngredients = [
      ...ingredients,
      { name: '', unit: '' as Unit, amount: '' },
    ];
    setIngredients(newIngredients);
  };

  const deleteIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleSaveClick = async () => {
    const newRecipe: NewRecipeType = {
      title,
      ingredients,
      category,
      description,
    };
    const response = await createRecipe(newRecipe);
  };

  return (
    <div className={classes.root}>
      <form noValidate autoComplete='off'>
        <div className={classes.titleContainer}>
          <TextField
            className={classes.title}
            margin='dense'
            label='Title'
            value={title}
            onChange={handleTitleChange}
            variant='outlined'
          />
          <FormControl variant='outlined' className={classes.category}>
            <InputLabel margin='dense' id='category-label'>
              Category
            </InputLabel>
            <Select
              labelId='category-label'
              id='category'
              margin='dense'
              value={category}
              onChange={handleCategoryChange}
              label='Category'
            >
              <MenuItem value={'dessert'}>dessert</MenuItem>
              <MenuItem value={'salad'}>salad</MenuItem>
              <MenuItem value={'soup'}>soup</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Grid
          container
          direction='row'
          justify='center'
          alignItems='flex-start'
        >
          <Grid item xs={12} sm={12} md={6} className={classes.center}>
            <Grid container direction='row' alignItems='flex-start'>
              <Typography variant='h6' color='primary'>
                Ingredients
              </Typography>
              {ingredients.map((item, index) => {
                return (
                  <IngredientFormItem
                    key={index}
                    onAmountChange={handleAmountChange}
                    onUnitChange={handleUnitChange}
                    onIngredientChange={handleIngredientNameChange}
                    onIngredientDelete={deleteIngredient}
                    ingredient={item}
                    index={index}
                  />
                );
              })}

              <Grid item xs={12}>
                <div className={classes.addIngredientContainer}>
                  <IconButton onClick={handleAddIngredientClick}>
                    <AddCircleIcon className={classes.addIngredientIcon} />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h6' color='primary'>
              Description
            </Typography>
            <DescriptionForm
              description={description}
              onDescriptionChange={handleDescriptionChange}
            />
          </Grid>
        </Grid>
        <div className={classes.save}>
          <Button variant='contained' color='primary' onClick={handleSaveClick}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
