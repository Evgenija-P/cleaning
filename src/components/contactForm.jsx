import { useForm } from "react-hook-form";
import Button from "./UX/buttons";

const ContactForm = () => {
  const classLabel = "text-base text-formGrey flex flex-col relative hover:text-orange";
  const classInput = "border-b-[1px] border-b-formGrey focus:border-b-blue";
  const classError = "absolute bottom-[-20px] left-0 text-red-500 italic";
  const classInputError = "border-b-[1px] border-b-orange";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data), reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[466px] flex flex-col gap-y-10">
      <label className={classLabel}>
        Full name
        <input
          {...register("name", { required: true })}
          className={errors.name ? classInputError : classInput}
          autoComplete="on"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className={classError}>
            First name is required!
          </p>
        )}
      </label>

      <label className={classLabel}>
        Phone number
        <input
          {...register("phone", { required: true })}
          className={errors.phone ? classInputError : classInput}
          autoComplete="on"
        />
        {errors.phone?.type === "required" && (
          <p role="alert" className={classError}>
            Phone is required!
          </p>
        )}
      </label>

      <label className={classLabel}>
        Email address
        <input
          {...register("email", { required: true })}
          className={errors.email ? classInputError : classInput}
          autoComplete="on"
        />
        {errors.email?.type === "required" && (
          <p role="alert" className={classError}>
            Email is required!
          </p>
        )}
      </label>

      <label className={classLabel}>
        Write us a messege...
        <textarea {...register("messege")} className={classInput} />
      </label>

      <Button btnType={"submit"} style={"form"}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
