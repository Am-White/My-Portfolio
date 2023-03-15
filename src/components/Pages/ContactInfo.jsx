//import "./style.css";
import React from 'react';

// TODO:
// add in form to go straight to email
// and in email on top and if available to work current

function ContactInfo () {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
      <div className="main">
    <div>
      <button onClick={handleOpen}>Dropdown</button>
      {open ? <div>woah woah woah</div> : <div></div>}
    </div>
      </div>
  );
}

export default ContactInfo;