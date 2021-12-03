import styled from '@emotion/styled'


const SectionFour = styled.section`
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
  .page4 {
   margin-top: 50px;
  }
  .progr {
      float: right;
      margin-right: 10%;
  }
  #program {
      margin-top: -200px;
      margin-right: 10%;
      
  }
  #wife {
    float:right;
    text-align: justify;
    width: 480px;
    margin-top: -190px;
    padding-top: 50px;
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
  .left {
      margin-left: 10%;
      
  }
  .img-mexico {
    display: block;
    margin-top: 50px;
    margin-left: 10%;
    padding-top: 70px;
    padding-left: 50px;
  }
  
  #married {
    position:absolute;
    width: 500px;
    border-radius: 5px;
    margin-top: 90px;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #married1{
    text-align: justify;
    width: 480px;
    padding-top: 210px;  
  }
  
  .img-norman{
    float: right;
    margin-top: -200px;
    margin-right: 10%;
    }
    .arrow {
        padding: 20px;
      }

      /** Media Query */
      @media screen and (max-width: 1112px) {
        .page4 {
  border-bottom: 60px solid #3A4A69;
  }
 
  #year5 {
    margin-left: 15px;
  }
  #year8 {
     margin-right: 17px;
   }
  #program, #married {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
   }
   #wife, #married1 {
     font-size: 12px;
     font-weight: bold;
     width: 200px;
   }
   
   #wife{
  padding-top: 70px;
   }
  #married1 {
    padding-top: 180px;
  }
  
   #year9, #year10{
    padding-right: 190px;
    margin-right: 2px;
    padding-left: 50px;
 }
 
 .img-mexico {
  width: 290px;
  margin-left: 20px;
  padding-top: 10px;
 
  

 }
.img-norman{
  width: 270px;

  
  
}


      }
   @media screen and (max-width: 480px) {
    #program, #married {
      display: none;
    }
   #wife, #married1{
     font-size: 12px;
     font-weight: bold;
     width: 175px;
   }
   
   #married1 {
     margin-bottom: 60px;
   }
   
   #year9, #year10 {
    padding-right: 90px;
    margin-right: 2px;
    padding-left: 30px;
 }
 .img-mexico {
  width: 200px;
  margin-right: auto;
  margin-left: -32px;
 }
.img-norman {
  width: 170px;
  margin-right: 7px;  
}
.arrow {
  visibility: hidden;
}
  
   }
`
  export default SectionFour;