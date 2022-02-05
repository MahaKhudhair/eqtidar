import React from "react";
import "./footer.css";
import logo_img from "../../assets/logo/logo_light.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-right text-lg-end color pt-3">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <div className="footer_logo">.</div>

            <ul className="list-unstyled p-0">
              <li>
                <a href="#!" className="a">
                  بيع / شراء عقارات
                </a>
              </li>
              <li>
                <a href="#!" className="a">
                  مناطق سكنية وتجارية
                </a>
              </li>
              <li>
                <a href="#!" className="a ">
                  خدمات واستشارات
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-xs-12 links">
            <h5 class="a mt-lg-0 mt-sm-3 pb-3">روابط سريعة</h5>

            <ul class="list-unstyled mb-0 p-0">
              <li>
                <a href="#!" className="a">
                  عقارات للبيع والشراء
                </a>
              </li>
              <li>
                <a href="#!" className="a">
                  ادارة الاملاك
                </a>
              </li>
              <li>
                <a href="#!" className="a">
                  تقييم عقاري
                </a>
              </li>
              <li>
                <a href="#!" className="a">
                  من نحن
                </a>
              </li>
            </ul>
            <div class="vr"></div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <h5 className="a mt-lg-0 mt-sm-4 pb-3">اتصل بنا</h5>

            <ul className="list-unstyled p-0 ">
              <li>
                <a href="#!" className="a">
                  +96478652788
                </a>
              </li>
              <li>
                <a href="#!" className="a">
                  {" "}
                  +96478652787
                </a>
              </li>
              <li>
                <a href="#!" className="a">
                  support@eqtidar.com
                </a>
              </li>
            </ul>
          </div>
          <hr />

          <hr className="my-3 a" />

          <section className="p-3 pt-0 text-white">
            <div className="row d-flex align-items-center">
              <div className="text-white col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2022 Copyright:
                  <a className="text-white" href="#1">
                    Eqtidar.com
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0  text-md-start">
                <a href="#1" className="a mx-1">
                  {" "}
                  <FaSkype />
                </a>
                <a href="#1" className="a mx-1">
                  {" "}
                  <FaFacebookSquare />
                </a>
                <a href="#1" className="a mx-1">
                  {" "}
                  <FaFacebookMessenger />
                </a>
                <a href="#1" className="a ml-1">
                  {" "}
                  <FaViber />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
