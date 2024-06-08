import React from 'react';
import './Homee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons/faTooth';
import Service from '../components/Service';


function Homee() {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#164863' }} className='pb-3'>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 mt-3">
              <img className='rounded w-100' src="https://media.istockphoto.com/id/1349328691/photo/young-happy-woman-during-dental-procedure-at-dentists-office.jpg?b=1&s=612x612&w=0&k=20&c=yu-f0mgHCLH9s-RAJeH8hbEAYI-G6sM54CC7NX3qTi0=" alt="image" />
            </div>
            <div className="col-md-6 mt-3 pt-3">
              <h1 className='text-light pt-5 fw-bold '><FontAwesomeIcon icon={faTooth} size='xl' bounce style={{ color: "white", }} />  DENTAKAY Clinic</h1>
              <p className='p-3 text-light'>Everyone here at DENTAKAY is dedicated to your well-being, and we make that clear from the moment you enter our clinic . We provide you with the best treatment options available, all administered by our highly trained doctors and staffs. Our doctors who listens to your unique concerns and responds to your needs, giving you painless, quick, and easy treatment. Whether you’re looking for cosmetic dentistry or treatment for any dental condition, our staff works hard to make sure that you are comfortable and healthy. </p>
              
            </div>
          </div>
        </div>

       {/* service section */}
       <section className="container">
  <h1 className='text-center text-white mt-5 ' style={{ fontWeight: 'bold' }}>Our Services</h1>
  {/* modal div */}
  <div className="row mt-5 mt-md-0">
    <div className="col-lg-4 col-md-6 mb-4">
      <Service 
        name='bonding'
        cardUrl='https://www.acfdga.com/wp-content/uploads/2015/05/Main-Image-Cracked-Tooth.jpg'
        modalUrl='https://brushinonbelmont.com/wp-content/uploads/2019/11/teeth-bonding.jpeg'
        heading='After'
        content='Dental bonding is a cosmetic dentistry procedure where a tooth-colored resin material is applied and bonded to the teeth using a special light. It&apos;s often used to repair chipped or cracked teeth, improve the appearance of discolored teeth, close gaps between teeth, or change the shape of teeth.'
      />
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <Service
        name='Root Canal Treatment'
        cardUrl='https://crystalriverdental.com/wp-content/uploads/2022/05/root-canal.jpg'
        modalUrl='https://crystalriverdental.com/wp-content/uploads/2022/05/root-canal.jpg'
        heading='Root Canal'
        content='Root canal treatment is highly successful in saving infected teeth and relieving pain. It eliminates the need for extraction and allows patients to retain their natural teeth, which is always preferable whenever possible. However, like any dental procedure, there may be risks and potential complications, and it&apos;s important to follow the dentist &apos;s instructions for post-treatment care to ensure the best outcome.'
      />
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <Service
        name='professional tooth cleaning'
        cardUrl='https://saluddentalgroupnm.com/wp-content/uploads/teeth-cleaning-2203.jpg'
        modalUrl='https://finedentistry.blob.core.windows.net/content/images/Blog/The-Importance-of-Professional-Teeth-Cleaning.jpg'
        heading='Professional tooth cleaning'
        content=' Professional tooth cleaning, also known as dental prophylaxis or dental cleaning, is a preventive dental procedure performed by a dental hygienist or dentist to maintain oral health and prevent dental problems. It involves the removal of plaque, tartar (calculus), and stains from the surfaces of the teeth, along with other preventive measures. Here&apos;s an overview of what typically happens during a professional tooth cleaning.'
      />
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <Service
        name='Dental implants'
        cardUrl='https://gkdentaloffice.com/wp-content/uploads/questions-to-ask-implant-dentist.jpg'
        modalUrl='https://gkdentaloffice.com/wp-content/uploads/questions-to-ask-implant-dentist.jpg'
        heading='Dental implants'
        content='Dental implants are a popular and effective long-term solution for replacing missing teeth. They are artificial tooth roots made of biocompatible materials such as titanium that are surgically placed into the jawbone to support replacement teeth or dental prostheses, such as crowns, bridges, or dentures. Here&ampos;s an overview of dental implants'
      />
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <Service
        name='Cosmetric dentistry'
        cardUrl='https://static.wixstatic.com/media/fc382d_c8b13fe9870c4338b4b4d82bcb1b20ea~mv2.jpg/v1/fill/w_496,h_372,fp_0.50_0.50,lg_1,q_80,enc_auto/fc382d_c8b13fe9870c4338b4b4d82bcb1b20ea~mv2.jpg'
        modalUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5VA4Dn3fsWLIkpe6XHpqmRP1_Rn8v3_hK1aMLFydxA&s'
        heading='Cosmetric dentistry'
        content=' Cosmetic dentistry focuses on improving the appearance of a person&apos;s teeth, gums, and smile. While traditional dentistry primarily focuses on oral hygiene and preventing, diagnosing, and treating dental diseases, cosmetic dentistry primarily focuses on enhancing the aesthetic appeal of a person&apos;s smile.'
      />
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <Service
        name='Crowns & Bridgework'
        cardUrl='https://wahroongadental.com.au/wp-content/uploads/2022/12/crowns-and-bridges-big.jpg'
        modalUrl='https://wahroongadental.com.au/wp-content/uploads/2022/12/crowns-and-bridges-big.jpg'
        heading='Crowns & Bridgeswork'
        content=' Crowns and bridgework are common dental procedures used to restore or replace missing or damaged teeth.Both crowns and bridgework are effective dental treatments for restoring the form and function of damaged or missing teeth, enhancing oral health, and improving the appearance of the smile. '
      />
    </div>
  </div>
</section>


        {/* about section */}
        <section style={{cursor:'pointer'}} id="about-section" className="container mb-5">
          <h1 className='text-center text-light mt-5 fw-bold'>About Us...</h1>
          <div className="row mt-5">
           
            <div className="col-md-6">
              <img className='w-100 rounded me-3' src="https://www.shutterstock.com/image-photo/medical-dentist-team-dental-office-600nw-1020554869.jpg" alt="" />
            </div>
            <div className="col-md-6" >
              <p className='text-light ms-3 mt-3'style={{alignItems:"justify"}}>At Dentakay, our mission is to provide top-quality dental care in a comfortable and friendly environment. We are dedicated to helping our patients achieve and maintain optimal oral health through comprehensive and personalized dental services. Our experienced team of dental professionals utilizes the latest technology and techniques to ensure that each patient receives the best possible care. We offer a wide range of services, including general dentistry, cosmetic dentistry, restorative dentistry, orthodontics, pediatric dentistry, and emergency dental care. Our clinic is designed to be welcoming and relaxing, helping to alleviate any anxiety or discomfort associated with dental visits. We believe in a patient-centered approach, taking the time to understand each patient's unique needs and concerns, and we are committed to building long-lasting relationships based on trust and mutual respect. With flexible scheduling options, including evenings and weekends, we make it easy to fit dental care into your busy life. At [Your Dental Clinic], your smile is our top priority, and we are here to support you every step of the way.</p>
            </div>
           
          </div>
        </section>
      </div>
    </>
  )
}

export default Homee;
