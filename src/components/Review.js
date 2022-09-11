import React from 'react';
import '../styles/Review.css';
function Review  ({src, comment}) {
return (<div> 
    <div class="container  "  >
         
            <div class="row justify-content-md-center">
            <div class="col-2">
           <img src={src} className="clientImage" alt="logo" />
           </div>
            <div class="col-8 offset-1 comment" >
           
           {comment}
           </div>
           </div>
        </div>
        
   </div>) 
}
export default Review;