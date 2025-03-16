import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { useGetAllPostsQuery } from "../generated/graphql-types";

const HomePage = () => {
  const { loading, error, data } = useGetAllPostsQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data) {
    console.log(data);
    return (
      <>
        <div className="flex justify-center mb-10">
          <Link to="/post/new">
            <button className="bg-[#4c7d48] p-2 rounded-full text-white">
              Publier une photo
            </button>
          </Link>
        </div>
        <section className="flex justify-evenly flex-wrap">
          {data.getAllPosts.map((post) => (
            <PostCard
              id={post.id}
              titre={post.titre}
              residents={post.residents ?? []}
              photo={post.photo}
              commentaires={post.comments?.length ?? 0}
            />
          ))}
        </section>
      </>
    );
  }
};
export default HomePage;
