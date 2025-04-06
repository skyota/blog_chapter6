import classes from "./Textarea.module.css";

const Textarea = ({ name, register, error, disabled }) => {
  return (
    <div className={classes.textarea_field}>
      <textarea id={name} {...register} disabled={disabled} />
      {error && <p>{error}</p>}
    </div>
  )
}

export default Textarea;
