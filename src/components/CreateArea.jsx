import React, { useState, useEffect, useRef } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
// import ComponentVisible from './ComponentVisible';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { TextareaAutosize } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Typer from './Typer';

const CreateArea = ({ add }) => {
  /* Typer function */
  const data = ['Take a note...', 'Type something...'];

  const CONSTANTS = {
    DELETING_SPEED: 80,
    TYPING_SPEED: 150,
  };

  const [state, setState] = useState({
    text: '',
    message: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = '';
    const handleType = () => {
      setState((prevState) => ({
        ...prevState,
        text: getCurrentText(prevState),
        typingSpeed: getTypingSpeed(prevState),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === '') {
      setState((prevState) => ({
        ...prevState, // prevState means currentState
        isDeleting: false,
        loopNum: prevState.loopNum + 1,
        message: getMessage(prevState, data),
      }));
    }
  }, [state.text, state.message, state.isDeleting, data]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }
  /* Typer function end */

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    add(note);

    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  };

  const [isExpanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <form className="create-note">
          <Collapse in={open}>
            <input
              onClick={handleClick}
              value={note.title}
              onChange={handleChange}
              name="title"
              placeholder="Title"
            />
          </Collapse>

          <TextareaAutosize
            onClick={() => {
              handleClick();
              expand();
            }}
            onChange={handleChange}
            value={note.content}
            name="content"
            placeholder={state.text}
            rows={isExpanded && open ? '3' : '1'}
          />

          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </ClickAwayListener>
    </div>
  );
};

export default CreateArea;
