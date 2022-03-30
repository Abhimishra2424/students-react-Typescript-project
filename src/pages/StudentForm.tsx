import { FC, useState } from "react";
import { Student } from "../types/student";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface StudentFormProps {
  student: Student;
}

const StudentForm: FC<StudentFormProps> = (props) => {
  const { student } = props;
  const navigation = useNavigate();
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phone);
  const [address, setAddress] = useState(student.address);
  const [gender, setGender] = useState(student.gender);

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    var payload = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      address,
    };
    const { data } = await axios.post(
      "https://6239721f63fdd477ac12c41b.mockapi.io/student",
      payload
    );
    if (data) {
      navigation("/");
      window.location.reload();
    }
    console.log("data", data);
  };

  return (
    <div className="container">
      <h1>Student Form</h1>
      <hr></hr>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                phone
              </label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Address
              </label>
              <textarea
                className="form-control"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="exampleFormControlTextarea1"
                rows={3}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
