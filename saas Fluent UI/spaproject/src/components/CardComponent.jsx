
import './CardComponent.css';
import { CompoundButton } from '@fluentui/react/lib/Button';
import React, { useState } from 'react';
import subscriptionData from '../jsonFile/Subscription.json';
import planData from '../jsonFile/plan.json';
import offerData from '../jsonFile/offer.json';
import userData from '../jsonFile/user.json';

const CardComponent = () => {
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const [plans, setPlans] = useState(false);
  const [offers, setoffers] = useState(false);
  const [users, setUsers] = useState(false); // Initially set to true to show the user table
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    phone_number: '',
    designation: ''
  });
  const [userDataState, setUserData] = useState(userData);

  const handleSubscriptionClick = () => {
    setShowSubscriptions(!showSubscriptions);
    const subscriptionTable = document.getElementById('subscriptiontable');
    const planTable = document.getElementById('plantable');
    const offerTable = document.getElementById('offertable');
    const userTable = document.getElementById('usertable');
    const userAdd = document.getElementById('adduser')
    // if (subscriptionTable) {
    //   subscriptionTable.remove();
    // }else  
    if (planTable){
      planTable.remove();
    } else if (offerTable){
      offerTable.remove();
    } else if ((userTable)|| ((userTable)&&(userAdd))) {
      userTable.remove();
      userAdd.remove();
    }
  };

  const handlePlanClick = () => {
    setPlans(!plans);
    const offerTable = document.getElementById('offertable');
    const subscriptionTable = document.getElementById('subscriptiontable');
    const planTable = document.getElementById('plantable');
    const userTable = document.getElementById('usertable');
    const userAdd = document.getElementById('adduser')
    // if (planTable) {
    //   planTable.remove();
    // }else
    if (subscriptionTable){
      subscriptionTable.remove();
    } else if (offerTable) {
      offerTable.remove();
    } else if ((userTable)|| ((userTable)&&(userAdd))) {
      userTable.remove();
      userAdd.remove();
    }
  };

  const handleOfferClick = () => {
    setoffers(!offers);
    const userTable = document.getElementById('usertable');
    const subscriptionTable = document.getElementById('subscriptiontable');
    const offerTable = document.getElementById('offertable');
    const planTable = document.getElementById('plantable');
    const userAdd = document.getElementById('adduser')
    // if (offerTable) {
    //   offerTable.remove();
    // } else
    if (subscriptionTable)  {
      subscriptionTable.remove();
    } else if (planTable) {
      planTable.remove();
    } else if ((userTable)|| ((userTable)&&(userAdd))) {
      userTable.remove();
      userAdd.remove()
    }
  };

  const handleUserClick = () => {
    setUsers(!users);
    const userTable = document.getElementById('usertable');
    const subscriptionTable = document.getElementById('subscriptiontable');
    const offerTable = document.getElementById('offertable');
    const planTable = document.getElementById('plantable');
    
    if (subscriptionTable) {
      subscriptionTable.remove();
    } else if (planTable) {
      planTable.remove();
    } else if (offerTable) {
      offerTable.remove();
    }
  };

  const handleAddUser = () => {
    // Validate if all fields are filled
    if (newUser.id && newUser.name && newUser.phone_number && newUser.designation) {
      // Add the new user to the userData array
      setUserData([...userDataState, newUser]);
      // Reset the newUser state to clear the input fields
      setNewUser({
        id: '',
        name: '',
        phone_number: '',
        designation: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className='card'>
      <div className='card-heading'>
        <h3>Welcome to Sass Accelerator Admin Page</h3>
      </div>
       <div className='row1card'>
       <CompoundButton onClick={handleSubscriptionClick} className='r1 r11'>
         <svg width="30" height="30" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 3H16M6 7H18M11 14.5V17.5L14 16L11 14.5ZM6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21Z" stroke="#000000" stroke-width="1.224" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
           Subscription
         </CompoundButton>
         <CompoundButton onClick={handlePlanClick} className='r1 r22'>
        <svg id='rrr' height="30" width="30"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 21H5V5h2v2h10V5h2v2.172l1-1V4h-3V3h-3a2 2 0 0 0-4 0H7v1H4v18h16V11.828l-1 1zM8 4h3V2.615A.615.615 0 0 1 11.614 2h.771a.615.615 0 0 1 .615.615V4h3v2H8zm14.646 1.646l.707.707-8.853 8.854-3.854-3.854.707-.707 3.147 3.147z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
           plans
        </CompoundButton>
         <CompoundButton onClick={handleOfferClick} className='r1 r33'>
         <svg height="30" width="30" id='offerss' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_15_213)"> <rect width="24" height="24" fill="white"></rect> <path d="M9.16894 21.8995L19.4357 11.6327C19.6505 11.4179 19.756 11.1171 19.7225 10.8152L19.1568 5.72404C19.1051 5.2592 18.7382 4.89224 18.2733 4.84059L13.1822 4.27491C12.8802 4.24136 12.5794 4.34687 12.3646 4.56168L2.09787 14.8284C1.70735 15.219 1.70735 15.8521 2.09787 16.2426L7.75472 21.8995C8.14525 22.29 8.77841 22.29 9.16894 21.8995Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="14.1205" cy="9.88055" r="2" transform="rotate(45 14.1205 9.88055)" stroke="#000000" stroke-linejoin="round"></circle> </g> <defs> <clipPath id="clip0_15_213"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg> 
           Offers
         </CompoundButton>
       </div>

       <div className='row2card'>
        <CompoundButton  className='r1 r44'>
           Schedule
           <svg height="30" width="30"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z" fill="#000000"></path> </g></svg>
         </CompoundButton>
         <CompoundButton onClick={handleUserClick} className='r2 r55'>
         <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#000000" stroke-width="1.128" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
           Users
         </CompoundButton>
       </div>

      {users && (
        <div className='table-container'>
          <table id='usertable'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {userDataState.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.designation}</td>
                </tr>
              ))}
            </tbody>
          </table><br/>
          <div className='add-user' id='adduser'>
            <input type='number' placeholder='Id' value={newUser.id} onChange={(e) => setNewUser({ ...newUser, id: e.target.value })} />
            <input type='text' placeholder='Name' value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
            <input type='number' placeholder='Phone Number' value={newUser.phone_number} onChange={(e) => setNewUser({ ...newUser, phone_number: e.target.value })} />
            <input type='text' placeholder='Designation' value={newUser.designation} onChange={(e) => setNewUser({ ...newUser, designation: e.target.value })} />
            <button onClick={handleAddUser}>Add</button>
          </div>
        </div>
      )}
         {offers && (
      <div className='table-container'>
           <table id='offertable'>
             <thead>
               <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Price</th>
                 <th>Discount</th>
                 <th>Description</th>
                 <th>image</th>
                 
               </tr>
            </thead>
             <tbody>
               {offerData.map((offer, index) => (
                <tr key={index}>
                   <td>{offer.id}</td>
                   <td>{offer.name}</td>
                   <td>{offer.price}</td>
                   <td>{offer.discount}</td>
                   <td>{offer.description}</td>
                   <td><img src={offer.image} alt={offer.name} style={{width: '100px'}} /></td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}

      {plans && (
      <div className='table-container'>
           <table id='plantable'>
             <thead>
               <tr>
                 <th>Offer ID</th>
                 <th>Offer Validity</th>
               </tr>
            </thead>
           <tbody>
               {planData.map((plan, index) => (
                 <tr key={index}>
                   <td>{plan.offerID}</td>
                   <td>{plan.offer_validity}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       )}


       {showSubscriptions && (
         <div className='table-container'>
           <table id='subscriptiontable'>
             <thead>
               <tr>
                 <th>Subscription Name</th>
                 <th>Offer Name</th>
                 <th>offer</th>
                 <th>Quality</th>
                 <th>Email</th>
                 <th>Status</th>
               </tr>
             </thead>
             <tbody>
               {subscriptionData.map((subscription, index) => (
                 <tr key={index}>
                   <td>{subscription.SubscriptionName}</td>
                   <td>{subscription.OfferName}</td>
                   <td>{subscription.offer}</td>
                   <td>{subscription.Quality}</td>
                   <td>{subscription.Email}</td>
                   <td>{subscription.status}</td>
                 </tr>
              ))}
             </tbody>
           </table>
         </div>
      )}
     </div>
   );
 };


      {/* Include other table components here */}
//     </div>
//   );
// };

export default CardComponent;
