import './employees-list.scss';
import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";

export const EmployeesList = ({employees}) => {


  return (
    <ul className="list list-group">
      {employees.map(item => <EmployeesListItem key={item.name} {...item}/>)}
    </ul>
  );
}