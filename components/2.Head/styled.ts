import styled from '@emotion/styled'

const Head = styled.section`
background-color: #ffffff;
margin-left: 75px;

    .info1 {
        float: right;
        max-width: 300px;
        padding-top: 40px;
    }
    #text {
      font-size: 24px;
    }
       .years {
        color: #3A548A;
        font-size: 34px;
        font-weight: bold;
      }
#img-caption {
  text-align: justify;
  max-width: 500px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 20px;
}
#img-div {
  width: 560px;
  margin: 0 auto;
}
#image {
  display: block;
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.25);
}

/**Media QUerry */

@media screen and (max-width: 1112px) {
.page1 {
  border-bottom: 60px solid #3A4A69;
}

.info1 {
  float: left;
  margin-left: -54px;
  }
 #text {
   font-size: 14px;
   font-weight: bold;
    
 }

 .img {
   width: 370px;
   margin-left: -60px
 }
 #img-caption {
   width: 360px;
   font-size: 14px;
   font-weight: bold;
   margin-left: -50px;;
 }
}

@media screen and (max-width: 480px) {
  .info1 {
  float: left;
  margin-left: -54px;
  
  }
 #text {
   font-size: 14px;
   font-weight: bold;
    
 }

 .img {
   width: 370px;
   margin-left: -60px
 }
 #img-caption {
   width: 360px;
   font-size: 14px;
   font-weight: bold;
   margin-left: -50px;;
 }
 }



`

export default Head;
  