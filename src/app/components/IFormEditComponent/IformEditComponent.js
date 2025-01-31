"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
export default function IFormEditComponent({
  profileName,
  onProfileNameChange,
}) {
  const [userName, setUserName] = useState("");

  const handleNameChange = (e) => {
    if (onProfileNameChange) {
      onProfileNameChange(e.target.value);
    }
  };

  return (
    <div className="input-group mb-3">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Nombre
      </button>
      <input
        type="text"
        value={profileName}
        onChange={handleNameChange}
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  );
}
