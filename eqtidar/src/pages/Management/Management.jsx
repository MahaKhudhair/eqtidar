import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img001 from "../../assets/img/details05.jpg";
import img002 from "../../assets/img/details02.jpg";
import "./Management.css";
function Management() {
  return (
    <div className="container-management">
      <Row>
        <Col xs={12} md={8} lg={6}>
          <div className="management-text">
            <p>
              " لكم جميعاً … ستكون شركتنا بالقرب من عقاراتكم ، ستكون عائداتكم في
              آمان دائم ..سنقدم لكم المتطلبات القانونية في إدارة أملاككم و
              الصيانة الفنية للوصول لافضل النتائج في إستثماراتكم العقارية" نبدأ
              معكم الرحلة الأستثمارية في إدارة املاككم من قناعتكم الاولى في
              شرائكم للعقار ، حتى إستلامكم لعائداتكم الاستثمارية نحن في إقتدار
              ستكون إستثمارتكم العقارية بالقرب من تطلعاتكم و في أحسن الصور و
              أفضل العائدات .
            </p>
          </div>
          <div></div>
        </Col>
        <Col xs={10} md={4} lg={6}>
          <Image src={img001} fluid className="management-img mx-5" />
        </Col>
      </Row>
      <br />
      <br /> <br />
      <br />
      <Row>
        <Col xs={10} md={4} lg={6}>
          <Image src={img002} fluid className="management-img mx-5" />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <div className="management-text">
            <ul>
              <li>المباني التجارية</li>
              <li> المباني السكنية</li>
              <li>الفلل الفاخرة</li>
              <li>المحلات التجارية الفاخرة</li>
              <li>مخازن أمينة</li>
              <li>مساحات عمل مفتوحة</li>
              <li>الإيجارات الثانوية</li>
            </ul>
          </div>
          <div></div>
        </Col>
      </Row>
    </div>
  );
}
export default Management;
