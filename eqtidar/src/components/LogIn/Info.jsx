import React from "react"
import './index.css';
import { Button } from 'react-bootstrap';
import image from "./images.png";


const Info=()=>{
    return (
        <div className="body">
        <section className="form my-4 mx-5">
            <div className="continer">
                <div className="info">
                <div className="row no-gutters" >
                    <div className="col-lg-5 coco"  >
                     <img src={image}  alt="Flowers in Chania" /> 
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold py-3" >تسجيل دخول |  انشاء حساب</h1>
                        
                        <form>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="email" placeholder="رقم الهاتف" className="form-control my-2 p-3 " />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="password" placeholder="********" className="form-control  my-2 p-3"/>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="button " className="btn1 mt-3 mb-5">تسجيل دخول</button>
                                </div>
                            </div>
                            
                            <a href="#" className="forget mt-3 mb-5">هل نسيت كلمة السر</a>
                            {/* <p>dont have account <a href="#">tap hrer</a></p> */}
                        </form>
                    </div>
                </div>
                </div>

            </div>
        </section>  
        </div>  
    )
};
export default Info;