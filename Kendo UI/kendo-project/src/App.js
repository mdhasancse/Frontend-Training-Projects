import React, { useState } from 'react';
import './App.css';
import { FaBell, FaUser } from 'react-icons/fa';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { menuIcon } from "@progress/kendo-svg-icons";
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Pager } from '@progress/kendo-react-data-tools';
import '@progress/kendo-theme-default/dist/all.css';
import employeesData from './Employees.json';
import Sidebar from './Components/Sidebar';
 
const App = () => {
  const [data, setData] = useState(employeesData);
  const [isAddFormOpen, setAddFormOpen] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedDepartment, setEditedDepartment] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [isViewDialogOpen, setViewDialogOpen] = useState(false);
  const [viewedEmployee, setViewedEmployee] = useState(null);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deletedEmployee, setDeletedEmployee] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [pageState, setPageState] = useState({
    skip: 0,
    take: 5,
    buttonCount: 5,
    type: 'numeric',
    info: true,
    pageSizes: true,
    previousNext: true,
    responsive: true,
  });
 
  // New state for adding a new employee
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeDepartment, setNewEmployeeDepartment] = useState('');
  const [newEmployeeAddress, setNewEmployeeAddress] = useState('');
  const [newEmployeePhone, setNewEmployeePhone] = useState('');
 
  const handlePageChange = (event) => {
    const { skip, take } = event;
    setPageState({
      ...pageState,
      skip: skip,
      take: take,
    });
  };
 
  const handleEdit = (dataItem) => {
    setEditedEmployee(dataItem);
    setEditedName(dataItem.name);
    setEditedDepartment(dataItem.department);
    setEditedAddress(dataItem.address);
    setEditedPhone(dataItem.phone);
    setEditFormOpen(true);
  };
 
  const handleView = (dataItem) => {
    setViewedEmployee(dataItem);
    setViewDialogOpen(true);
  };
 
  const handleDelete = (dataItem) => {
    setDeletedEmployee(dataItem);
    setDeleteConfirmationOpen(true);
  };
 
  const handleUpdate = () => {
    const updatedData = data.map((employee) =>
      employee === editedEmployee
        ? {
          ...employee,
          name: editedName,
          department: editedDepartment,
          address: editedAddress,
          phone: editedPhone
        }
        : employee
    );
 
    setData(updatedData);
    setEditFormOpen(false);
    setEditedEmployee(null);
    setEditedName('');
    setEditedDepartment('');
    setEditedAddress('');
    setEditedPhone('');
  };
 
  const handleCancelEdit = () => {
    setEditFormOpen(false);
    setEditedEmployee(null);
    setEditedName('');
    setEditedDepartment('');
    setEditedAddress('');
    setEditedPhone('');
  };
 
  const handleViewDialogClose = () => {
    setViewDialogOpen(false);
    setViewedEmployee(null);
  };
 
  const handleDeleteConfirmed = () => {
    const updatedData = data.filter((employee) => employee !== deletedEmployee);
 
    setData(updatedData);
    setDeleteConfirmationOpen(false);
    setDeletedEmployee(null);
  };
 
  const handleDeleteCanceled = () => {
    setDeleteConfirmationOpen(false);
    setDeletedEmployee(null);
  };
 
  const handleAddNewEmployee = () => {
    setAddFormOpen(true);
  };
 
  const handleSaveNewEmployee = () => {
    const newEmployee = {
      name: newEmployeeName,
      department: newEmployeeDepartment,
      address: newEmployeeAddress,
      phone: newEmployeePhone,
    };
 
    setData([...data, newEmployee]);
    setAddFormOpen(false);
    setNewEmployeeName('');
    setNewEmployeeDepartment('');
    setNewEmployeeAddress('');
    setNewEmployeePhone('');
  };
 
  const handleToggleSidebar = () => {
    console.log(isSidebarOpen)
    setSidebarOpen(!isSidebarOpen);
  }
  let kendokaAvatar = "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";
  return (
    <div className='main-container'>
        <div className=''>
          <AppBar>
         
            <AppBarSection>
              <ul className="top-nav">
                <li onClick={handleToggleSidebar}>
                  <span><SvgIcon icon={menuIcon} /></span>
                </li>
 
                    <AppBarSpacer style={{ width: 4 }} />
 
                      <AppBarSection>
                        <h1 className="title">EmployeesData</h1>
                      </AppBarSection>
 
                    <AppBarSpacer style={{ width: 32 }} />
 
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>Department</span>
                </li>
                <li>
                  <span>Branch</span>
                </li>
                <li>
                  <span>Help</span>
                </li>
              </ul>
            </AppBarSection>
 
            <AppBarSpacer style={{ width: 32 }} />
 
            <AppBarSpacer />
 
            <AppBarSection className="actions">
              <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                <BadgeContainer>
                  <FaBell />
                  <Badge themeColor="info" size="small" />
                </BadgeContainer>
              </button>
            </AppBarSection>
 
            <AppBarSection>
              <Avatar type="image">
               <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
             </Avatar>
            </AppBarSection>
          </AppBar>
        </div>
 
        <div className="App">
          <div>
             {isSidebarOpen &&<Sidebar/>}
          </div>
          <div className='table-part'>
          {isAddFormOpen && (
            <div className="addForm">
              <h2 className="addEmp">Add New Employee</h2>
              <label className='nameinput'>Name:</label>
              <input type="text" value={newEmployeeName} onChange={(e) => setNewEmployeeName(e.target.value)} />
              <label>Department:</label>
              <input type="text" value={newEmployeeDepartment} onChange={(e) => setNewEmployeeDepartment(e.target.value)} />
              <label>Address:</label>
              <input type="text" value={newEmployeeAddress} onChange={(e) => setNewEmployeeAddress(e.target.value)} />
              <label>Phone:</label>
              <input type="text" value={newEmployeePhone} onChange={(e) => setNewEmployeePhone(e.target.value)} />
              <Button className="saveBtn savbtn" onClick={handleSaveNewEmployee}>Save</Button>
            </div>
          )}
          <div className="addEmpBtn">
            <Button className="empbtn" onClick={handleAddNewEmployee}>Add New Employee</Button>
          </div>
 
          <div className='table-container'>
            <div className="Empgrid">
              <Grid data={data.slice(pageState.skip, pageState.skip + pageState.take)}>
                <Column field="name" title="Name" className="theader" />
                <Column field="department" title="Department" className="theader" />
                <Column field="address" title="Address" className="theader" />
                <Column field="phone" title="Phone" className="theader" />
                <Column
                  title="Actions"
                  width="200px"
                  cell={(props) => (
                    <td>
                      <Button className="edit" onClick={() => handleEdit(props.dataItem)}>Edit</Button>
                      <Button className="view" onClick={() => handleView(props.dataItem)}>View</Button>
                      <Button className="delete" onClick={() => handleDelete(props.dataItem)}>Delete</Button>
                    </td>
                  )}
                />
              </Grid>
              <Pager
                skip={pageState.skip}
                take={pageState.take}
                total={data.length}
                buttonCount={pageState.buttonCount}
                info={pageState.info}
                type={pageState.type}
                pageSizes={pageState.pageSizes ? [5, 10, 20] : undefined}
                previousNext={pageState.previousNext}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
          {isEditFormOpen && (
            <div className="editForm">
              <h2>Edit Employee</h2>
              <label>Name:</label>
              <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
              <label>Department:</label>
              <input type="text" value={editedDepartment} onChange={(e) => setEditedDepartment(e.target.value)} />
              <label>Address:</label>
              <input type="text" value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} />
              <label>Phone:</label>
              <input type="text" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} />
              <Button onClick={handleUpdate}>Update</Button>
              <Button onClick={handleCancelEdit}>Cancel</Button>
            </div>
          )}
 
          {isViewDialogOpen && (
            <Dialog title="Employee Details" onClose={handleViewDialogClose}>
              <div>
                <p>Name: {viewedEmployee.name}</p>
                <p>Department: {viewedEmployee.department}</p>
                <p>Address: {viewedEmployee.address}</p>
                <p>Phone: {viewedEmployee.phone}</p>
              </div>
              <DialogActionsBar>
                <Button onClick={handleViewDialogClose}>Close</Button>
              </DialogActionsBar>
            </Dialog>
          )}
 
          {isDeleteConfirmationOpen && (
            <Dialog title="Delete Confirmation" onClose={handleDeleteCanceled}>
              <div>
                <p>Do you want to delete this row?</p>
              </div>
              <DialogActionsBar>
                <Button onClick={handleDeleteConfirmed}>Yes</Button>
                <Button onClick={handleDeleteCanceled}>No</Button>
              </DialogActionsBar>
            </Dialog>
          )}
 
          </div>
         
        </div>
    </div>
  );
};
 
