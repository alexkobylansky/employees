import './info.scss';

export const Info = ({count, increased}) => {

  return (
    <div className="info">
      <h1>Учёт сотрудников компании</h1>
      <h2>Общее число сотрудников: {count}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
}