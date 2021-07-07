import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

interface DescriptionFormProps {
  description: string;
  onDescriptionChange(event: React.ChangeEvent<{ value: any }>): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      width: '30rem',
      marginTop: '8px',
    },
  })
);

export const DescriptionForm: React.FC<DescriptionFormProps> = ({
  description,
  onDescriptionChange,
}) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.text}
        id='description'
        label='Description'
        multiline
        value={description}
        onChange={onDescriptionChange}
        rows={10}
        rowsMax={30}
        variant='outlined'
      />
    </div>
  );
};