export default App;

// import * as React from "react";
// import './App.css';
// import { useState } from 'react';
// import { AppBar, AppBarSection, AppBarSpacer, Avatar } from "@progress/kendo-react-layout";
// import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
// import { SvgIcon } from "@progress/kendo-react-common";
// import { bellIcon, menuIcon } from "@progress/kendo-svg-icons";
// import { Button } from '@progress/kendo-react-buttons';
// import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
// import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
// import { Pager } from '@progress/kendo-react-data-tools';
// import '@progress/kendo-theme-default/dist/all.css';
// import employeesData from './Employees.json';

// let kendokaAvatar = "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";

// const App = () => {
//   const [data, setData] = useState(employeesData);
//   const [isAddFormOpen, setAddFormOpen] = useState(false);
//   const [isEditFormOpen, setEditFormOpen] = useState(false);
//   const [editedEmployee, setEditedEmployee] = useState(null);
//   const [editedName, setEditedName] = useState('');
//   const [editedDepartment, setEditedDepartment] = useState('');
//   const [editedAddress, setEditedAddress] = useState('');
//   const [editedPhone, setEditedPhone] = useState('');
//   const [isViewDialogOpen, setViewDialogOpen] = useState(false);
//   const [viewedEmployee, setViewedEmployee] = useState(null);
//   const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
//   const [deletedEmployee, setDeletedEmployee] = useState(null);
  
