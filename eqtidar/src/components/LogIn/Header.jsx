import React from "react"
import './index.css';
import { Button } from 'react-bootstrap';
import {ReactComponent as logo} from "./logo.svg"

const Header = props => {
    return (
        <div class='header'>
            {/* <div class='header-left'>
               <Button class='login'>تسجيل دخول</Button>
                <Button class='creatacc'>انشاء حساب</Button>

            </div>

            <div class='middel'>
                <Button class='first'>تقييم عقاري</Button>
                <Button class='second'>عقارات</Button>
                <Button class='thierd'>ادارة العقارات</Button>
                <Button class='furth'>من نحن</Button>
            </div>

            <div class='header-right'>
                <Button class='logo'>logo</Button>
            </div> */}
             <div className="left-side" >
             <Button className="left-side-button-one">تسجيل دخول</Button>
             <Button className="left-side-button-two">تسجيل دخول</Button>

            </div>

            <div>
            
                <Button className="center-one" >من نحن</Button>
                <Button className="center-one" >من نحن</Button>
                <Button className="center-one" >من نحن</Button>
                <Button className="center-one" >من نحن</Button>
            </div>

            <div >
                <logo/>
            </div>





        </div>
    )

};

export default Header;