import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../generated/graphql-types";

const PostDetail = () => {
  const { id }: any = useParams();
  const { loading, error, data } = useGetPostByIdQuery({
    variables: { getPostByIdId: parseInt(id) },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log(data);
  if (data) {
    return (
      <>
        <div className="PostById" key={data.getPostById.id}>
          <h2>{data.getPostById.titre}</h2>
          <img src={data.getPostById.photo} />
          <p>{data.getPostById.resident}</p>
          <label>
            Écrivez votre commentaire:
            <textarea />
          </label>
        </div>
      </>
    );
  }
};
export default PostDetail;
