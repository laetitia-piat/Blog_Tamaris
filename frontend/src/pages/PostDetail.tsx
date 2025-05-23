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
    // refetchQueries: [GET_ALL_POSTS],
  });

  const {
    register,
    handleSubmit,
    formState: {},
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
        <div className="flex flex-col items-center" key={data.getPostById.id}>
          <h2 className="uppercase text-2xl text-center pb-6">
            {data.getPostById.titre}
          </h2>
          <img className="w-180" src={data.getPostById.photo} />
          <div className="w-1/2">
            <form
              className="flex flex-col items-center mt-15 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label>De: </label>
              <input
                className="border-1 border-solid w-full mb-10"
                {...register("auteur")}
              />

              <label>Écrivez votre commentaire:</label>
              <textarea
                className="border-1 border-solid w-full"
                {...register("content")}
              />
              <button
                className="bg-[#4c7d48] w-32 p-2 mt-15 mb-15 rounded-full text-white"
                type="submit"
              >
                Valider
              </button>
            </form>
          </div>
          <div className="w-1/2 mb-10">
            {data.getPostById.comments
              ? data.getPostById.comments.map((comment) => (
                  <div
                    className="mb-10 border-1 border-solid border-red-700 rounded-full p-5"
                    key={comment.id}
                  >
                    <p className="text-red-700 font-bold">
                      De {comment.auteur}:
                    </p>
                    <p>{comment.content}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </>
    );
  }
};
export default PostDetail;
