import React, { Fragment,useState } from 'react';
import TextField from '@material-ui/core/TextField';
//footer
import { Footer } from '../components/Footer.jsx';
//ファイル名とか関数名をsearchPuasに統一したいんだけど本番環境との齟齬がurls/index
//で起こるのがめんどいから後に回す
import {searchPuas} from '../apis/searchPua.jsx';


import { GeneratePuaCard } from '../components/PuaCard.jsx';

export const SearchForm = () => {
  const [name, setName] = useState("")

  const [searchedPuas, setPuas] = useState([]);
  const [reviewsAverageSet, setAverage] = useState([]);
  const [reviewsCountSet, setCount] = useState([]);


  const handleClick = (e) =>{
    e.preventDefault();
    searchPuas({
        name: name
    })
    .then((data) =>{
      if(data.searchedPuas){
        setPuas(data.searchedPuas);
        setAverage(data.reviewsAverageSet);
        setCount(data.reviewsCountSet);
      }

    })
  }

  return (
    <Fragment>
    <form>

        <TextField
          id="standard-basic"
          label="講師の検索"
          value={name}
          onChange={e => setName(e.target.value)}
        />


          <button type="submit" onClick={(e) => handleClick(e)}>
          送信
          </button>

    </form>

    {
      searchedPuas &&
        searchedPuas.map((pua, i) =>

        <GeneratePuaCard
        pua={pua}
        reviewsCountSet={reviewsCountSet ? reviewsCountSet : 0}
        reviewsAverageSet={reviewsAverageSet ? reviewsAverageSet : 0}
        index={i}
      />
    )
    }

    <Footer/>
    </Fragment>
  )
}
