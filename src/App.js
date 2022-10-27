import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import StudentRegisterPage from "./components/RegisterPage/StudentRegisterPage";
import TeacherRegisterPage from "./components/RegisterPage/TeacherRegisterPage";
import TaskComponent from "./components/TaskComponent/TaskComponent";
import ChangePassword from "./pages/ChangePassword"; 
import TaskPage from "./pages/TaskPage";
import TasksPage from "./pages/TasksPage";
import React from "react";
import EditProfileT from "./pages/EditProfileT";
import EditProfileS from "./pages/EditProfileS";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student-reg" element={<StudentRegisterPage />} />
        <Route path="/teacher-reg" element={<TeacherRegisterPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/edit-profile-t" element={<EditProfileT />} />
        <Route path="/edit-profile-s" element={<EditProfileS />} />
        <Route path="/taskpage" element={<TaskPage />} />
        <Route path="/taskspage" element={<TasksPage />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

export default App;