//   const [pageState, setPageState] = useState({
//     skip: 0,
//     take: 5,
//     buttonCount: 5,
//     type: 'numeric',
//     info: true,
//     pageSizes: true,
//     previousNext: true,
//     responsive: true,
//   });

//   // New state for adding a new employee
//   const [newEmployeeName, setNewEmployeeName] = useState('');
//   const [newEmployeeDepartment, setNewEmployeeDepartment] = useState('');
//   const [newEmployeeAddress, setNewEmployeeAddress] = useState('');
//   const [newEmployeePhone, setNewEmployeePhone] = useState('');

//   const handlePageChange = (event) => {
//     const { skip, take } = event;
//     setPageState({
//       ...pageState,
//       skip: skip,
//       take: take,
//     });
//   };

//   const handleEdit = (dataItem) => {
//     setEditedEmployee(dataItem);
//     setEditedName(dataItem.name);
//     setEditedDepartment(dataItem.department);
//     setEditedAddress(dataItem.address);
//     setEditedPhone(dataItem.phone);
//     setEditFormOpen(true);
//   };

//   const handleView = (dataItem) => {
//     setViewedEmployee(dataItem);
//     setViewDialogOpen(true);
//   };

//   const handleDelete = (dataItem) => {
//     setDeletedEmployee(dataItem);
//     setDeleteConfirmationOpen(true);
//   };

