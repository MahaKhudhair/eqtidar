import React from 'react';
import './Realestate.css' ;
const Realestate = () => {
    const content = [
        {
        "id": "3cc8e280-72e2-41c1-8400-a251eaa6ad87",
        "category": {
            "id": "faa68625-9025-4878-9418-cf22fdabc7f5",
            "name": "منزل"
        },
        "status": "للبيع",
        "description": "",
        "size": 2,
        "location": "المنصور",
        "map_location": "https://www.google.com/maps",
        "image":"../assets/img/1.jpg",
        "room": 2,
        "bathroom": 2,
        "kitchen": 2,
        "price": "200 مليون دينار"
        },
        {
        "id": "be459cff-4889-4459-a2e5-6fbcfd34b635",
        "category": {
            "id": "faa68625-9025-4878-9418-cf22fdabc7f5",
            "name": "منزل"
        },
        "status": "للبيع",
        "description": "",
        "size": 200,
        "location": "البلديات",
        "map_location": "https://www.google.com/maps",
        "image":"../assets/img/2.jpg",
        "room": 2,
        "bathroom": 2,
        "kitchen": 2,
        "price": "200 مليون دينار"
        },
        {
            "id": "3cc8e280-72e2-41c1-8400-a251eaa6ad87",
            "category": {
                "id": "faa68625-9025-4878-9418-cf22fdabc7f5",
                "name": "منزل"
            },
            "status": "للبيع",
            "description": "",
            "size": 2,
            "location": "المنصور",
            "map_location": "https://www.google.com/maps",
            "image":"../assets/img/1.jpg",
            "room": 2,
            "bathroom": 2,
            "kitchen": 2,
            "price": "200 مليون دينار"
            },
            {
                "id": "3cc8e280-72e2-41c1-8400-a251eaa6ad87",
                "category": {
                    "id": "faa68625-9025-4878-9418-cf22fdabc7f5",
                    "name": "منزل"
                },
                "status": "للبيع",
                "description": "",
                "size": 2,
                "location": "المنصور",
                "map_location": "https://www.google.com/maps",
                "image":"../assets/img/1.jpg",
                "room": 2,
                "bathroom": 2,
                "kitchen": 2,
                "price": "200 مليون دينار"
                },
                {
                    "id": "3cc8e280-72e2-41c1-8400-a251eaa6ad87",
                    "category": {
                        "id": "faa68625-9025-4878-9418-cf22fdabc7f5",
                        "name": "منزل"
                    },
                    "status": "للبيع",
                    "description": "",
                    "size": 2,
                    "location": "المنصور",
                    "map_location": "https://www.google.com/maps",
                    "image":"../assets/img/1.jpg",
                    "room": 2,
                    "bathroom": 2,
                    "kitchen": 2,
                    "price": "200 مليون دينار"
                    },
                    {
                        "id": "3cc8e280-72e2-41c1-8400-a251eaa6ad87",
                        "category": {
                            "id": "faa68625-9025-4878-9418-cf22fdabc7f5",
                            "name": "منزل"
                        },
                        "status": "للبيع",
                        "description": "",
                        "size": 2,
                        "location": "المنصور",
                        "map_location": "https://www.google.com/maps",
                        "image":"../assets/img/1.jpg",
                        "room": 2,
                        "bathroom": 2,
                        "kitchen": 2,
                        "price": "200 مليون دينار"
                        },
    ]


    const listRealestates = content.map((item)=>
        <div className='realestate-card'>
            <div className='card-img-container'>
                {/* <img src={item.image} className='card-img'></img> */}
                </div>
                <div className='card-details'>
                    <h1 className='card-status'>معروض {item.status}</h1>
                    <h2 className='card-category'>{item.category.name}</h2>
                    <p className='card-text'>السعر : {item.price} <br/> الموقع :   {item.location} <br/> المساحة : {item.size} متر</p>
                    <button className='realestate-card-btn'>للمزيد</button>
                    </div>
        </div>)
    return (<div className='realestate-container'>
        {listRealestates}
    </div>
    );
}

export default Realestate;