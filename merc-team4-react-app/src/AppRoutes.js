import { BrowserRouter, Route, Routes } from "react-router-dom";
const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar />
                </div>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="blog-details" element={<BlogDetails />} />
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
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes; 