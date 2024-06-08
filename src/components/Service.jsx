import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Service(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Card className="m-md-4 shadow p-md-3  w-md-100 shadow crd mt-5" onClick={handleShow}>
                <Card.Img variant="top" src={props.cardUrl} height={"250px"} />
                <Card.Body>
                  <Card.Title className='text-center'><h4 style={{color:'#77B0AA'}}>{props.name}</h4></Card.Title>
                </Card.Body>
              </Card>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title style={{color:'#164863'}}>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col sm={12} md={6} >
                      <img className='w-100' src={props.modalUrl} alt=""  />
                    </Col>
                    <Col sm={12} md={6}>
                    <p>{props.content}</p>
                    <Link to={'/treatment/doctor/:treatmentName'}><button className='btn btn-rounded btn-success'>Visit</button></Link>
                    </Col>
                  </Row>
            
                </Modal.Body>
              </Modal>
    </>
  )
}

export default Service