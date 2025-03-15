import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CommentInput,
  useCreateNewCommentMutation,
  useGetPostByIdQuery,
} from "../generated/graphql-types";

const PostDetail = () => {
  const { id }: any = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useGetPostByIdQuery({
    variables: { getPostByIdId: parseInt(id) },
  });
  const [createNewComment] = useCreateNewCommentMutation({
    //refetchQueries: [allPosts],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentInput>({
    criteriaMode: "all",
  });
  const onSubmit: SubmitHandler<CommentInput> = async (data) => {
    console.log(data);
    const dataForBackend = {
      ...data,
      post: id.toString(),
    };
    console.log(data);
    await createNewComment({ variables: { data: dataForBackend } });
    navigate("/");
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              De:
              <input {...register("author")} />
            </label>
            <label>
              Écrivez votre commentaire:
              <textarea {...register("content")} />
            </label>
            <button type="submit">Valider</button>
          </form>
          {data.getPostById.comments
            ? data.getPostById.comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.author}</p>
                  <p>{comment.content}</p>
                </div>
              ))
            : null}
        </div>
      </>
    );
  }
};
export default PostDetail;
