import './input.scss';

export const Input = ({type, id, classes, name, placeholder, inputValue, setInputValue, labelValue}) => {
  return (
    <label htmlFor={id}>
      {labelValue}
      <input type={type}
             className={classes}
             id={id}
             name={name}
             placeholder={placeholder}
             value={inputValue}
             onChange={(event) => setInputValue(event.target.value)}
      />
    </label>
  );
}