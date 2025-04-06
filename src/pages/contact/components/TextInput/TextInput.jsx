import classes from "./TextInput.module.css";

const TextInput = ({ name, type, register, error, disabled }) => {
  return (
    <div className={classes.input_field}>
      <input id={name} type={type} {...register} disabled={disabled} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextInput;
