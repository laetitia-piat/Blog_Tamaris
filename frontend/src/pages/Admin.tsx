import { useGetUserInfoQuery } from "../generated/graphql-types";

const Admin = () => {
  const userInfos = useGetUserInfoQuery();

  if (userInfos.data?.getUserInfo.role === "ADMIN") {
    return (
      <div>
        <h3>PAGE ADMIN</h3>
        {/*  {userInfos.data.getUserInfo.map((user) => ())} */}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-screen justify-center">
        <h3 className="text-center text-6xl">ERROR 404</h3>
        <p className="text-center">Cette page n'existe pas!</p>
      </div>
    );
  }
};

export default Admin;
