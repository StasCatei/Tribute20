import styled from '@emotion/styled'

const SectionThree = styled.section`
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

  .page3 {
    margin-top: 50px;
}
.img-CCC {
    margin-left: 70%;
    padding-top: 50px;
}
#year5 {
    font-weight: bold;
    margin-left: 10%;;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 34px;
    padding-right:34px;
}
#CC {
    text-align: justify;
    width: 500px;
    margin-left: 10%;
    margin-top: -140px;
}

#year8 {
    padding-top: 10px;
    padding-right: 50px;
    padding-bottom: 10px;
    padding-left: 50px;
    
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
  .right1 {
    float: right;
    padding-top: 50px;
    margin-right: 10%;
  }

#job {
text-align: justify;
max-width: 380px;
padding-top: 60px;
}

.img-job {
margin-left: 10%;
padding-top: 50px;
}

.arrow {
    padding: 20px;
  }

   /** Media Query */


@media screen and (max-width: 1112px) {
.page3 {
  border-bottom: 60px solid #3A4A69;
  }
  #year5, #year8 {
    font-size: 12px;
    padding-bottom: 3px;
  }
  #year5 {
    margin-left: 15px;
  }
  #year8 {
     margin-right: 17px;
   }
  #CC, #job {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
     margin-left: 10px;
   }
   #CC {
     padding-top: 15px;
     margin-left: 25px;
   }
  
   #year6, #year7{
    padding-right: 190px;
    margin-right: 2px;
    padding-left: 50px;
 }
 #year7 {
   padding-left: 140px;;
 }
 .img-CCC {
  width: 210px;
  margin-left: auto;
  margin-right: 17px;
 }
.img-job {
  width: 210px;
  margin-left: 47px;
  
}
}
   @media screen and (max-width: 480px) {
    #year5, #year8{
      display: none;
    }
   #CC, #job {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
     margin-left: 10px;
   }
   #CC {
     margin-top: -166px;
   }
   #job {
    
    margin-right: -19px;
    margin-bottom: -50px;
    padding-left: 20px;
   }
   #year6, #year7 {
    padding-right: 90px;
    margin-right: 2px;
    padding-left: 30px;
 }
 .img-CCC {
  width: 170px;
  margin-left: auto;
  margin-right: 7px;
 }
.img-job {
  width: 170px;
  margin-left: 7px;  
}
.arrow {
  visibility: hidden;
}
  
   }

`
export default SectionThree;