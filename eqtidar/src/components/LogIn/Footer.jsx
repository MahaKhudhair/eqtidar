import React from "react"
import './index.css';
import { Button } from 'react-bootstrap';

const Footer=()=>{
    return (
        <footer class=" text-white text-center text-lg-start " className="color">
 
  <div class="container p-4">
  
    <div class="row">
   
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-white">اتصل بنا</h5>

        <ul class="list-unstyled" >
          <li>
            <a  href="#!" class="text-white" className="a" >+964072455555</a>
          </li>
          <li>
            <a  href="#!" class="text-white" className="a">+964072455555</a>
          </li>
          <li>
            <a  href="#!" class="text-white" className="a">eqtidar@exampil.com</a>
          </li>

        </ul>
      </div>
    

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-white">روابط سريعه</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-white" className="a">عقارات للبيع والشراء</a>
          </li>
          <li>
            <a href="#!" class="text-white" className="a">ادارة الاملاك</a>
          </li>
          <li>
            <a href="#!" class="text-white" className="a">تقييم عقاري</a>
          </li>
          <li>
            <a href="#!" class="text-white" className="a">من نحن</a>
          </li>
        </ul>
        <div class="vr" ></div>
        
      </div>
      
     
 
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-white mb-0">الخدمات</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-white" className="a">بيع\شراء عقارات</a>
          </li>
          <li>
            <a href="#!" class="text-white" className="a"> مناطق سكنيه وتجاريه</a>
          </li>
          <li>
            <a href="#!" class="text-white" className="a">خدمات واستشارات</a>
          </li>

        </ul>
      </div>
      <hr/>
  
  </div> 



  </div>
</footer>

    )
};

export default Footer;