import React, { Component } from 'react';

 

class Register extends Component {
  constructor(props) {
    super(props);

 

    this.state = {
      registerForm: {
        username: '',
        password: '',
        confirmpassword: '',
        address: {
          street: '',
          city: '',
          state: '',
          pincode: '',
        },
      },
    };
  }

 

  fillAddressData = () => {
    const pin = this.state.registerForm.address.pincode;
    console.log(pin);

 

    // Assuming you have a function to fetch address data
    // You can use fetch or Axios for API calls
    fetchAddressByPincode(pin)
      .then((resp) => resp.json())
      .then((data) => {
        const addressData = data.records[0];
        console.log(addressData.district);
        console.log(addressData.statename);

 

        this.setState({
          registerForm: {
            ...this.state.registerForm,
            address: {
              ...this.state.registerForm.address,
              city: addressData.district,
              state: addressData.statename,
            },
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

 

  submitRegister = () => {
    console.log(this.state.registerForm);
    const registerData = this.state.registerForm;

 

    // Assuming you have a function to handle registration
    // You can use fetch or Axios for API calls
    registerUser(registerData)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        alert(`Hi ${data.username}! You've successfully registered. Redirecting to login...`);

 

        this.setState({
          registerForm: {
            username: '',
            password: '',
            confirmpassword: '',
            address: {
              street: '',
              city: '',
              state: '',
              pincode: '',
            },
          },
        });

 

        // Use a React Router for navigation
        // import { useHistory } from 'react-router-dom';
        // const history = useHistory();
        // history.push('/login');
      })
      .catch((err) => {
        console.error(err);
      });
  };

 

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('address.')[1];
      this.setState((prevState) => ({
        registerForm: {
          ...prevState.registerForm,
          address: {
            ...prevState.registerForm.address,
            [addressField]: value,
          },
        },
      }));
    } else {
      this.setState({
        registerForm: {
          ...this.state.registerForm,
          [name]: value,
        },
      });
    }
  };

 

  render() {
    return (
<div className="blog-container">
<div className="blog-item">
          {/* You can place any content here */}
</div>
<div className="blog-item">
<section>
<p className="blog-header">Register</p>
<form onSubmit={this.submitRegister}>
<label htmlFor="username">Username</label>
<br />
<input
                type="text"
                id="username"
                name="username"
                value={this.state.registerForm.username}
                onChange={this.handleInputChange}
                placeholder="Enter username"
                required
                autoFocus
              />
<br />
<label htmlFor="password">Password</label>
<br />
<input
                type="password"
                id="password"
                name="password"
                value={this.state.registerForm.password}
                onChange={this.handleInputChange}
                placeholder="Enter password"
                required
              />
<br />
<label htmlFor="confirmpassword">Confirm password:</label>
<br />
<input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={this.state.registerForm.confirmpassword}
                onChange={this.handleInputChange}
                placeholder="Confirm password"
                required
              />
<br />
<div>
<label htmlFor="street">Street</label>
<br />
<input
                  type="text"
                  id="street"
                  name="address.street"
                  value={this.state.registerForm.address.street}
                  onChange={this.handleInputChange}
                />
<br />
<label htmlFor="city">City</label>
<br />
<input
                  type="text"
                  id="city"
                  name="address.city"
                  value={this.state.registerForm.address.city}
                  onChange={this.handleInputChange}
                />
<br />
<label htmlFor="state">State</label>
<br />
<input
                  type="text"
                  id="state"
                  name="address.state"
                  value={this.state.registerForm.address.state}
                  onChange={this.handleInputChange}
                />
<br />
<label htmlFor="pincode">Pincode</label>
<br />
<input
                  type="number"
                  maxLength="6"
                  minLength="6"
                  id="pincode"
                  name="address.pincode"
                  value={this.state.registerForm.address.pincode}
                  onChange={this.handleInputChange}
                  onBlur={this.fillAddressData}
                />
<br />
</div>
<input type="submit" value="Register" />
</form>
</section>
</div>
<div className="blog-item">
          {/* You can place any content here */}
</div>
</div>
    );
  }
}

 

export default Register;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const Register = () => {
//     const navigate = useNavigate();

//   const [registerForm, setRegisterForm] = useState({
//     username: '',
//     password: '',
//     confirmpassword: '',
//     address: {
//       street: '',
//       city: '',
//       state: '',
//       pincode: '',
//     },
//   });

//   const fillAddressData = () => {
//     const pin = registerForm.address.pincode;
//     //console.log(pin);

//     const addressApi = 'https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd';
//     const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

//     // Construct the API URL with the pincode and API key
//     const apiUrl = `${addressApi}?pincode=${pin}&api-key=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.records && data.records.length > 0) {
//           const addressData = data.records[0];
//           console.log(addressData.district);
//           console.log(addressData.statename);

//           setRegisterForm((prevForm) => ({
//             ...prevForm,
//             address: {
//               ...prevForm.address,
//               city: addressData.district,
//               state: addressData.statename,
//             },
//           }));
//         }
//       })
//       .catch((error) => {
//         // console.log(error);
//       });
//   };


//   const submitRegister = () => {
//     if (isRegisterFormValid(registerForm)) {
//       axios.post('https://jsonplaceholder.typicode.com/users', registerForm)
//         .then((response) => {
//           if (response.status === 201) {
//             console.log(response.data); 
//             alert(`Hi ${response.data.username}! You've successfully registered. Redirecting to login...`);
//             setRegisterForm({
//               username: '',
//               password: '',
//               confirmpassword: '',
//               address: {
//                 street: '',
//                 city: '',
//                 state: '',
//                 pincode: '',
//               },
//             });
           
//             navigate.push('/login');
//           }
//         })
//         .catch((error) => {
//           console.log(error);
         
//         });
//     }
//   };


//   const isRegisterFormValid = (form) => {
//     return form.username && form.password && form.password === form.confirmpassword;
//   };

//   const handleFormChange = (event) => {
//     const { name, value } = event.target;
//     setRegisterForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form>
//         <label htmlFor="username">Username</label>
//         <br />
//         <input
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Enter username"
//           value={registerForm.username}
//           onChange={handleFormChange}
//           required
//           autoFocus
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <br />
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter password"
//           value={registerForm.password}
//           onChange={handleFormChange}
//           required
//         />
//         <br />
//         <label htmlFor="confirmpassword">Confirm password:</label>
//         <br />
//         <input
//           type="password"
//           id="confirmpassword"
//           name="confirmpassword"
//           placeholder="Confirm password"
//           value={registerForm.confirmpassword}
//           onChange={handleFormChange}
//           required
//         />
//         <br />
//         <div>
//           <label htmlFor="street">Street</label>
//           <br />
//           <input
//             type="text"
//             id="street"
//             name="address.street"
//             value={registerForm.address.street}
//             onChange={handleFormChange}
//           />
//           <br />
//           <label htmlFor="city">City</label>
//           <br />
//           <input
//             type="text"
//             id="city"
//             name="address.city"
//             value={registerForm.address.city}
//             onChange={handleFormChange}
//           />
//           <br />
//           <label htmlFor="state">State</label>
//           <br />
//           <input
//             type="text"
//             id="state"
//             name="address.state"
//             value={registerForm.address.state}
//             onChange={handleFormChange}
//           />
//           <br />
//           <label htmlFor="pincode">Pincode</label>
//           <br />
//           <input
//             type="number"
//             maxLength="6"
//             minLength="6"
//             id="pincode"
//             name="address.pincode"
//             value={registerForm.address.pincode}
//             onChange={handleFormChange}
//           />
//           <br />
//           <button type="button" onClick={fillAddressData}>
//             Fill Address
//           </button>
//         </div>

//         <input type="submit" value="Register" onClick={submitRegister} />
//       </form>
//     </div>
//   );
// };

// export default Register;

// // const Register = () => {


// //     return (
// //         <div>
// //             <h1>Register</h1>
// //                 <form>
// //                 {/* <form [formGroup]="registerForm" (ngSubmit)="submitRegister()"> */}
// //                     <label for="username">Username</label>
// //                     <br />
// //                     <input type="text" id="username" formControlName="username" placeholder="Enter username" required
// //                         autofocus />
// //                     <br />
// //                     <label for="password">Password</label>
// //                     <br />
// //                     <input type="password" id="password" formControlName="password" placeholder="Enter password" required />
// //                     <br />
// //                     <label for="confirmpassword">Confirm password:</label>
// //                     <br />
// //                     <input type="password" id="confirmpassword" formControlName="confirmpassword"
// //                         placeholder="Confirm password" required />
// //                     <br />
// //                     <div formGroupName="address">
// //                         <label for="street">Street</label>
// //                         <br />
// //                         <input type="text" id="street" formControlName="street" />
// //                         <br />
// //                         <label for="city">City</label>
// //                         <br />
// //                         <input type="text" id="city" formControlName="city" />
// //                         <br />
// //                         <label for="state">State</label>
// //                         <br />
// //                         <input type="text" id="state" formControlName="state" />
// //                         <br />
// //                         <label for="pincode">Pincode</label>
// //                         <br />
// //                         <input type="number" maxlength="6" minlength="6" id="pincode" formControlName="pincode"
// //                             // (change)="fillAddressData()" 
// //                             />
// //                         <br />
// //                     </div>

// //                     <input type="submit" value="Register" />
// //             </form>
// //         </div>
// //     );
// // };

// // export default Register;