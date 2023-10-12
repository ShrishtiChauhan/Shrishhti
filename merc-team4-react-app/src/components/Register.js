const Register = () => {
    return (
        <div>
            <h1>Register</h1>
                <form>
                {/* <form [formGroup]="registerForm" (ngSubmit)="submitRegister()"> */}
                    <label for="username">Username</label>
                    <br />
                    <input type="text" id="username" formControlName="username" placeholder="Enter username" required
                        autofocus />
                    <br />
                    <label for="password">Password</label>
                    <br />
                    <input type="password" id="password" formControlName="password" placeholder="Enter password" required />
                    <br />
                    <label for="confirmpassword">Confirm password:</label>
                    <br />
                    <input type="password" id="confirmpassword" formControlName="confirmpassword"
                        placeholder="Confirm password" required />
                    <br />
                    <div formGroupName="address">
                        <label for="street">Street</label>
                        <br />
                        <input type="text" id="street" formControlName="street" />
                        <br />
                        <label for="city">City</label>
                        <br />
                        <input type="text" id="city" formControlName="city" />
                        <br />
                        <label for="state">State</label>
                        <br />
                        <input type="text" id="state" formControlName="state" />
                        <br />
                        <label for="pincode">Pincode</label>
                        <br />
                        <input type="number" maxlength="6" minlength="6" id="pincode" formControlName="pincode"
                            // (change)="fillAddressData()" 
                            />
                        <br />
                    </div>

                    <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;