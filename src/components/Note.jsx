import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Zoom from '@material-ui/core/Zoom';
import { Edit } from '@material-ui/icons';
import CreateArea from './CreateArea';

const Note = ({ title, content, id, remove, checked, edit }) => {
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