//   const handleUpdate = () => {
//     const updatedData = data.map((employee) =>
//       employee === editedEmployee
//         ? {
//           ...employee,
//           name: editedName,
//           department: editedDepartment,
//           address: editedAddress,
//           phone: editedPhone
//         }
//         : employee
//     );

//     setData(updatedData);
//     setEditFormOpen(false);
//     setEditedEmployee(null);
//     setEditedName('');
//     setEditedDepartment('');
//     setEditedAddress('');
//     setEditedPhone('');
//   };

//   const handleCancelEdit = () => {
//     setEditFormOpen(false);
//     setEditedEmployee(null);
//     setEditedName('');
//     setEditedDepartment('');
//     setEditedAddress('');
//     setEditedPhone('');
//   };

//   const handleViewDialogClose = () => {
//     setViewDialogOpen(false);
//     setViewedEmployee(null);
//   };

//   const handleDeleteConfirmed = () => {
//     const updatedData = data.filter((employee) => employee !== deletedEmployee);

//     setData(updatedData);
//     setDeleteConfirmationOpen(false);
//     setDeletedEmployee(null);
//   };

//   const handleDeleteCanceled = () => {
//     setDeleteConfirmationOpen(false);
//     setDeletedEmployee(null);
//   };

//   const handleAddNewEmployee = () => {
//     setAddFormOpen(true);
//   };

//   const handleSaveNewEmployee = () => {
//     const newEmployee = {
//       name: newEmployeeName,
//       department: newEmployeeDepartment,
//       address: newEmployeeAddress,
//       phone: newEmployeePhone,
//     };

//     setData([...data, newEmployee]);
//     setAddFormOpen(false);
//     setNewEmployeeName('');
//     setNewEmployeeDepartment('');
//     setNewEmployeeAddress('');
//     setNewEmployeePhone('');
//   };

//   return (
//     <React.Fragment>
//       <div className="left-sidebar">
//         <ul className="left-nav">
//             <li>
//             <span><SvgIcon icon={menuIcon} /></span>
//           </li>
//           <li>
//             <span><i class="bi bi-cloud-snow icons"></i></span>
//           </li>
//           <li>
//             <span><i class="bi bi-people icons"></i></span>
//           </li>
//           <li>
//             <span><i class="bi bi-bank2 icons"></i></span>
//           </li>
//           <li>
//             <span><i class="bi bi-currency-dollar icons"></i></span>
//           </li>
//         </ul>
//       </div>

//       <div className="content">
//         <AppBar>
//           <AppBarSection>
//             {/* <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
//               <SvgIcon icon={menuIcon} />
//             </button> */}
//           </AppBarSection>

//           <AppBarSpacer style={{ width: 4 }} />

//           <AppBarSection>
//             <h1 className="title">Employee Table</h1>
//           </AppBarSection>

//           <AppBarSpacer style={{ width: 32 }} />

//           <AppBarSection>
//             <ul className="top-nav">
//               <li>
//                 <span>Home</span>
//               </li>
//               <li>
//                 <span>Department</span>
//               </li>
//               <li>
//                 <span>Branch</span>
//               </li>
//               <li>
//                 <span>Help</span>
//               </li>
//             </ul>
//           </AppBarSection>

//           <AppBarSpacer />

//           <AppBarSection className="actions">
//             <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
//               <BadgeContainer>
//                 <SvgIcon icon={bellIcon} />
//                 <Badge shape="dot" themeColor="info" size="small" position="inside" />
//               </BadgeContainer>
//             </button>
//           </AppBarSection>

//           <AppBarSection>
//             <span className="k-appbar-separator" />
//           </AppBarSection>

//           <AppBarSection>
//             <Avatar type="image">
//               <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
//             </Avatar>
//           </AppBarSection>
//         </AppBar>

//         <div className="App">
//           {/* Your existing content */}
//           {/* <div className="addEmp">
//             <Button onClick={handleAddNewEmployee}>Add New Employee</Button>
//           </div> */}

