import React, { Component } from "react";
import "../styles/Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: props.defaultValue || {
        Id: "", 
        name: "",
        designation: "",
        department: ""
      },
      errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) return;

    this.props.onSubmit(this.state.formState);

    this.props.onSuccess(this.state.formState.name); // Notify the parent component about the successful addition.

    this.props.closeModal();
  }

  handleChange(e) {
    this.setState({ formState: { ...this.state.formState, [e.target.name]: e.target.value } });
  }

  validateForm() {
    const { formState } = this.state;
    if (formState.Id && formState.name && formState.designation && formState.department) {
      this.setState({ errors: "" });
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      this.setState({ errors: errorFields.join(", ") });
      return false;
    }
  }

  render() {
    const { closeModal } = this.props;
    const { formState, errors } = this.state;
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
              <input name="Id" onChange={this.handleChange} value={formState.Id} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input name="name" onChange={this.handleChange} value={formState.name} />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <input name="designation" onChange={this.handleChange} value={formState.designation} />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input name="department" onChange={this.handleChange} value={formState.department} />
            </div>
            {errors && <div className="error">{`Please include: ${errors}`}</div>}
            <button type="submit" className="btn" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
