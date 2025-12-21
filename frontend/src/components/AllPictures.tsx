import { useGetAllPostsQuery } from "../generated/graphql-types";
import PostCard from "./PostCard";

const AllPictures = () => {
  const { loading, error, data } = useGetAllPostsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  if (data) {
    return (
      <section className="flex justify-evenly flex-wrap">
        {data.getAllPosts.map((post) => (
          <div className="bg-[#f7f0e1] flex rounded-2xl mr-5 mb-5 max-w-[288px] ">
            <PostCard
              id={post.id}
              titre={post.titre}
              residents={(post.residents ?? []).map((r) => ({
                id: r.id,
                name: r.name ?? "",
              }))}
              photo={post.photo}
              commentaires={post.comments?.length ?? 0}
            />
          </div>
        ))}
      </section>
    );
  }
};
export default AllPictures;
