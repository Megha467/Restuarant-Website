import react from 'react';
import '../styles/Experiance.css';
function Experiance( ) {
    return (
        <div>
             {/* <h1 style={{color:'#65350F'}} >The Wow Experiance</h1> */}
             <div class="container mt-5"  >
            <div class="row">
            <div class="row justify-content-md-center">
            <div class="clipvid col-6">
            <video className='clippedvid video-js vjs-default-skin' preload = "auto" autoPlay  muted  loop >
           <source src =  "./restuarant.mp4" type = "video/mp4"  />     
            </video> 
           </div>
            <div class="col-5 offset-1" >
            <h1 style={{color:'#65350F'}} >The Wow Experiance</h1>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l
           abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum.
           </div>
           </div>
        </div>
        </div>
            
        </div>
    )
}
export default Experiance;