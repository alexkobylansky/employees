import './search-panel.scss';

export const SearchPanel = ({term, setTerm}) => {
  
  return <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={term}
                onChange={event => setTerm(event.target.value)}
  />
}