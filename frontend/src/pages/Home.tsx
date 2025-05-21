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
      <div className="flex flex-col items-center w-screen h-screen ]">
        <div className="mt-10 mb-10">
          <Link to="/post/new">
            <button className="bg-[#4c7d48] p-2 rounded-2xl text-white">
              Publier une photo
            </button>
          </Link>
        </div>
        <section className="flex justify-evenly flex-wrap">
          {data.getAllPosts.map((post) => (
            <div className="bg-[#f7f0e1] flex rounded-2xl mr-5 mb-5 max-w-[288px] ">
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
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#3c5c39] font-bold pb-15 lg:pt-40">
          BLOG DES TAMARIS
        </h1>
        <form
          className="flex flex-col bg-[#f7f0e1] rounded-lg w-[75%] md:w-1/2 lg:w-1/3 lg:m-auto lg:mt-30 pt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-10 w-[80%] lg:w-1/2 m-auto bg-[#dbd0b8] h-10 rounded-lg pl-5"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <input
            className="mb-10 w-[80%] lg:w-1/2 m-auto bg-[#dbd0b8] h-10 rounded-lg pl-5"
            placeholder="password"
            type="password"
            {...register("password", { required: true })}
          />

          {errors.password && <span>This field is required</span>}
          <input
            className="bg-[#4c7d48] p-2 w-32 m-auto rounded-full text-white"
            type="submit"
          ></input>

          <a className="mt-5 text-center text-[#3c5c39] mb-10" href="register">
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
