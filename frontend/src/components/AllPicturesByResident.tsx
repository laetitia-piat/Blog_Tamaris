import { useEffect } from "react";
import {
  useGetPostsByResidentIdLazyQuery,
  useGetUserByUserNameQuery,
  useGetUserInfoQuery,
} from "../generated/graphql-types";
import PostCard from "./PostCard";

const AllPicturesByResident = () => {
  const userInfos = useGetUserInfoQuery();
  const userName = userInfos.data?.getUserInfo.userName || "";
  const user = useGetUserByUserNameQuery({ variables: { userName } });
  const residentId = user.data?.getUserByUserName?.resident?.id;

  const [getPostsByResidentId, { loading, error, data }] =
    useGetPostsByResidentIdLazyQuery({
      variables: {
        residentId: user.data?.getUserByUserName?.resident?.id ?? 0,
      },
    });

  useEffect(() => {
    if (!residentId) return; // 👈 évite residentId = 0 / undefined
    getPostsByResidentId({ variables: { residentId } });
  }, [residentId, getPostsByResidentId]);

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
