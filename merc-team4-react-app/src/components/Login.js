const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
            {/* <form onSubmit={submitGetEmpById}> */}
                    <input type="text" name="username"
                        // value={eidToSearch} onChange={handleGetEmpById}
                        placeholder="username" required />
                        <br />
                    <input type="password" name="password"
                        // value={eidToSearch} onChange={handleGetEmpById}
                        placeholder="password" required />
                        <br />
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default Login;