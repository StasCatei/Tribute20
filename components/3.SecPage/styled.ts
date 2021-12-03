import styled from '@emotion/styled'

 const Tributeinfo = styled.section`
background-color: #ffffff;

  h2 {
    padding-top: 50px;
    padding-right: 15px;
  }
  h3 {
    background-color: rgba(83, 106, 153, 0.49);
    position: absolute;
    text-align: center;
    font-weight: bold;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  }
  .page2 {
      margin-top: 50px;
  }
  .university-img {
    margin-left: 70%;
    padding-top: 50px;
  }
#born {
    text-align: justify;
    width: 500px;
    margin-left: 10%;
    margin-top: -80px;

  }

  #year1 {
    font-weight: bold;
    margin-left: 10%;;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 34px;
    padding-right:34px;
  }
  
  #univer {
    text-align: justify;
    width: 500px;
    margin-right: 127px;
    padding-top: 70px;
  }

  #year4 {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    
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
  .right {
    float: right;
    margin-top: -50px;
    padding-top: 90px;
  }
  .img-univ {
    margin-left: 10%;
    padding-top: 50px;
  }
  .arrow {
   padding: 20px;
  }
  /** Media Query */

  @media screen and (max-width: 1112px) {
.page2 {
  border-bottom: 60px solid #3A4A69;
  }
  #year1, #year4 {
    font-size: 12px;
    padding-bottom: 3px;
  }
  #born, #univer {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
     margin-left: 10px;
   }
   #year4 {
     margin-right: 17px;
   }
   
   #year2, #year3{
    padding-right: 180px;
    margin-right: 2px;
    padding-left: 50px;
 }
 #year3 {
   padding-left: 140px;;
 }
 .university-img {
  width: 210px;
  margin-left: auto;
  margin-right: 17px;
 }
.img-univ {
  width: 210px;
  margin-left: 7px;
  
}

  
}
  @media screen and (max-width: 480px) {

    #year1, #year4{
      display: none;
    }
   #born, #univer {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
     margin-left: 10px;
   }
   #born {
     margin-top: -126px;
   }
   #univer {
  
     margin-right: 7px;
     margin-top: -65px;
   }
   #year2, #year3{
    padding-right: 90px;
    margin-right: 2px;
    padding-left: 30px;
 }
 .university-img {
  width: 170px;
  margin-left: auto;
  margin-right: 7px;
 }
.img-univ {
  width: 170px;
  margin-left: 7px;
  
}
.arrow {
  visibility: hidden;
}
  }


`

export default Tributeinfo;