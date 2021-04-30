import React, {useState} from 'react';
import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import {ReviewDialog} from './Dialogs/ReviewDialog.jsx';
import {CommentDialog} from './Dialogs/CommentDialog.jsx';
import {AddMenterDialog} from './Dialogs/AddMenterDialog.jsx';

const TextArea = styled.textarea`
  width: 90%;
  height: 200px;
`;

const CoveredDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const MultiDialog = ({
  isOpen,
  onClose,
  whichPurpose,
  onPurpose,    //select Review or Add menter or Comment
  onRate,       //select rating
  rate,         //star
  pua_id
}) =>{

  //State of select purpose(Review or Add menter or Comment)
  const [item, setItem] = useState('');
  const handleChange = (e) =>{
    setItem(e.target.value);
    onPurpose(e.target.value);
  };
  
  return (

    // I want to do refactoring around here
    <div>
    {
      (whichPurpose == 'REVIEW' && pua_id) &&
      <ReviewDialog
        isOpen={isOpen}
        onClose={onClose}
        onRate={onRate}
        rate={rate}
        item = {item}
        handleChange={handleChange}
        onPurpose={onPurpose}
        pua_id={pua_id}
      />
    }
    {
      whichPurpose == 'COMMENT' &&
      <CommentDialog
        isOpen={isOpen}
        onClose={onClose}
        onPurpose={onPurpose}
        pua_id={pua_id}
    />
    }
    {
      whichPurpose == 'ADD_MENTER' &&
      <AddMenterDialog
        isOpen={isOpen}
        onClose={onClose}
        onPurpose={onPurpose}
        pua_id={pua_id}
    />
    }
    </div>


  )
}
