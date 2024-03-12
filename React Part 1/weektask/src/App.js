import './App.css';
import Sidebar from './Sidebar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import PaginationExample from './PaginationExample';


function App() {
  return (
    <>
    
    <div className="app-container">
    <Sidebar />
      <Card />
      <PaginationExample />
    </div>
    </>
  );
}



export default App;
