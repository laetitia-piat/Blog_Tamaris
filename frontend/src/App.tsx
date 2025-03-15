import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import NewPostForm from "./pages/NewPostForm";
import PostDetail from "./pages/PostDetail";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="post/new" element={<NewPostForm />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
export default App;
