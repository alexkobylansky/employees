import './button.scss';

export const Button = ({type, classes, children}) => {
  return (
    <button className={classes}
            type={type}
    >
      {children}
    </button>
  );
}