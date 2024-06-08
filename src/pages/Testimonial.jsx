import React, { useState, useEffect } from 'react';
import { feedbackApi, getFeedback } from '../services/callApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Testimonial() {
  const [review, setReview] = useState({
    feedbackUser: ""
  });
  const [reviews, setReviews] = useState([]);
  const userEmail = sessionStorage.getItem('userEmail');
  const isLoggedIn = !!userEmail; // Check if user is logged in

  const handleSubmit = async () => {
    const { feedbackUser } = review;

    if (!feedbackUser) {
      toast.error('Please fill out the form completely');
      return;
    }

    try {
      const bookingFeedback = {
        feedbackUser,
        userEmail: sessionStorage.getItem('userEmail') // Include user email here
      };

      const response = await feedbackApi(bookingFeedback);

      if (response.status >= 200 && response.status < 300) {
        toast.success('Feedback uploaded successfully');
        setReview({ feedbackUser: '' });
        fetchReviews();
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('Something went wrong');
    }
  };


  const fetchReviews = async () => {
    try {
      const response = await getFeedback();
      if (response.status >= 200 && response.status < 300) {
        setReviews(response.data);
      } else {
        
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
     
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <div className="container mb-5" style={{ backgroundColor: 'lavender' }}>
        <h1 className="text-center text-primary mt-5 fw-bold">Share Your Feedback!</h1>
        {isLoggedIn && ( // Render feedback form only if user is logged in
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <textarea
                  className="form-control rounded"
                  placeholder="Write your feedback"
                  rows="5"
                  value={review.feedbackUser}
                  onChange={(e) => setReview({ ...review, feedbackUser: e.target.value })}
                ></textarea>
                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-warning">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="row mt-5">
          {reviews.length > 0 ? (
            reviews.map((item, index) => (
              <div key={index} className="col-md-6 border border-1 rounded" style={{backgroundColor:'lavender'}}>
                <div className="card mb-3">
                  <div className="card-body" style={{backgroundColor:'cornsilk'}}>
                    {userEmail && <p className='text-primary'>{item.userEmail}</p>}
                    <p className="card-text"><i>{item.feedbackUser}</i></p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-12 text-center mt-3 mb-3">
              <img src="https://i.gifer.com/7SpJ.gif" height={'200px'} alt="No feedback available" />
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Testimonial;
