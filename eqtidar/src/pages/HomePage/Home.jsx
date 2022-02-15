import React from 'react';
import '../../App.css';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
    <div className='firstp'>
    <div className='hero-image' ></div>
    <h1 className='hero-text font-face-gm'>ابحث عن عقارك<br></br>المفضل في العراق</h1>
</div>
    <div className='offer'>
    <div className='offer-img1'></div>
    <div className='offer-text'>
    <h1 className='offer-title'>تقييم عقاري</h1>
    <p className='offer-pargraph'>هي خدمة مجانية نقدمها لزبائننا يقوم الزبون بارسال صور للعقار مع بعض المعلومات كالعنوان والمساحة وسوف تقوم الشركة باجراء تقييم عقاري علمي يستند على اسس اقتصادية صحيحة</p>
    <Link to='/appraisal'>
    <button className='btn1'>للمزيد</button>
    </Link>
    </div>
</div>

    <div className='services'>
    <h1 className='services-title1'>الخدمات التي نقدمها</h1>
    <div className='card-container'>    
    <div className='card-services'>
      <h1 className='card-title'>بيع</h1>
      <p className='description-card1'>يمكنك عرض عقارك للبيع عن طريق موقعنا من خلال تزويدنا ببعض الصور والتفاصيل.</p>
      <Link to='/sell'>
    <button className='btn-card1'>للمزيد</button>
    </Link>
    </div>
    <div className='card-services'>
      <h1 className='card-title'>شراء</h1>
      <p className='description-card1'>يتوفر العديد من العقارات المعروضة يمكنك الاختيار وشراء العروض التي تناسبك.</p>
      <Link to='/realestate/buy'>
    <button className='btn-card1'>للمزيد</button>
    </Link>
    </div>
    <div className='card-services'>
      <h1 className='card-title'>ايجار</h1>
      <p className='description-card1'>يتيح لك موقعنا العديد من العقارات المعروضة للايجار يمكنك الاختيار العروض التي تناسبك.</p>
      <Link to='/realesatate/rent'>
    <button className='btn-card1'>للمزيد</button>
    </Link>
    </div></div>

      
    </div>
    <div className='offer2'>
    <div className='offer-img2'></div>
    <div className='offer-text'>
    <h1 className='offer-title'>ادارة الاملاك</h1>
    <p className='offer-pargraph'>هي خدمة تقدمها شركتنا لاصحاب البنايات و للمشاريع المؤجرة او القابلة للايجار من ناحية استاجارها و ادارة امورها المالية و القانونية</p>
    <Link to='/management'>
    <button className='btn1'>للمزيد</button>
    </Link>
    </div>
</div>
</div>
  );
}

export default Home;