//           {isAddFormOpen && (
//             <div className="addForm">
//               <h2 className="addEmp">Add New Employee</h2>
//               <label>Name:</label>
//               <input type="text" value={newEmployeeName} onChange={(e) => setNewEmployeeName(e.target.value)} />
//               <label>Department:</label>
//               <input type="text" value={newEmployeeDepartment} onChange={(e) => setNewEmployeeDepartment(e.target.value)} />
//               <label>Address:</label>
//               <input type="text" value={newEmployeeAddress} onChange={(e) => setNewEmployeeAddress(e.target.value)} />
//               <label>Phone:</label>
//               <input type="text" value={newEmployeePhone} onChange={(e) => setNewEmployeePhone(e.target.value)} />
//               <Button className="saveBtn" onClick={handleSaveNewEmployee}>Save</Button>
//             </div>
//           )}
//           <div className="addEmpBtn">
//             <Button className="empbtn" onClick={handleAddNewEmployee}>Add New Employee</Button>
//           </div>

//           {/* Rest of your content */}
//           <div className="Empgrid">
//             <Grid data={data.slice(pageState.skip, pageState.skip + pageState.take)}>
//               <Column field="name" title="Name" />
//               <Column field="department" title="Department" />
//               <Column field="address" title="Address" />
//               <Column field="phone" title="Phone" />
//               <Column
//                 title="Actions"
//                 width="200px"
//                 cell={(props) => (
//                   <td>
//                     <Button className="edit" onClick={() => handleEdit(props.dataItem)}>Edit</Button>
//                     <Button className="view" onClick={() => handleView(props.dataItem)}>View</Button>
//                     <Button className="delete" onClick={() => handleDelete(props.dataItem)}>Delete</Button>
//                   </td>
//                 )}
//               />
//             </Grid>
//             <Pager
//               skip={pageState.skip}
//               take={pageState.take}
//               total={data.length}
//               buttonCount={pageState.buttonCount}
//               info={pageState.info}
//               type={pageState.type}
//               pageSizes={pageState.pageSizes ? [5, 10, 20] : undefined}
//               previousNext={pageState.previousNext}
//               onPageChange={handlePageChange}
//             />
//           </div>

//           {isEditFormOpen && (
//             <div className="editForm">
//               <h2>Edit Employee</h2>
//               <label>Name:</label>
//               <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} required/>
//               <label>Department:</label>
//               <input type="text" value={editedDepartment} onChange={(e) => setEditedDepartment(e.target.value)} required/>
//               <label>Address:</label>
//               <input type="text" value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} required/>
//               <label>Phone:</label>
//               <input type="text" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} required/>
//               <Button className="saveBtn" onClick={handleUpdate}>Update</Button>
//               <Button className="saveBtn" onClick={handleCancelEdit}>Cancel</Button>
//             </div>
//           )}

//           {isViewDialogOpen && (
//             <Dialog title="Employee Details" onClose={handleViewDialogClose}>
//               <div>
//                 <p>Name: {viewedEmployee.name}</p>
//                 <p>Department: {viewedEmployee.department}</p>
//                 <p>Address: {viewedEmployee.address}</p>
//                 <p>Phone: {viewedEmployee.phone}</p>
//               </div>
//               <DialogActionsBar>
//                 <Button onClick={handleViewDialogClose}>Close</Button>
//               </DialogActionsBar>
//             </Dialog>
//           )}

//           {isDeleteConfirmationOpen && (
//             <Dialog title="Delete Confirmation" onClose={handleDeleteCanceled}>
//               <div>
//                 <p>Do you want to delete this row?</p>
//               </div>
//               <DialogActionsBar>
//                 <Button onClick={handleDeleteConfirmed}>Yes</Button>
//                 <Button onClick={handleDeleteCanceled}>No</Button>
//               </DialogActionsBar>
//             </Dialog>
//           )}
//         </div>
//       </div>

//     </React.Fragment>
//   );
// };

// export default App;











