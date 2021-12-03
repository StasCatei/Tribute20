import styled from '@emotion/styled'


const SectionSix = styled.section`
background-color: #ffffff;
margin-right: 75px;

.page6 {
  margin-top: 50px;
  }
 
  h3 {
    background-color: rgba(83, 106, 153, 0.49);
    letter-spacing: 1px;
    position: absolute;
    text-align: center;
    font-weight: bold;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  }
  
  #dies{
margin-top: 50px;
margin-left: 40%;
padding-top: 10px;
padding-bottom: 10px;
padding-left:14px;
padding-right: 14px;
  } 
  #age {
    text-align: center;
    font-weight: bold;
    padding-top: 120px;
  }
 
  #www {
    margin-left: 40%;
  }
  
  #finish {
    color: #3A548A;
    font-size: 35px;
    font-weight: bold;
    margin-left: 50%;
    margin-bottom: 50px;
  }

  .img-finish {
    display: block;
    box-shadow: 7px 2px rgba(0, 0, 0, 0.25);
    width: 500px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
  .arrow {
    padding: 20px;
  }
 
  /** Media Query */

  @media screen and (max-width: 1112px) {

    #dies {
     margin-left: 25%;
    }

    #www {
  background-color: #3A4A69;
  color: #ffffff;
  font-size: 14px;
  margin-left:  25%;
  margin-right:  auto;
  padding: 3px;
}
.img-finish {
  display: block;
  max-width: 400px;
  margin-left: 15%;
}


  }


 @media screen and (max-width: 480px) {
   
  #dies {
      display: none;
    }
#finish {
  margin-left: 50%;
}
#age {
  padding-left: 50px;
}
.img-finish {
  display: block;
  max-width: 300px;
  margin-left: 15%;
}
#www {
  background-color: #3A4A69;
  color: #ffffff;
  font-size: 12px;
  margin-left:  25%;
  margin-right:  auto;
  padding: 3px;
}
 }
`
export default SectionSix;