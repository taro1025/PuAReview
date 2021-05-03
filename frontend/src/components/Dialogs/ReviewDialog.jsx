import React, {useState, useContext} from 'react';
import { IsUserLoggedIn } from '../../App.js';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

import { createReview } from '../../apis/createReview.js';

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

  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const user = useContext(IsUserLoggedIn)

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

  <form>
    <DialogContent>
      <Typography>ニックネーム</Typography>
      <TextField
        id="standard-basic"
        label="さすらいのナンパ師"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Box>
        <Typography>評価</Typography>
        <Rating
          value={rate}
          onChange={(event, newValue) =>{
            onRate(newValue);
          }}
        />
      </Box>
    <TextareaAutosize
      aria-label="minimum height"
      rowsMin={30}
      placeholder="レビューを書く"
      value={text}
      onChange={e => setText(e.target.value)}
    />
    </DialogContent>
    <DialogActions>
    {console.log(`user:`,user)}
    {
      user ? (
        <button type="submit" onClick={() => createReview({
            name: name,
            star: rate,
            text: text,
            pua_id: pua_id
        })}>
        送信
        </button>
      ):(
        <p>投稿するにはログインが必要です。</p>
      )
    }

    </DialogActions>
  </form>

  </Dialog>
  )
}
