import './input.scss';

export const Input = ({type, id, classes, name, placeholder, inputValue, labelValue}) => {
  return (
    <label htmlFor={id}>
      {labelValue}
      <input type={type}
             className={classes}
             name={name}
             placeholder={placeholder}
             defaultValue={inputValue}
      />
    </label>
  );
}