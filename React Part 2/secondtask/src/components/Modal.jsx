import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, onSuccess, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      Id: "", 
      name: "",
      designation: "",
      department: ""
    }
  );
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    onSuccess(formState.name); // Notify the parent component about the successful addition.

    closeModal();
  };


  const validateForm = () => {
    if (formState.Id && formState.name && formState.designation && formState.department) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   onSubmit(formState);

  //   closeModal();
  // };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="Id">Id</label>
            <input name="Id" onChange={handleChange} value={formState.Id} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input name="designation" onChange={handleChange} value={formState.designation} />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input name="department" onChange={handleChange} value={formState.department} />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};



