import classes from "./Label.module.css";

const Label = ({ name, label }) => {
  return <label htmlFor={name} className={classes.form_label}>{label}</label>
};

export default Label;
