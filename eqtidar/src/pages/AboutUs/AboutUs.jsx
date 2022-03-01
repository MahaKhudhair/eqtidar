import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import pattern from "../../assets/img/pattern01.png";
import Image from "react-bootstrap/Image";
import img01 from "../../assets/img/details03.jpg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="container-aboutus">
      <Row>
        <Col xs={12} md={8} lg={6}>
          <h3 className="pb-3">عن شركتنا</h3>

          <div className="pb-4">
            <p>قبل الشراء</p>
            <p> مساعدة بأختيار مكان الاقامة</p>
            <p> استشارات عقارية متخصصة</p>
            <p> جولات عقارية على امتداد بغداد</p>
            <p> الكرخ والرصافة</p>
          </div>
          <div>
            <p> عند الشراء</p>
            <p> لدينا فرق متخصص في متابعة اجراءات:</p>
          </div>

          <div>
            <p> سند التمليك (الطابو)</p>
            <p> استلام العقار والتحقق من مطابقته للعقد</p>
            <p> استخراج الاقامة العقارية</p>
            <p> فتح حساب بنكي</p>
            <p> تجهيز العقار وملحقاته للاستخدام</p>
            <p> الديكور,الفرش ,الماء والغاز والكهرباء</p>
            <p>
              {" "}
              ادارة شؤون العقار: تأجيره ,اعادة بيعه حسب الرغبه ,متابعه الضرائب
              والرسوم والفواتير الخاصة بالعقار
            </p>
          </div>
        </Col>
        <Col className="about-bg" fluid xs={12} md={4} lg={6}>
          <Image src={img01} fluid className="about-img" />
        </Col>
      </Row>
    </div>
  );
};
export default AboutUs;
