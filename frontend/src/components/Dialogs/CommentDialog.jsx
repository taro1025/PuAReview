import React, {useState} from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

import { createPost } from '../../apis/createPost.jsx';

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

  const [name, setName] = useState("")
  const [text, setText] = useState("")

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
  <MenuItem value="REVIEW">レビューを書く</MenuItem>
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
        style={{marginBottom: '20px'}}
      />

    <TextareaAutosize
      aria-label="minimum height"
      rowsMin={30}
      cols="35"
      placeholder="コメントを書く"
      value={text}
      onChange={e => setText(e.target.value)}
    />
    </DialogContent>
    <DialogActions>

    {
      pua_id ? (
        <button type="submit" onClick={() => createPost({
            name: name,
            text: text,
            pua_id: pua_id
        })}>
        送信
        </button>
      ):(
        <p>コメントは講師の詳細ページから書くことができます。</p>
      )
    }



    </DialogActions>
  </form>
  </Dialog>
  )
}
