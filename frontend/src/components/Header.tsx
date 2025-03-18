import { Link } from "react-router-dom";
import {
  useGetUserInfoQuery,
  useLogoutMutation,
} from "../generated/graphql-types";
import { GET_USER_INFOS } from "../graphql/queries";

const Header = () => {
  const userInfos = useGetUserInfoQuery();
  console.log(userInfos.data);
  const [logout] = useLogoutMutation({
    refetchQueries: [{ query: GET_USER_INFOS }],
  });
  const { error, loading, data } = useGetUserInfoQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <header className="mb-15">
      <div className="flex flex-row justify-between items-center">
        <div>
          <a href="/" className="">
            <img src="../public/images/cropped-AFTC_Logo-190x189.jpg"></img>
          </a>
        </div>
        <div>
          <h1 className="text-5xl text-[#4c7d48] font-bold">TAMARIS BLOG</h1>
        </div>
        <div className="flex flex-col">
          {userInfos.data?.getUserInfo.isLoggedIn ? (
            <button
              className="bg-[#4c7d48] p-2  rounded-full text-white"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                className="bg-[#4c7d48] p-2 w-32  rounded-full text-white"
                onClick={() => {}}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
