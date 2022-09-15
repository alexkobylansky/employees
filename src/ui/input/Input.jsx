import './input.scss';

export const Input = ({type, id, classes, name, placeholder, inputValue, setInputValue, labelValue}) => {
  return (
    <label htmlFor={id}>
      {labelValue}
      <input type={type}
             className={classes}
             name={name}
             placeholder={placeholder}
             defaultValue={inputValue}
             onChange={(event) => setInputValue(event.target.value)}
      />
    </label>
  );
}