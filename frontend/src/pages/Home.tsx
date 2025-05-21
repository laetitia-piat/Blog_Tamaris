import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import {
  useGetAllPostsQuery,
  useGetUserInfoQuery,
} from "../generated/graphql-types";

const HomePage = () => {
  const { loading, error, data } = useGetAllPostsQuery();
  const userInfos = useGetUserInfoQuery();
  console.log(userInfos.data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data && userInfos.data?.getUserInfo.isLoggedIn) {
    return (
      <>
        <div className="flex justify-center mb-10 mt-15">
          <Link to="/post/new">
            <button className="bg-[#4c7d48] p-2 rounded-full text-white">
              Publier une photo
            </button>
          </Link>
        </div>
        <section className="flex justify-evenly flex-wrap">
          {data.getAllPosts.map((post) => (
            <div className="bg-[#fafaf2] mb-10 mr-5 max-w-[288px] ">
              <PostCard
                id={post.id}
                titre={post.titre}
                residents={post.residents ?? []}
                photo={post.photo}
                commentaires={post.comments?.length ?? 0}
              />
            </div>
          ))}
        </section>
      </>
    );
  } else {
    return (
      <div
        className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/tamaris_background.png')",
        }}
      >
        <h1 className="text-6xl text-[#3c5c39] font-bold">
          Bienvenu sur le blog des Tamaris
        </h1>
        {/* <Link to="/login">
          <button className="bg-[#4c7d48] p-3 w-32 rounded-full text-white text-2xl mt-20">
            Login
          </button>
        </Link> */}
      </div>
    );
  }
};
export default HomePage;
