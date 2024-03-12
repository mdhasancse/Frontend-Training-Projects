import React from 'react';
import {   Persona, PersonaSize, PersonaPresence } from '@fluentui/react';
import './TopNav.css'; // Import the CSS file
import { initializeIcons } from '@fluentui/react/lib/Icons';
import pic from './lololo.png';

initializeIcons();
 
const CustomSvgIcon = () => (
<svg id='search' height={20} width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>);

// const options = [
//   { key: 'signOut', text: 'Sign out' }
// ];

const TopNav = () => {
  return (
    
    <div className="TopNav">
      <div className="Logo">
        <img src={pic} alt='img' ></img>
      </div>
      <div className="UserDropdown">
      <CustomSvgIcon/>
        <Persona text="Byte Force" size={PersonaSize.size32} presence={PersonaPresence.online} />
      </div>
    </div>
  );
};

export default TopNav;
