import React from 'react';
import {NavLink} from "react-router-dom";

const Appbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid d-flex flex-row justify-content-between'>
        <section>
          <h4>My Blog</h4>
        </section>
        <section className='d-flex gap-2'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Add'>Add</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Contacts'>Contacts</NavLink>
        </section>
      </div>
    </nav>
  );
};

export default Appbar;