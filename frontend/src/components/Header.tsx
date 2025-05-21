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
  if (userInfos.data?.getUserInfo.isLoggedIn) {
    return (
      <header className="h-48 pr-5 pl-5 w-screen ">
        <div className=" h-full flex flex-row justify-between items-center">
          <div className="w-1/5 ">
            <a href="/" className="">
              <img src="/images/test3.png"></img>
            </a>
          </div>
          <div className="w-3/5 text-center">
            <h1 className="text-5xl text-[#4c7d48] font-bold">TAMARIS BLOG</h1>
          </div>
          <div className="flex flex-col w-1/5 items-end">
            <button
              className="bg-[#4c7d48] w-1/2 p-3 rounded-full text-white "
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
