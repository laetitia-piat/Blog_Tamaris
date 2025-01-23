import { useEffect, useState } from "react";
import axios from "axios";
import PostCard, { PostCardProps } from "../components/PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/posts");
        setPosts(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="Posts-list">
      {posts.map((post) => (
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
