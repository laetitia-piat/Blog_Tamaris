import { useNavigate } from "react-router-dom";
import { LoginUserInput, useLoginMutation } from "../generated/graphql-types";
import { SubmitHandler, useForm } from "react-hook-form";
import { GET_USER_INFOS } from "../graphql/queries";

const LoginForm = () => {
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
  return (
    <>
      <form
        className="flex flex-col w-1/2 m-auto mt-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-3xl text-[#4c7d48] font-bold mb-15">
          Page de connexion
        </h1>

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
    </>
  );
};

export default LoginForm;
