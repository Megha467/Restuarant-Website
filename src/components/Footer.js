import react from 'react';
import "../styles/Footer.css";
function Footer( ) {
    return (
        <div className="backgroundFooter">
           <h1 className='text-white'> We always love to hear from our People  </h1>
   <div class="row">
     <div class="col-4 offset-2">
     <img src="./footerlogo.jpg" className="footerLogo" alt="logo" />
     </div>

     <div class="col-5">
     <div class="col-4 bg-white offset-1">
       
       <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
     </div>
     <br />
      
     <div class="col-4 bg-white offset-1">
       <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="comment" />
     </div>
     <br/>
     <div class="col-4   offset-1">
     <button type="submit" class="btn btn-light mb-2">Submit</button>
     </div>
     </div>
   </div>
    
  </div>
            
  
    )
}
export default Footer;