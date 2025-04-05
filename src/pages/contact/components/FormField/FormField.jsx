import classes from "./FormField.module.css";

const FormField = ({
  label,
  name,
  type,
  register,
  validation,
  error,
  disabled
}) => {
  return (
    <div className={classes.form_field}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.form_field__input}>
        {type === "textarea" ? (
          <textarea id={name} {...register(name, validation)} disabled={disabled} />
        ) : (
          <input id={name} type={type} {...register(name, validation)} disabled={disabled} />
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default FormField
