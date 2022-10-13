 
import './App.css';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage'; 
import StudentRegisterPage from './components/RegisterPage/StudentRegisterPage';
import TeacherRegisterPage from './components/RegisterPage/TeacherRegisterPage';
import TaskComponent from './components/TaskComponent/TaskComponent';
import ChangePassword from './pages/ChangePassword';
import EditProfile from './pages/EditProfile';
import TasksPage from './pages/TasksPage';

function App() {
  return (
     <>
       {/* <HomePage/> */}
       {/* <LoginPage/> */}
       {/* <StudentRegisterPage/> */}
      {/* <TeacherRegisterPage/> */}
      {/* <StudentDashboard/> */}
      {/* <TasksPage/> */}
      {/* <EditProfile/> */}
      {/* <ChangePassword/> */}
      <TaskComponent/>
     </>
  );
}

export default App;
