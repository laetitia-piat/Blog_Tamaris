import { Link, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import {
  LoginUserInput,
  useGetAllPostsQuery,
  useGetUserInfoQuery,
  useLoginMutation,
} from "../generated/graphql-types";
import { GET_USER_INFOS } from "../graphql/queries";
import { SubmitHandler, useForm } from "react-hook-form";

const HomePage = () => {
  const { loading, error, data } = useGetAllPostsQuery();
  const userInfos = useGetUserInfoQuery();
  console.log(userInfos.data);

  const navigate = useNavigate();
  const [login] = useLoginMutation({
    refetchQueries: [{ query: GET_USER_INFOS }],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>();
  const onSubmit: SubmitHandler<LoginUserInput> = (data) => {
    console.log(data);
    login({
      variables: { data: { email: data.email, password: data.password } },
      onCompleted: (result) => {
        localStorage.setItem("token", result.login);
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data && userInfos.data?.getUserInfo.isLoggedIn) {
    return (
      <>
        <div className="flex justify-center mb-10 mt-15">
          <Link to="/post/new">
            <button className="bg-[#4c7d48] p-2 rounded-full text-white">
              Publier une photo
            </button>
          </Link>
        </div>
        <section className="flex justify-evenly flex-wrap">
          {data.getAllPosts.map((post) => (
            <div className="bg-[#fafaf2] mb-10 mr-5 max-w-[288px] ">
              <PostCard
                id={post.id}
                titre={post.titre}
                residents={post.residents ?? []}
                photo={post.photo}
                commentaires={post.comments?.length ?? 0}
              />
            </div>
          ))}
        </section>
      </>
    );
  } else {
    return (
      <div
        className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/tamaris_background.jpg')",
        }}
      >
        <h1 className="text-6xl text-[#3c5c39] font-bold pt-40">
          BLOG DES TAMARIS
        </h1>
        <form
          className="flex flex-col border rounded-lg w-1/2 m-auto mt-50 pt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-10 w-1/2 m-auto"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <input
            className="mb-10 w-1/2 m-auto"
            placeholder="password"
            type="password"
            {...register("password", { required: true })}
          />

          {errors.password && <span>This field is required</span>}
          <input
            className="bg-[#4c7d48] p-2 w-32 m-auto rounded-full text-white"
            type="submit"
          ></input>

          <a className="mt-5 text-center" href="register">
            Pas encore inscrit?
          </a>
          {/* <a className="linkSubscribe" href="forgotPassword">
            Mot de passe oublié?
          </a> */}
        </form>
      </div>
    );
  }
};
export default HomePage;
