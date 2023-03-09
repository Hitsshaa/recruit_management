import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/common/Layout";
import Login from "./pages/login&register/Login";
import Register from "./pages/login&register/Register";

import DashBoard from "./pages/recruit/dashboard/DashBoard";
import Candidates from "./pages/recruit/candidates/Candidates";
import Jobs from "./pages/recruit/jobs/Jobs";

import CandidateSkill from "./pages/manageLookups/candidateSkill/CandidateSkill";
import ExperienceLevel from "./pages/manageLookups/experienceLevel/ExperienceLevel";
import AssessmentStages from "./pages/manageLookups/assessmentStages/AssessmentStages";
import JobTypes from "./pages/manageLookups/jobTypes/JobTypes";

import General from "./pages/adminstartion/general/General";
import Users from "./pages/adminstartion/users/Users";
import Roles from "./pages/adminstartion/roles/Roles";
import Departments from "./pages/adminstartion/department/Departments";

import Error404 from "./pages/errorPage/Error404";

import Test from "./pages/test/Test";
import DataTable from "./pages/test/DataTable";
import Datatable2 from "./pages/test/Datatable2";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dt" element={<DataTable />} />
          <Route path="/dt1" element={<Datatable2 />} />

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/candidates" element={<Candidates />} />

            <Route path="/assessmentStages" element={<AssessmentStages />} />
            <Route path="/candidateSkills" element={<CandidateSkill />} />
            <Route path="/experienceLevel" element={<ExperienceLevel />} />
            <Route path="/jobTypes" element={<JobTypes />} />

            <Route path="/general" element={<General />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/departments" element={<Departments />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
