import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Zoom from '@material-ui/core/Zoom';
import { Edit } from '@material-ui/icons';
import CreateArea from './CreateArea';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const Note = ({ title, content, id, remove, checked, edit }) => {
  const classes = useStyles();
  return (
    <Zoom in={checked}>
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>

        <button
          onClick={() => {
            remove(id);
          }}
        >
          <DeleteIcon />
        </button>
        <button
          onClick={() => {
            edit();
          }}
        >
          <EditIcon />
        </button>
      </div>
    </Zoom>
  );
};

export default Note;
