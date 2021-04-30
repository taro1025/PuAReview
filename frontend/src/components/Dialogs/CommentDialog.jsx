import React, {useState} from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

export const CommentDialog = ({
  isOpen,
  onClose,
  onPurpose,
  pua_id
}) => {
  //State of select item
  const [item, setItem] = useState('');
  const handleChange = (e) =>{
    setItem(e.target.value);
    onPurpose(e.target.value);
  };

  return (
  <Dialog
    open={isOpen}
    onClose={onClose}
  >


  <DialogTitle>
  <InputLabel id="select-label">項目</InputLabel>
  <Select
    labelId="select-label"
    value={item}
    onChange={handleChange}
  >
  <MenuItem value="ADD_MENTER">講師の追加</MenuItem>
  { pua_id && <MenuItem value="REVIEW">レビューを書く</MenuItem>}
  <MenuItem value="COMMENT">コメントを書く</MenuItem>
  </Select>
  </DialogTitle>
  <DialogContent>

  <TextareaAutosize aria-label="minimum height" rowsMin={30} placeholder="コメントを書く" />

  </DialogContent>



  <DialogActions>
  submit
  </DialogActions>
  </Dialog>
  )
}
