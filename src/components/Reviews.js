import React from 'react';
import Review from './Review';
import Carousel from 'react-bootstrap/Carousel'

function Reviews () {
return (
    <>
    
  
 <div class='container-fluid' >  
                      <div class="row mt-5">
                         <h1 style={{color:'#65350F'}} >Reviews Of Our Clients</h1>
                        </div >     
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"300px"}} >  
                         <Review src="./client1.jpg" comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l
           abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
           voluptate velit esse cillum dolore" />                           
           <Carousel.Caption>  
                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"300px"}}>  
                                 <Review src="./client3.jpg" comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l
           abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
           voluptate velit esse cillum dolore" /> 
                                       <Carousel.Caption>  
                                   <h3>Second Demo</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"300px"}}>  
                                       <Review src="./client2.jpg" comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l
           abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
           voluptate velit esse cillum dolore" />
                                        <Carousel.Caption>  
                                          <h3>Third Demo</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  

 
    </>
)
  
}
export default Reviews;