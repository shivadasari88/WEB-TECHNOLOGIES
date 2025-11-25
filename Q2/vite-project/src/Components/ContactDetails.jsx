import React, { useState, useEffect } from "react";
 
function ContactDetails({ username }) {
 
  const [contact, setContact] = useState(null);
 
  const contactsData = [
    { username: "rama", email: "rama@gmail.com", phone: "9988778899", fullname: "ramakrishna" },
    { username: "shiva", email: "shiva@gmail.com", phone: "9308856901", fullname: " shiva dasari" },
    { username: "Rakesh", email: "rakesh@email.com", phone: "9876543210", fullname: "Rakesh Kumar" }
  ];
 
  useEffect(() => {
    if (username.trim() !== "") {
      const result = contactsData.filter(c => 
        c.username.toLowerCase() === username.toLowerCase()
      );
      setContact(result);
    }
  }, [username]);
 
  return (
    <div>
      {username && <h5>Results for: <strong>{username}</strong></h5>}
 
      {contact?.length > 0 ? (
        contact.map((c) => (
          <div >
            <p><strong>Full Name:</strong> {c.fullname}</p>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Phone:</strong> {c.phone}</p>
          </div>
        ))
      ) : username ? (
        <p >No contact found!</p>
      ) : null}
    </div>
  );
}
 
export default ContactDetails;