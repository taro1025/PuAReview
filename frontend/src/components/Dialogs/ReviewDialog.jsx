import React, {useState} from 'react';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

export const ReviewDialog = ({
  isOpen,
  onClose,
  onPurpose,
  onRate,
  rate,
  handleChange,
  item,
  pua_id
}) => {


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
  <Box>
  <Typography>評価</Typography>
  <Rating
    value={rate}
    onChange={(event, newValue) =>{
      onRate(newValue);
    }}
  />
  </Box>
  <TextareaAutosize aria-label="minimum height" rowsMin={30} placeholder="レビューを書く" />

  </DialogContent>



  <DialogActions>
  submit
  </DialogActions>
  </Dialog>
  )
}
