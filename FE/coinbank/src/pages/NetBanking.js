import { useFormik } from "formik";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { netBankingSchema } from "../schemas";
import userService from "../service/user.service";

const initialValues = {
  accno: "",
  username: "",
  password: "",
};

const NetBanking = () => {
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: netBankingSchema,
      onSubmit: (values, action) => {
        userService
          .createNetBanking(values)
          .then((res) => {
            console.log(res.data);
            sMsg("Netbanking Created Sucessfully");
          })
          .catch((error) => {
            console.log(error);
            eMsg(error.response.data);
          });
        action.resetForm();
      },
    });

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
    <Wrapper>
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
      <div className="container-fluid backimg">
        <div className="row">
          <div class="col-md-4 offset-md-4 mt-4 ">
            <div class="card paint-card">
              <div class="card-header">
                <h5 class="text-center text-primary">Net Banking</h5>
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label >Account Number</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="accno"
                      value={values.accno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.accno && touched.accno ? (
                      <p className="text-danger">{errors.accno}</p>
                    ) : null}
                  </div>

                  <div class="form-group mt-3">
                    <label >User name</label>{" "}
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <p className="text-danger">{errors.username}</p>
                    ) : null}
                  </div>

                  <div class="form-group mt-3">
                    <label >Password</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-danger">{errors.password}</p>
                    ) : null}
                  </div>

                  <div class="form-group mt-3">
                    <label >Confirm Password</label>
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmpassword && touched.confirmpassword ? (
                      <p className="text-danger">{errors.confirmpassword}</p>
                    ) : null}
                  </div>

                  <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary col-md-12">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.backimg {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("../img/bank.png");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
`;
export default NetBanking;
