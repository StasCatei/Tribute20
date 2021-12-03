import styled from '@emotion/styled'

const Nav = styled.nav`
background-color: #ffffff;
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-top: 50px;
margin-left: 75px;

#title {
    font-size: 34px;
    text-transform: uppercase;
    letter-spacing: 10px;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
    margin-right: 560px;
    
}
 a {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 4px;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
    margin-right: 75px;
    padding: 5px;
  }  
 
/** Media Query */

@media screen and (max-width: 1112px) {
  .link-tribute {
  font-size: 12px;
}
#title {
  margin-right: 120px;
}
a {
  font-size: 16px;
  font-weight: bold;
  margin-right: 0px;
}
}


  @media screen and (max-width: 480px) {
.link-tribute {
  font-size: 12px;
}
#title {
  margin-right: -10px;
}
a {
  font-size: 14px;
  font-weight: bold;
  margin-right: 0px;
}

  }
`;


export default Nav;