import styled from '@emotion/styled'


const SectionFive = styled.section`
background-color: #ffffff;

h2 {
    padding-top: 50px;
    padding-right: 15px;
  }
  h3 {
    background-color: rgba(83, 106, 153, 0.49);
    letter-spacing: 1px;
    position: absolute;
    text-align: center;
    font-weight: bold;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  }
  .page5 {
   margin-top: 50px;
  }
  

  #delhi {
  position: absolute;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 45px;
  padding-right: 45px;
}
#population {
    text-align: justify;
    width: 380px;
    padding-top: 150px;
    margin-left: 10%;
  }

time {
    display: inline;
    color: #3A548A;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.25);
    font-size: 35px;
    font-weight: bold;
    margin-right: 75px;
    padding: 256px;
  }
  .time {
    padding-top: 50px;
  }
  
.img-speech {
  float: right;
  margin-right: 10%;
  margin-top: -190px;
}

#speech1 {
  float: right;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 90px;
  margin-left: 60%;
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
}
#culture {
  text-align: justify;
  width: 500px;
  margin-left: 56%;
  padding-top: 190px;
}

.img-visit {
display: block;
margin-top: -270px;
margin-left: 10%;
}
.arrow {
    padding: 20px;
  }

  /** Media Query */

  @media screen and (max-width: 1112px) {
  .page5 {
  border-bottom: 60px solid #3A4A69;
  }
  
  #delhi, #speech1 {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
     padding: 5px;
   }
  .right2 {
    margin-right: -30px;
  }
   
   #population, #culture {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
   }
   #culture {
     padding-top: 150px;
   }
   
   #population{
  padding-top: 100px;
   }
 
   #year11, #year12 {
    padding-right: 190px;
    margin-right: 2px;
    padding-left: 50px;
 }
 
 .img-speech {
  width: 200px;
  margin-left: 20px;
  padding-top: 10px;
 }

.img-visit{
  width: 200px;
}
}

  @media screen and (max-width: 480px) {
    #delhi, #speech1 {
      display: none;
    }
   #population, #culture{
     font-size: 12px;
     font-weight: bold;
     width: 175px;
   }
   
   #population {
   padding-right: 32px;
   padding-bottom: 19px;
   }
   #culture {
     padding-right: 10px;

   }
   
   #year11, #year12 {
    padding-right: 90px;
    margin-right: 2px;
    padding-left: 30px;
 }
 .img-speech {
  width: 200px;
  margin-right: auto;
  margin-left: -32px;
 }
.img-visit {
  width: 170px;
  margin-right: 7px;  
}
.arrow {
  visibility: hidden;
}
}
 
`
export default SectionFive;