import React, { useState } from 'react';
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

const Appraisal= ()=>{
  const [values, setValues] = useState({
    adress: '',
    location:'',
    area:'',
    width:'',
    home:'',
    room:'',
    bath:'',
    imge:'',
    phone: '',
  
  });
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
  };

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

  return (
    <div className="container_appraisal">
      <div className="row">
        <div className="text_appraisal col-xs-12 col-md-12 col-lg-3  px-3">
          <h3>تقييم عقاري</h3>
          <p>
            هي خدمة مجانية نقدمها لزبائننا يقوم الزبون بارسال صور للعقار مع بعض
            المعلومات كالعنوان والمساحة وسوف تقوم الشركة باجراء تقييم عقاري
            يستند على اسس اقتصادية صحيحة
          </p>
          <p>يتم الرد عن طريق تطبيقات التواصل الاجتماعي.</p>
        </div>
        <div className="form_appraisal  col-xs-12 col-sm-12 col-md-12 col-lg-8  px-3">
          <Form className="form_appraisal" onSubmit={handleSubmit}>
          

            <Form.Label>تفاصيل العقار</Form.Label>

            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Control
                type="text"
                name="adress"
                placeholder="العنوان"
                className="input-box"
                value={values.adress}
            onChange={handleChange}
              />
              {errors.adress && <p>{errors.adress}</p>}
            </Form.Group>
            <div className="row">
              <Form.Group className="col mx-1 ">
                <Button
               
                  className="input-box appraisal_btn "
                  style= {{width:'100%'}}
                  value={location.lng}
                  name="location"
                  onClick={handleShow}
                  onChange={handleChange}
                  
                >
                  تعيين على الخارطة{" "}
                </Button>
                
              </Form.Group>


              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="lat"
                  value={location.lat}
                  name="location"
                  className="input-box"
                  onChange={handleChange}
                />
               
              </Form.Group>
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="lng"
                  value={location.lng}
                  name="location"
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
                  value={values.area}
                  name="area"
                  placeholder="المساحة الكلية"
                  className="input-box"
                  onChange={handleChange}
                />
                {errors.area && <p>{errors.area}</p>}
              </Form.Group>


              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="عرض الواجهة"
                  name="width"
                  className="input-box"
                  onChange={handleChange}
                />
                {errors.width && <p>{errors.width}</p>}
              </Form.Group>

              <Form.Group className="col mx-1" >
              <Form.Select aria-label="Default select example" className='select'>
 
                  <option value="home">منزل</option>
                 <option value="flat">شقه</option>
                 
              </Form.Select>
              </Form.Group>
              {/* <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  placeholder="النزال"
                  className="input-box"
                />
                {errors.home && <p>{errors.home}</p>}
              </Form.Group> */}
            </div>
            <br />

            <div className="row">
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  name="room"
                  placeholder="عدد الغرف"
                  className="input-box"
                />
                {errors.room && <p>{errors.room}</p>}
              </Form.Group>
              <Form.Group className="col mx-1">
                <Form.Control
                  type="number"
                  onChange={handleChange}
                  placeholder="عدد المرافق"
                  name="bath"
                  className="input-box"
                />
                {errors.bath && <p>{errors.bath}</p>}
              </Form.Group>
              <Form.Group className="col mx-1">
                <Form.Control
                  type="file"
                  placeholder=""
                  className="input-box appraisal_btn"
                  id="image_appraisal"
                  name="image_appraisal"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                  name="imge"
                />
                {errors.imge && <p>{errors.imge}</p>}
              </Form.Group>
            </div>
            <br />
            <Form.Group>
              <textarea
                className="form-control"
                id="details_appraisal"
                placeholder="تفاصيل اخرى"
                rows="3"
                onChange={handleChange}
              ></textarea>
              {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <br />
              <Form.Label>معلومات الزبون</Form.Label>
              <Form.Control
                type="tel"
                className="input-box"
                placeholder="رقم الهاتف"
                onChange={handleChange}
                name="phone"
              />
              {errors.phone && <p>{errors.phone}</p>}
            </Form.Group>
            <Button type="submit" className="input-box appraisal_btn btn_send">
              ارسال
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
                  <input type="text" value={location.lat} disabled />
                  <label>Longitute:</label>
                  <input type="text" value={location.lng} disabled />
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
export default Appraisal;
