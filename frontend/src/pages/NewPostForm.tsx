import { useForm } from "react-hook-form";

const NewPostForm = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: "Please enter your first name.",
        })} // custom message
      />
      <input type="submit" />
    </form>
  );
};
export default NewPostForm;
