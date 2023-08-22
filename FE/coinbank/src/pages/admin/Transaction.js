import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import accountService from "../../service/account.service";

const Transaction = () => {
  const [st, setSt] = useState(false);

  const [accno, setAccno] = useState();

  const [accDtls, setAccDtls] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobNo: "",
    accountNum: "",
    accBal: "",
  });

  const [trans, setTrans] = useState({
    transType: "--select--",
    amount: "",
    accno: "",
  });

  const transInput = (e) => {
    const { name, value } = e.target;
    setTrans({ ...trans, [name]: value });
  };

  const hanleInput = (e) => {
    setAccno(e.target.value);
  };

  const searchAcc = (e) => {
    e.preventDefault();

    accountService
      .getAccountDetails(accno)
      .then((res) => {
        if (res.data === "Account Number Invalid") {
          eMsg(res.data);
          setAccDtls({
            firstName: "",
            lastName: "",
            email: "",
            mobNo: "",
            accountNum: "",
            accBal: "",
          });
        } else {
          setSt(true);
          setAccDtls(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const doTransaction = (e) => {
    e.preventDefault();
    trans.accno = accDtls.accountNum;

    accountService
      .doTransactionByAdmin(trans)
      .then((res) => {
        if (res.data === "insufficent Balance") {
          eMsg(res.data);
        } else if (res.data === "Transaction success") {
          sMsg(res.data);
          setSt(false);
          setTrans({
            transType: "--select--",
            amount: "",
            accno: "",
          });
          setAccno("");
        } else {
          eMsg(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(trans);
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
          <h3 class="text-center">Transaction</h3>
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
                    name="accNum"
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

          {!st && (
            <form action="" method="post">
              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  First Name
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                  />
                </div>

                <label
                  for="colFormLabel"
                  class="col-sm-2  col-form-label col-form-label"
                >
                  Last Name
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                  />
                </div>
              </div>

              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Email
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                  />
                </div>

                <label
                  for="colFormLabel"
                  class="col-sm-2  col-form-label col-form-label"
                >
                  Phone No
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                  />
                </div>
              </div>

              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Transaction Type
                </label>
                <div class="col-sm-3">
                  <select class="form-control " name="transType">
                    <option>--Select--</option>
                    <option>Credit</option>
                    <option>Debit</option>
                  </select>
                </div>

                <label
                  for="colFormLabel"
                  class="col-sm-2 col-form-label col-form-label"
                >
                  Amount
                </label>
                <div class="col-sm-3">
                  <input
                    type="number"
                    class="form-control form-control"
                    id="colFormLabel"
                    name="amount"
                  />
                </div>
              </div>

              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Total Amount
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                  />
                </div>
              </div>

              <div class="text-center mt-3">
                <button class="btn btn-primary ">Submit</button>
              </div>
            </form>
          )}

          {st && (
            <form onSubmit={(e) => doTransaction(e)}>
              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Account No
                </label>
                <div class="col-sm-3">
                  <input
                    name="accno"
                    type="email"
                    class="form-control form-control"
                    readonly="readonly"
                    value={accDtls.accountNum}
                  />
                </div>

                <label
                  for="colFormLabel"
                  class="col-sm-2  col-form-label col-form-label"
                >
                  Full Name
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                    value={accDtls.firstName + accDtls.lastName}
                  />
                </div>
              </div>

              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Email
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                    value={accDtls.email}
                  />
                </div>

                <label
                  for="colFormLabel"
                  class="col-sm-2  col-form-label col-form-label"
                >
                  Phone No
                </label>
                <div class="col-sm-3">
                  <input
                    type="email"
                    class="form-control form-control"
                    id="colFormLabel"
                    readonly="readonly"
                    value={accDtls.mobNo}
                  />
                </div>
              </div>

              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Transaction Type
                </label>
                <div class="col-sm-3">
                  <select
                    class="form-control"
                    name="transType"
                    onChange={(e) => transInput(e)}
                    value={trans.transType}
                  >
                    <option value="select">--Select--</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                  </select>
                </div>

                <label
                  for="colFormLabel"
                  class="col-sm-2 col-form-label col-form-label"
                >
                  Amount
                </label>
                <div class="col-sm-3">
                  <input
                    type="number"
                    class="form-control form-control"
                    name="amount"
                    id="colFormLabel"
                    required
                    onChange={(e) => transInput(e)}
                    value={trans.amount}
                  />
                </div>
              </div>

              <div class="form-group row mt-3">
                <label
                  for="colFormLabel"
                  class="col-sm-2 offset-sm-1 col-form-label col-form-label"
                >
                  Total Amount
                </label>
                <div class="col-sm-3">
                  <input
                    type="text"
                    class="form-control form-control"
                    name="tbalance"
                    readonly="readonly"
                    value={accDtls.accBal.totalBalance}
                  />
                </div>
              </div>

              <div class="text-center mt-3">
                <button class="btn btn-primary ">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Transaction;
