import React from "react"
import './HomePage.css';
import section_02_img from '../assets/img/img02.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'

export default function HomePage(){

    return (
        <div className="home_container">
        <div class="header_home " > 
        <div class="inside_header text-white" >
        
          <h2 class="py-4">
            ابحث عن عقارك المفضل في العراق
          </h2>
        <a href="#" className="btn btn-primary px-4">ابحث</a>
        </div>
      </div>
<div className="section_02 ">
<img src={section_02_img} alt="image" />
<div class="inside_section_02 text-#00313c flex-column  p-5 m-5" >
        <h2 className="py-2">
         تقييم عقاري
        </h2>
        <p className="py-2">هي خدمة مجانية نقدمها لزبائننا يقوم الزبون بارسال صور للعقار مع بعض المعلومات كالعنوان والمساحة وسوف تقوم الشركة باجراء
         تقييم عقاري علمي يستند على اسس اقتصادية صحيحة</p>
      <a href="#" className="btn btn-primary px-4 py-2">ابحث</a>
      </div>
</div>
<CardGroup className="p-5 text-center">
  <Card className="card_home m-5">
    <Card.Body >
      <Card.Title>بيع</Card.Title>
      <Card.Text>
       يمكنك عرض عقارك للبيع عن طريق موقعنا وذلك بتزويدنا ببعض الصور والتفاصيل
      </Card.Text>
    </Card.Body>
    <Button className="btn_card" >للمزيد</Button>
  </Card>
  <Card className="card_home m-5">
     <Card.Body>
      <Card.Title>شراء</Card.Title>
      <Card.Text>
        تتوفر العديد من العقارات 
        المعروضة يمكنك الاختيار وشراء العقار الذي تناسبك
      </Card.Text>
    </Card.Body>
    <Button className="btn_card" >للمزيد</Button>
  </Card>
  <Card className="card_home m-5">
       <Card.Body>
      <Card.Title >ايجار</Card.Title>
      <Card.Text>
       يتيح لك موقعنا العديد من العقارات المعروضة للايجار يمكنك اختيار العروض التي تناسبك
      </Card.Text>
    </Card.Body>
    <Button className="btn_card" >للمزيد</Button>
  </Card>
</CardGroup>



      </div>



    )

}
