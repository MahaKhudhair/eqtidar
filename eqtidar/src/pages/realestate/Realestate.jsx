import React ,{useEffect , useState} from 'react';
import './Realestate.css' ;
import axios from '../../utils/axios'
import { Link } from 'react-router-dom';
const Realestate = () => {
    const [data, setData] = useState({
		posts: [],
	});
    
	useEffect(() => {
		axios.get('api/realestate').then((res) => {
			setData({
				posts: res.data,
			});
		});
	}, [setData]);


    const listRealestates = data.posts.map((item)=>
        <div className='realestate-card'>
            <div className='card-img-container' style={{background:`linear-gradient(to bottom, rgba(14, 14, 14, 0), rgb(0,49,60)) , url(https://ameernas.pythonanywhere.com${item.images[0].image}) no-repeat center center`,backgroundSize:`cover`}}>
                </div>
                <div className='card-details'>
                    <h1 className='card-status'>معروض {item.status}</h1>
                    <h2 className='card-category'>{item.category.category_name}</h2>
                    <p className='card-text'>السعر : {item.price} <br/> الموقع :   {item.location} <br/> المساحة : {item.size} متر</p>
                    <Link to='/details'><button className='realestate-card-btn'>للمزيد</button></Link>
                    </div>      
        </div>
        )
    return (<div className='realestate-container'>
        {listRealestates}
    </div>
    );
}

export default Realestate;