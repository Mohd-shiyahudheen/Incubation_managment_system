
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Login from './components/Screens/Login/Login';
import Landing from './components/Screens/Landing/Landing';
import Register from './components/Screens/Register/Register'
import AdminHome from './components/Admin/Page/AdminHome/AdminHome';
import AdminLogin from './components/Admin/Page/AdminLogin/AdminLogin';
import UserManage from './components/Admin/Page/UserManage/UserManage';
import Application from './components/Screens/Application/Application';
import Submit from './components/Screens/SubmitPage/Submit';
import ApplicationList from './components/Admin/Page/ApplicationList/ApplicationList';
import BookingSlot from './components/Admin/Page/BookingSlot/BookingSlot';
import ViewApplication from './components/Admin/Page/ViewApplications/ViewApplication';
import Status from './components/Screens/Status/Status';
import Approved from './components/Admin/Page/ApprovedApp/Approved';
import Rejected from './components/Admin/Page/RejectedApp/Rejected';
import Processed from './components/Admin/Page/ProcessedApp/Processed';



const App = () => {
  return (

    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/application' element={<Application />}></Route>
          <Route path='/submit' element={<Submit />}></Route>
          <Route path='/status' element={<Status />}></Route>


          <Route path='/admin/home' element={<AdminHome/>}></Route>
          <Route path='/admin' element={<AdminLogin/>}></Route>
          <Route path='/admin/user' element={<UserManage/>}></Route>
          <Route path='/admin/application' element={<ApplicationList/>}></Route>
          <Route path='/admin/booking' element={<BookingSlot/>}></Route>
          <Route path='/admin/view/:companyId' element={<ViewApplication />}></Route>
          <Route path='/admin/approved' element={<Approved/>}></Route>
          <Route path='/admin/rejected' element={<Rejected />}></Route>
          <Route path='/admin/processed' element={<Processed/>}></Route>






        </Routes>
      </main>

    </Router>
  )
}

export default App;
