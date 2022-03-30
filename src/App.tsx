import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentForm from "./pages/StudentForm";
import StudentTable from "./pages/StudentTable";
import { Student } from "./types/student";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const defualtStudent: Student = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://6239721f63fdd477ac12c41b.mockapi.io/student"
      );
      setStudents(response.data);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentTable studentsList={students} />} />
          <Route
            path="/form"
            element={<StudentForm student={defualtStudent} />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
