import { gql, useQuery } from "@apollo/client";
import PostCard, { PostCardProps } from "../components/PostCard";

const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      id
      resident
      titre
      photo
    }
  }
`;
const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data)
    return (
      <section className="Posts-list">
        {data.getAllPosts.map((post: PostCardProps) => (
          <PostCard
            id={post.id}
            titre={post.titre}
            resident={post.resident}
            photo={post.photo}
          />
        ))}
      </section>
    );
};
export default HomePage;
