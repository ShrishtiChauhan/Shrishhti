//app-routes Divya
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Toolbar from "./components/Toolbar";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import CommentList from "./components/CommentList";
import EditProfile from "./components/EditProfile";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import WriteBlog from "./components/WriteBlog";
import WriteComment from "./components/WriteComment";
import WriterDetails from "./components/WriterDetails";
import Page404 from "./components/Page404";


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar />
                </div>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="blog-details/:id" element={<BlogDetails />} />
                    <Route path="all-blogs" element={<BlogList />} />
                    <Route path="comments" element={<CommentList />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="register" element={<Register />} />
                    <Route path="user-profile" element={<UserProfile />} />
                    <Route path="write-blog" element={<WriteBlog />} />
                    <Route path="write-comment" element={<WriteComment />} />
                    <Route path="writer-details" element={<WriterDetails />} />
                    <Route exact path="" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
                {/* <div>
                    <Footer />
                </div> */}
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes; 