import React ,{useEffect , useState} from 'react';
import './Realestate.css' ;
import axios from '../../utils/axios'
const Realestate = () => {
    const [data, setData] = useState({
		posts: [],
	});
	useEffect(() => {
		axios.get('api/realestate').then((res) => {
			setData({
				posts: res.data,
			});
			console.log(res.data);
		});
	}, [setData]);


    const listRealestates = data.posts.map((item)=>
        <div className='realestate-card'>
            <div className='card-img-container'>
                </div>
                <div className='card-details'>
                    <h1 className='card-status'>معروض {item.status}</h1>
                    <h2 className='card-category'>{item.category.category_name}</h2>
                    <p className='card-text'>السعر : {item.price} <br/> الموقع :   {item.location} <br/> المساحة : {item.size} متر</p>
                    <button className='realestate-card-btn'>للمزيد</button>
                    </div>      
        </div>
        )
    return (<div className='realestate-container'>
        {listRealestates}
    </div>
    );
}

export default Realestate;