import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateNewPostMutation } from "../generated/graphql-types";

const NewPostForm = () => {
  const [createNewPost] = useCreateNewPostMutation({
    //refetchQueries: [allPosts],
  });

  const navigate = useNavigate();
  type Inputs = {
    titre: string;
    photo: string;
    resident: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const dataForBackend = {
      ...data,
    };
    console.log(data);
    await createNewPost({ variables: { data: dataForBackend } });
    toast.success("Succes");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <label>
          Titre de la photo
          <br />
          <input
            className="text-field"
            {...register("titre", {
              minLength: { value: 2, message: "Minimum 2 characters" },
              required: "This field is required",
            })}
          />
        </label>
        {/* <ErrorMessage
          errors={errors}
          name="titre"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => {
              console.log(message);
              return (
                <Fragment key={type}>
                  <br />
                  <span className="error-message">{message}</span>
                </Fragment>
              );
            })
          }
        /> */}
      </>
      <label>
        Prénom du résident
        <br />
        <input
          className="text-field"
          {...register("resident", {
            minLength: { value: 2, message: "Minimum 2 characters" },
            required: "This field is required",
          })}
        />
      </label>
      <label>
        Photo
        <br />
        <input
          className="text-field"
          {...register("photo", {
            minLength: { value: 2, message: "Minimum 2 characters" },
            required: "This field is required",
          })}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
export default NewPostForm;
