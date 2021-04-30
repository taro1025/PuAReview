
import {TextLink} from './links/links.jsx';
import {CoverLink} from './header/header.jsx';
//more smoll header
import {
  HeaderWrapper, HeaderIcon, HeaderIconText, HeaderIconWrapper,
 TitleHeder
} from './header/header.jsx';

import { faLock } from "@fortawesome/free-solid-svg-icons";

export const Header = ({
  loggedInStatus
}) => {


  return (

    <HeaderWrapper>

      <TitleHeder><TextLink to={`/puas`}>PuAログ</TextLink></TitleHeder>


          <HeaderIconWrapper>
            <HeaderIcon icon={faLock}/>
            <HeaderIconText><p>{loggedInStatus}</p></HeaderIconText>
            <CoverLink to={'/login'}/>
          </HeaderIconWrapper>


    </HeaderWrapper>
  )
}
