import React, { Component } from "react";
import { BsFillTrashFill, BsFillPencilFill, BsFillEyeFill } from "react-icons/bs";
import "../styles/Table.css";

class Table extends Component {
  render() {
    const { rows, deleteRow, editRow, onView } = this.props;
    
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th className="expand">Name</th>
              <th className="expand">Designation</th>
              <th className="expand">Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.Id}</td>
                <td>{row.name}</td>
                <td>{row.designation}</td>
                <td>{row.department}</td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                    <BsFillEyeFill
                      className="view-btn"
                      onClick={() => onView(row)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
