import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { profileApi, getprofileApi, updateProfile } from '../services/callApi';

function AddProfile({ setUploadProfile }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: ''
  });
  const userEmail = sessionStorage.getItem('userEmail'); // Retrieve userEmail from sessionStorage
  const [profiles, setProfiles] = useState([]);
  const [isProfileAdded, setIsProfileAdded] = useState(false);
  const [updateId, setUpdateId] = useState(null); 

  useEffect(() => {
    const profileAdded = localStorage.getItem('isProfileAdded');
    if (profileAdded) {
      setIsProfileAdded(true);
    }
    fetchProfiles();
  }, []);

  const handleClose = () => {
    setShow(false);
    setUpdateId(null); // Reset updateId when modal is closed
  };

  const handleShow = () => {
    // Check if user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      setShow(true);
    } else {
      // Redirect to login page with a message
      alert('Please login to create a profile');
      window.location.href = '/login';
    }
  };

  const fetchProfiles = async () => {
    try {
      const response = await getprofileApi();
      if (response.status >= 200 && response.status < 300) {
        const userProfiles = response.data.filter(profile => profile.userEmail === userEmail);
        setProfiles(userProfiles);
      } else {
        alert('Something went wrong while fetching profiles');
      }
    } catch (error) {
      alert('Something went wrong while fetching profiles');
    }
  };

  const handleUpload = async () => {
    const { name, email, phoneNumber, gender } = formData;
    if (!name || !email || !phoneNumber || !gender) {
      alert('Please fill the form completely');
    } else {
      try {
        const response = await profileApi({ ...formData, userEmail });
        if (response.status >= 200 && response.status < 300) {
          alert('Profile created successfully');
          setUploadProfile(response.data);
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            gender: ''
          });
          setIsProfileAdded(true);
          localStorage.setItem('isProfileAdded', 'true');
          handleClose();
          fetchProfiles(); // Refresh profiles after adding a new one
        } else {
          alert('Something went wrong');
        }
      } catch (error) {
        console.error('Error creating profile:', error);
        alert('Something went wrong');
      }
    }
  };

  const handleUpdate = (id, profile) => {
    setFormData(profile); 
    setUpdateId(id); 
    handleShow(); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId) {
      updateProfile(updateId, formData)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            alert('Profile updated successfully');
            handleClose();
            fetchProfiles(); 
          } else {
            alert('Something went wrong while updating profile');
          }
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
          alert('Something went wrong');
        });
    } else {
      handleUpload();
    }
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col className="text-center">
            <h2 className='text-primary'>Profile Management</h2>
            {profiles.length === 0 && ( // Check if there are no profiles
              <Button variant="primary" onClick={handleShow} className="mt-3">
                Add Profile
              </Button>
            )}
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{updateId ? 'Update Profile' : 'Add Profile'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    required
                    checked={formData.gender === 'male'}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    required
                    checked={formData.gender === 'female'}
                  />
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    required
                    checked={formData.gender === 'other'}
                  />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit">
                {updateId ? 'Update Profile' : 'Save Profile'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Row className="justify-content-center mt-2">
          <Col>
            <div className="d-flex flex-wrap justify-content-center">
              {profiles.length > 0 ? (
                profiles.map((profile, index) => (
                  <Card key={index} className="mb-3 mx-2 profile-card w-100 p-3" style={{ backgroundColor: 'lavender' }}>
                    <Card.Body className="card-body">
                      <Card.Text className="card-text d-flex justify-content-center">
                        <div>
                          <h5 className="mb-3">
                            <span className="fw-bold me-2">Name:</span>{profile.name}
                          </h5>
                          <h5 className="mb-3">
                            <span className="fw-bold me-2">Email:</span>{profile.email}
                          </h5>
                          <h5 className="mb-3">
                            <span className="fw-bold me-2">Phone Number:</span>{profile.phoneNumber}
                          </h5>
                          <h5 className="mb-3">
                            <span className="fw-bold me-2">Gender:</span>{profile.gender}
                          </h5>
                        </div>
                      </Card.Text>
                      <div className="text-center">
                        <button className="btn btn-primary" onClick={() => handleUpdate(profile.id, profile)}>Update</button>
                      </div>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <>
                 
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Silhouette_Mr_Pipo.gif" alt="No profiles" />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddProfile;
