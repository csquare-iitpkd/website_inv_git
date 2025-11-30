// App.jsx

import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Facilities from './pages/facilities';
import LogRegistration from './pages/log_registration';
import TASchedule from './pages/ta_schedule';
import ExternalUserRegistration from './pages/external_user_register';
// import Projects from './pages/projects';
// import ReadMore from './pages/read_more';
// import AdminConfig from './components/adminconfig';
// import AdminLoginPage from './pages/admin_login_page';
// import AdminDashboard from "./pages/admin_page";
import Guidline from "./pages/guideLine"
// Import new pages and components
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import Login from './components/auth/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import Layout from './components/Layout'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="facilities" element={<Facilities />} /> 
          <Route path="log_registration" element={<LogRegistration />} /> 
          <Route path="ta_schedule" element={<TASchedule />} /> 
          <Route path="guidline" element={<Guidline/>} />
          {/* <Route path="projects" element={<Projects />} /> 
          <Route path="read-more/:projectId" element={<ReadMore />} />
          <Route path="external_user_register" element={<ExternalUserRegistration />} /> 
          <Route path="adminconfig" element={<AdminConfig />} /> 
          <Route path="admin_login_page" element={<AdminLoginPage />} /> 
          <Route path="admin_page" element={<AdminDashboard />} />  */}

          {/* New Project Routes */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              // <ProtectedRoute>
                <DashboardPage />
              // </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
