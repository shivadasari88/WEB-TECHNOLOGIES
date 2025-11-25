import React, { useState } from "react";
import ContactDetails from "./ContactDetails";
 
function ContactInfoComponent() {
  const [username, setUsername] = useState("");
  const [searchItem, setSearchItem] = useState("");
 
  const handleFetch = () => {
    setSearchItem(username);
  };
 
  return (
    <div style={{ maxWidth: "450px" }}>
      <h3>Contact Information</h3>
 
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter contact name"
      />
      <br></br>
 
      <button onClick={handleFetch}>
        Fetch Data
      </button>
 
      <ContactDetails username={searchItem} />
    </div>
  );
}
 
export default ContactInfoComponent;