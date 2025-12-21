import { useEffect } from "react";
import { useGetPostsByResidentIdLazyQuery } from "../generated/graphql-types";
import PostCard from "./PostCard";

const AllPicturesByResident = () => {
  const [getPostsByResidentId, { loading, error, data }] =
    useGetPostsByResidentIdLazyQuery({ variables: { residentId: 2 } });

  useEffect(() => {
    getPostsByResidentId({ variables: { residentId: 2 } });
  }, [getPostsByResidentId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  if (data) {
    return (
      <>
        <h1>Photo de {data.getPostsByResidentId[0]?.residents?.[0]?.name}</h1>
        <section className="flex justify-evenly flex-wrap">
          {data.getPostsByResidentId.map((post) => (
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
      </>
    );
  }
};

export default AllPicturesByResident;
