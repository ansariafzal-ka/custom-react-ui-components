import Button from "../utils/Button";
import Card from "../utils/Card";
import InputField from "../utils/Inputfield";

const RegisterForm = ({ variant }) => {
  return (
    <Card className={"min-w-[400px]"} variant={variant}>
      <form className="w-full flex flex-col gap-y-3 rounded p-5">
        <h1 className="text-xl font-medium">Registration form</h1>
        <InputField type={"text"} placholder={"name"} variant={variant} />
        <InputField type={"email"} placholder={"email"} variant={variant} />
        <InputField
          type={"password"}
          placholder={"password"}
          variant={variant}
        />
        <Button
          variant={variant}
          className={"flex justify-center items-center gap-2"}
        >
          register
        </Button>
        <p>Already have an account?</p>
      </form>
    </Card>
  );
};

export default RegisterForm;
