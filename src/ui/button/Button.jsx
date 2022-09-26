import './button.scss';

export const Button = ({type, classes, children, name, onClick}) => {
  return (
    <button className={classes}
            type={type}
            name={name}
            onClick={onClick}
    >
      {children}
    </button>
  );
}