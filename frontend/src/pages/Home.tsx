import PostCard from "../components/PostCard";
import { useGetAllPostsQuery } from "../generated/graphql-types";

const HomePage = () => {
  const { loading, error, data } = useGetAllPostsQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data) {
    return (
      <section className="Posts-list">
        {data.getAllPosts.map((post) => (
          <PostCard
            id={post.id}
            titre={post.titre}
            resident={post.resident}
            photo={post.photo}
          />
        ))}
      </section>
    );
  }
};
export default HomePage;
