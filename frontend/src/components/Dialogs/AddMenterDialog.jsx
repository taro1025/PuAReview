import React, {useState} from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';

import { addPua } from '../../apis/AddPua.jsx';

export const AddMenterDialog = ({
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
  //states of Contents
  const [name, setName] = useState("")
  const [sex, setSex] = useState(1)
  const [twitterAccountUrl, setTwitterAccountUrl] = useState("")

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

      <TextField
        id="standard-basic"
        label="講師名"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Select
        labelId="select-label"
        value={sex}
        onChange={e => setSex(e.target.value)}
      >
      <MenuItem value="1">男性</MenuItem>
      <MenuItem value="0">女性</MenuItem>
      </Select>

      <TextField
        id="standard-basic"
        label="講師のTwitter URL"
        value={twitterAccountUrl}
        onChange={e => setTwitterAccountUrl(e.target.value)}
      />
    </DialogContent>
    <DialogActions>


        <button type="submit" onClick={() => addPua({
          name: name,
          sex: sex,
          twitterAccountUrl: twitterAccountUrl,
        })}>
        送信
        </button>


    </DialogActions>
  </form>
  </Dialog>
  )
}
