import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import accountService from "../../service/account.service";
import userService from "../../service/user.service";

const ViewEmp = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    userService
      .getAllEmp()
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="card mt-3">
        <div class="card-body">
          <div class="card-header text-center bg-white">
            <h3>All Account</h3>
          </div>
          <table class="table text-center">
            <thead class=" ">
              <tr>
                <th scope="col">SL No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                <th scope="col">Username</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {emp.map((e, num) => (
                <tr className="text-center">
                  <td>{num + 1}</td>
                  <td>{e.firstName + " " + e.lastName}</td>

                  <td>{e.email}</td>
                  <td>{e.mobNo}</td>
                  <td>{e.username}</td>
                  <td>
                    {e.address},{e.city}
                    <br />
                    {e.state},{e.pincode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewEmp;
