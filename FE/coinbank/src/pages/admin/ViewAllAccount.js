import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import accountService from "../../service/account.service";

const ViewAllAccount = () => {
  const [acc, setAcc] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    accountService
      .getAllApproveAccount()
      .then((res) => {
        setAcc(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const viewAccount = (id) => {
    const st = window.confirm("Do you want view Account Details");
    if (st) {
      navigate("/admin/viewAccount/" + id);
    }
  };

  return (
    <>
      <div class="card">
        <div class="card-body">
          <div class="card-header text-center bg-white">
            <h3>All Account</h3>
          </div>
          <table class="table text-center">
            <thead class=" ">
              <tr>
                <th scope="col">SL No</th>
                <th scope="col">Account No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {acc.map((a, num) => (
                <tr className="text-center">
                  <td>{num+1}</td>
                  <td>
                    <span class="text-primary">{a.accountNum}</span>
                  </td>

                  <td>
                    {a.firstName} {a.lastName}
                  </td>
                  <td>{a.email} </td>
                  <td>{a.mobNo}</td>

                  <td>
                    <button
                      onClick={() => viewAccount(a.id)}
                      class="btn btn-sm btn-primary"
                    >
                      view
                    </button>
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

export default ViewAllAccount;
