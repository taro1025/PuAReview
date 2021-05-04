//ダイアログはフッターに埋め込まれてます。

import React, {useState} from 'react';

import {ReviewDialog} from './Dialogs/ReviewDialog.jsx';
import {CommentDialog} from './Dialogs/CommentDialog.jsx';
import {AddMenterDialog} from './Dialogs/AddMenterDialog.jsx';


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
  const [item, setItem] = useState("REVIEW");
  const handleChange = (e) =>{
    setItem(e.target.value);
    onPurpose(e.target.value);
  };

  return (

    // I want to do refactoring around here
    <div>
    {
      whichPurpose == 'REVIEW' &&
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
