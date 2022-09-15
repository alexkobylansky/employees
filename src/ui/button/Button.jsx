import './button.scss';

export const Button = ({type, classes, children, onClick}) => {
  return (
    <button className={classes}
            type={type}
            onClick={onClick}
    >
      {children}
    </button>
  );
}