import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h1 style={{ padding: "16px" }}>Contact List</h1>

      {contacts.map((person) => (
        <div
          className="card"
          key={person.id}
          style={{
            marginBottom: "16px",
            marginLeft: "8px",
            marginRight: "8px",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <div className="card-body" style={{ padding: "8px" }}>
            <h5 className="card-title">{person.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{person.email}</h6>
            <p className="card-text">{person.company?.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
