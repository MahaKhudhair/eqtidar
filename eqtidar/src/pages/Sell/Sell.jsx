import React, { useState , useEffect} from 'react';
import validate from './validateSell';
import "./appraisal.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MapPicker from "react-google-map-picker";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import axios from '../../utils/axios';
import { authHeader } from '../../hooks/authHeader';
import { TOKEN_KEY } from '../../utils/Constants';
import AuthContext from "../../contexts/authcontext";
import useAuth from '../../hooks/useAuth';
import { useNavigate} from "react-router-dom";


  const Sell = () => {

    const navigate = useNavigate();
    const {isAuth} = useAuth()
  const [values, setValues] = useState({
    location: '',
    category_name:'',
    map_lng:0,
    map_lat:0,
    size:0,
    room:0,
    bathroom:0,
    kitchen:'',
    status:'',
    description:'',
    price:'',
  });
  const [image , setImage] = useState()
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const changeHandler = (e) =>{
    setImage(e.target.files[0])
  }
  console.log(values)
  const formData = new FormData()
  formData.append('price' , values.price)
  formData.append('size' , values.size)
  formData.append('description' , values.description)
  formData.append('location' , values.location)
  formData.append('map_lng' , values.map_lng)
  formData.append('map_lat' , values.map_lat)
  formData.append('room' , values.room)
  formData.append('bathroom' , values.bathroom)
  formData.append('kitchen' , values.kitchen)
  formData.append('category_name' , values.category_name)
  formData.append('status' , values.status)
  formData.append('imgs' ,image)
  let token =localStorage.getItem(TOKEN_KEY)
  const config = {
    headers:{'Authorization': `Basic ${token}`,'content-type':'multipart/form-data'}
  }
  console.log(formData)
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));

    if(!isAuth){
      navigate('/login')
    }
    if (Object.keys(errors).length === 0){
      axios.post('/api/realestate/sell',formData , config)
      .then((response)=>{
        console.log('success')
      })
      .catch((err)=>{
          
      })
    }
    else{
      return errors
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DefaultLocation = { lat: 33.32, lng: 44.35 };
  const DefaultZoom = 16;

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }
  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container_appraisal">
      <div className="row">
        <div className="text_appraisal col-xs-12 col-md-12 col-lg-3  px-3">
          <h3>??????????</h3>
          <p>
            ???? ???????? ???????????? ???????????? ???????????????? ???????? ???????????? ???????????? ?????? ???????????? ???? ??????
            ?????????????????? ???????????????? ???????????????? ???????? ???????? ???????????? ???????????? ??????????
            ?????????? ?????? ?????? ???????????????? ??????????
          </p>
          <p>?????? ???????? ???? ???????? ?????????????? ?????????????? ??????????????????.</p>
        </div>
        <div className="form_appraisal  col-xs-12 col-sm-12 col-md-12 col-lg-8  px-3">
          <Form className="form_appraisal" onSubmit={handleSubmit}>


            <Form.Label>???????????? ????????????</Form.Label>

            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Control
                type="text"
                name="adress"
                placeholder="??????????????"
                className="input-box"
                value={values.location}
              onChange={handleChange}
              />
              {errors.location && <p>{errors.location}</p>}
            </Form.Group>
            <div className="row">
              <Form.Group className="col mx-1 ">
                <Button

                  className="input-box appraisal_btn "
                  style={{ width: '100%' }}
                  name="location"
                  onClick={handleShow}
                  onChange={handleChange}

                >
                  ?????????? ?????? ??????????????{" "}
                </Button>

              </Form.Group>


              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="lat"
                  value={values.map_lat}
                  name="map_lat"
                  className="input-box"
                  onChange={handleChange}
                />

              </Form.Group>
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="lng"
                  value={values.map_lng}
                  name="map_lng"
                  className="input-box"
                  onChange={handleChange}
                />

              </Form.Group>
            </div>
            <br />

            <div className="row">
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  value={values.size}
                  name="size"
                  placeholder="?????????????? ????????????"
                  className="input-box"
                  onChange={handleChange}
                />
                {errors.size && <p>{errors.size}</p>}
              </Form.Group>


              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="?????? ??????????????"
                  name="kitchen"
                  className="input-box"
                  onChange={handleChange}
                />
                {errors.kitchen && <p>{errors.kitchen}</p>}
              </Form.Group>

              </div>
              <br />



              <div className='row'>
              <Form.Group className="col mx-1" >
              <Form.Select aria-label="Default select example" className='select' value={values.category_name}>
 
                  <option value={values.category_name}>????????</option>
                 <option value={values.category_name}>??????</option>
                 
              </Form.Select>
              </Form.Group>

              <Form.Group className="col mx-1">
              <Form.Select aria-label="Default select example" className='select' value={values.status}>
 
                  <option value={values.status}>??????</option>
                 <option value={values.status}>??????????</option>
                 
              </Form.Select>
              </Form.Group>


              </div>
              <br/>
              
           
           
            <div className="row">
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="room"
                  placeholder="?????? ??????????"
                  className="input-box"
                />
                {errors.room && <p>{errors.room}</p>}
              </Form.Group>
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  placeholder="?????? ??????????????"
                  name="bathroom"
                  className="input-box"
                />
                {errors.bathroom && <p>{errors.bathroom}</p>}
              </Form.Group>
              <Form.Group className="col mx-1">
                <Form.Control
                  type="file"
                  placeholder=""
                  className="input-box appraisal_btn"
                  id="image_appraisal"
                  name="image_appraisal"
                  accept="image/png, image/jpeg"
                  onChange={changeHandler}
                />
                {errors.imgs && <p>{errors.imgs}</p>}
              </Form.Group>
            </div>
            <br />
            <Form.Group>
              <textarea
                className="form-control"
                id="details_appraisal"
                placeholder="???????????? ????????"
                rows="3"
                onChange={handleChange}
                value={values.description}
              ></textarea>
              {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
            </Form.Group>

              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Control
                type="text"
                name="value"
                placeholder="??????????"
                className="input-box"
                value={values.price}
              onChange={handleChange}
              />
              {errors.price && <p>{errors.price}</p>}
            </Form.Group>
              {/* <Form.Control
                type="tel"
                className="input-box"
                placeholder="?????? ????????????"
                onChange={handleChange}
                name="phone"
              />
              {errors.phone && <p>{errors.phone}</p>}
            </Form.Group> */}
            <Button type="submit" className="input-box appraisal_btn btn_send">
              ??????????
            </Button>

            {/* <> */}

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                {/* <Modal.Title>Modal title</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                <>
                  <button onClick={handleResetLocation}>Reset Location</button>
                  <label>Latitute:</label>
                  <input type="text" value={values.lat} disabled />
                  <label>Longitute:</label>
                  <input type="text" value={values.map_lng} disabled />
                  <label>Zoom:</label>
                  <input type="text" value={zoom} disabled />

                  <MapPicker
                    defaultLocation={defaultLocation}
                    zoom={zoom}
                    mapTypeId="roadmap"
                    style={{ height: "500px" }}
                    onChangeLocation={handleChangeLocation}
                    onChangeZoom={handleChangeZoom}
                    apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
                  />
                </>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            {/* </> */}
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Sell;
