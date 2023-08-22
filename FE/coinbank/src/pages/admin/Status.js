import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import accountService from "../../service/account.service";

const Status = () => {
  const [acc, setAcc] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    accountService
      .getAllPendingAccount()
      .then((res) => {
        console.log(res.data);
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

  const updateStatus = (id, sts) => {
    const st = window.confirm("Are you sure " + sts + " account");
    if (st) {
      accountService
        .accountSatusUpdate(id, sts)
        .then((res) => {
          if (res.data === "Account Approved successfully") {
            sMsg(res.data);
            init();
          } else {
            eMsg(res.data);
            init();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const sMsg = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const eMsg = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div class="card mt-3">
        <div class="card-body">
          <div class="card-header text-center bg-white">
            <h3>Account Status</h3>
          </div>
          <table class="table ">
            <thead class=" ">
              <tr className="text-center">
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
                  <td>{num + 1}</td>
                  <td>
                    <span class="text-danger">Account Not Approved</span>
                  </td>

                  <td>
                    {a.firstName} {a.lastName}
                  </td>
                  <td>{a.email}</td>
                  <td>{a.mobNo}</td>
                  <td>
                    <button
                      onClick={() => viewAccount(a.id)}
                      class="btn btn-sm btn-primary"
                    >
                      view
                    </button>
                    <button
                      onClick={() => updateStatus(a.id, "Approved")}
                      href="#"
                      class="btn btn-sm btn-success ms-1"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(a.id, "Reject")}
                      class="btn btn-sm btn-danger ms-1"
                    >
                      Reject
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

export default Status;
