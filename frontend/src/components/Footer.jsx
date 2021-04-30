import React, {useState} from 'react';
import {useParams} from "react-router-dom";
//Material UIs
import { faHome, faSearch, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Search, Home, LibraryAdd } from '@material-ui/icons';

import {TextLink} from './links/links.jsx';
import { MultiDialog } from './Dialog.jsx';

export const Footer = () => {

  const initialStateDialog = {
    isOpenDialog: false,
    whichPurpose: 'COMMENT', //REVIEW, COMMENT, ADD_MENTER
    rate: 3
  };

  const params = useParams();

  const [state, setDialogState] = useState(initialStateDialog);

  return (

  <footer>
  <BottomNavigation>
    <BottomNavigationAction label="home" icon={<Home />} component={TextLink} to={`/puas`} />
    <BottomNavigationAction
      label="add"
      icon={<LibraryAdd />}
      onClick={() => setDialogState({
        ...state,
        isOpenDialog: true})}
     />
    <BottomNavigationAction label="search" icon={<Search />} />
  </BottomNavigation>
  {
    state.isOpenDialog &&
    <MultiDialog
      isOpen={state.isOpenDialog}
      onClose={()=> setDialogState({
        ...state,
        isOpenDialog: false
      })}
      whichPurpose={state.whichPurpose}
      onPurpose={(purpose)=> setDialogState({
        ...state,
        whichPurpose: purpose,
      })}
      rate={state.rate}
      onRate={(rate)=> setDialogState({
        ...state,
        rate: rate,
      })}
      pua_id={params.pua_id}
    />
  }
  </footer>


  )
}
