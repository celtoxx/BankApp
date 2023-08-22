import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import accountService from "../../service/account.service";

const ViewTransaction = () => {
  const [st, setSt] = useState(false);

  const [accno, setAccno] = useState();

  const [transDtls, setTransDtls] = useState([]);

  const hanleInput = (e) => {
    setAccno(e.target.value);
  };

  const searchAcc = (e) => {
    e.preventDefault();

    accountService
      .getTransaction(accno)
      .then((res) => {
        if (res.data === "Account Number Invalid") {
          eMsg(res.data);
          setTransDtls([]);
        } else  {
          setSt(true);
          setTransDtls(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div class="card-header bg-white">
          <h3 class="text-center">View Transaction</h3>
        </div>
        <div class="card-body">
          <div class="col-md-5 offset-md-4 mt-2">
            <form class="form-inline" onSubmit={(e) => searchAcc(e)}>
              <div className="row">
                <div class="col-md-8 mb-2">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Enter Account No"
                    name="accno"
                    onChange={(e) => hanleInput(e)}
                    value={accno}
                  />
                </div>
                <div className="col">
                  <button type="submit" class="btn btn-primary mb-2">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr />
          {transDtls.length > 0 && (
            <table class="table table-bordered">
              <thead class=" ">
                <tr className="text-center">
                  <th scope="col">Sl No</th>
                  <th scope="col">Account No</th>
                  <th scope="col">Trans Type</th>
                  <th scope="col">Details</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {transDtls.map((t, num) => (
                  <tr className="text-center">
                    <th>{num + 1}</th>
                    <td>
                      <span>{t.accountno}</span>
                    </td>
                    <td>{t.transType}</td>
                    <td>{t.transDtls}</td>
                    <td>{t.amount}</td>
                    <td>{t.date}</td>
                    <td>{t.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewTransaction;
