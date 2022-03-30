import { FC} from "react";
import { Student } from "../types/student";

interface StudentTableProps {
  studentsList: Student[];
}

const StudentTable: FC<StudentTableProps> = (props) => {
  const { studentsList } = props;
  return (
    <div className="container">
      <div>
        <h1>Student Table</h1>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((i) => {
              return (
                <tr key={i.id}>
                  <th scope="row">1</th>
                  <td>{i.firstName}</td>
                  <td>{i.lastName}</td>
                  <td>{i.email}</td>
                  <td>{i.address}</td>
                  <td>{i.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
