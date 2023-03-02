import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import TableData from './Components/TableData';
import { Navigate,BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import PrivateRoutes from './Components/PrivateRoutes';
import { useState } from 'react';

function App() {
  const[logStatus,setLogStatus] = useState("");
  const[array,setArray]= useState([]);

  const datas =[{status:'New',name:'Rohan',email:'rohan@gmail.com',phone:'055565478',country:'UAE',interest:'BurjKhalifa',source:'Instagram',date:'02-03-2023',remarks:'He want to buy'},
{status:'New',name:'Rohan',email:'rohan@gmail.com',phone:'055565478',country:'UAE',interest:'BurjKhalifa',source:'Instagram',date:'02-03-2023',remarks:'He want to buy'},
{status:'New',name:'Rohan',email:'rohan@gmail.com',phone:'055565478',country:'UAE',interest:'BurjKhalifa',source:'Instagram',date:'02-03-2023',remarks:'He want to buy'},
{status:'Contacted',name:'Rohan',email:'rohan@gmail.com',phone:'055565478',country:'UAE',interest:'BurjKhalifa',source:'Instagram',date:'02-03-2023',remarks:'He want to buy'},
{status:'No Answer',name:'Rohan',email:'rohan@gmail.com',phone:'055565478',country:'UAE',interest:'BurjKhalifa',source:'Instagram',date:'02-03-2023',remarks:'He want to buy'}];

   

  return (
    <Router>
    <div className="App">
      <Routes><Route path='/' element={<LoginForm/>} />
      <Route  element={<PrivateRoutes lstat={logStatus} setlstat={setLogStatus}/>}>
        <Route path='/mainPage' element={<TableData tdata={datas} alist={array} alistSet={setArray}/>} />
        <Route path='/register' element={<RegisterForm alist={array} alistSet={setArray} />}/>
      </Route>
      <Route path='/login' element={<LoginForm  lstat={logStatus} setlstat={setLogStatus} />} />
      <Route path="*" element={<PageNotFound/>} />
   

      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
