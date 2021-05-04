
import {TextLink} from './links/links.jsx';
import {CoverLink} from './header/header.jsx';
//more smoll header
import {
  HeaderWrapper, HeaderIconText, HeaderIconWrapper,
 TitleHeder, HeaderIconLoggedIn, HeaderIconLoggedInYet
} from './header/header.jsx';


import {getLogout} from '../apis/logout.jsx';

export const Header = ({
  loggedInStatus,
  setUser,
  setLoggedInStatus
}) => {

  const handleClick = (e) =>{
    e.preventDefault();
    getLogout(setLoggedInStatus, setUser)
  }

  return (

    <HeaderWrapper>

      <TitleHeder><TextLink to={`/puas`}>PuAログ</TextLink></TitleHeder>

      {
        loggedInStatus ? (

          <HeaderIconWrapper>
            <HeaderIconLoggedIn/>
            <HeaderIconText>ログイン中</HeaderIconText>
            <CoverLink to="#" onClick={(e) => handleClick(e)}/>
          </HeaderIconWrapper>

          ):(
            <HeaderIconWrapper>
              <HeaderIconLoggedInYet/>
              <HeaderIconText>未ログイン</HeaderIconText>
              <CoverLink to={'/login'}/>
            </HeaderIconWrapper>
          )
      }



    </HeaderWrapper>
  )
}
