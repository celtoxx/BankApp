// RequestResetComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const apiUrl = "http://localhost:9000";

function RequestResetComponent() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [otp, setOtp] = useState('');
    const [cnfpassword, setcnfPassword] = useState('');
    const [cnf2password, setcnf2Password] = useState('');
    const [verifiedOTP,setverifiedOTP]=useState(false);
    const [chkotp, setchkOtp] = useState('');
    const [customer,setCustomer]=useState({name:'',password:'',email:''})

    const navigate = useNavigate();
    var x=11111111;
    const handleRequestReset = async (e) => {
        e.preventDefault();
        try {
            if (!email)
                alert("Email can not be empty")
            else {
                var response = await axios.post(`${apiUrl}/verifyOtp`, { email });
                console.log(response.data);
                setchkOtp(response.data.otp);
                setMessage('OTP sent to your email.');

            }
        } catch (error) {
            setMessage('Error sending OTP.'+error);
        }
    };

    const verifyotp = () => {
        
        
            if(chkotp===otp)
            {
                setverifiedOTP(true)
                console.log(verifiedOTP);
                alert('Otp verified...');
            }
            else
            {
                alert('Invalid Otp....');
            }
            
           console.log(verifiedOTP);
        
           
        }
    

   const changePass=()=>{

        if(verifiedOTP&&(cnfpassword===cnf2password))
        {
            const updatedCustomer = {
                name: 'John Doe',
                password: 'newPassword',
                email: 'john@example.com'
              };
            setCustomer(updatedCustomer)
            console.log(customer);
        var response = axios.post(`${apiUrl}/changepassword`, { customer});
        navigate('/login');
        }

    }

    return (
        <div>
            <h2 align="center">Forgot Password</h2>
            <form align="center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <button type="button" onClick={handleRequestReset}>Send OTP</button>
                <br></br><br></br>
                <input
                    type="text"
                    placeholder="Enter your otp"
                    value={otp}
                    onChange={(e) => {setOtp(e.target.value)}}

                />
                <button type="button" onClick={verifyotp}>Verify OTP</button>
                <br></br><br></br>
                New Password:
                <input type="password" value={cnfpassword} onChange={(e)=>{setcnfPassword(e.target.value)}}/>
                <br></br><br></br>
                Confirm Password:
                <input type="password" value={cnf2password} onChange={(e)=>{setcnf2Password(e.target.value)}} />
                <br></br><br></br>
                <button type="button" onClick={changePass}>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default RequestResetComponent;
