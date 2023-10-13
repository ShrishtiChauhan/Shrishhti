import { Link } from "react-router-dom";

const Toolbar = () => {

    return (
        <div>
            <Link to="home">Home</Link>
            {/* <Link to="">Blog of the Day</Link> */}
            <Link to="all-blogs">Blog List</Link>

            <Link to="login">Login</Link>
            <Link to="logout">Logout</Link>
            <Link to="register">Register</Link>
            <Link to="edit-profile">Profile</Link>


        </div>
    );
};

export default Toolbar;