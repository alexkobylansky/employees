import './employees-list.scss';
import {EmployeesListItem} from "../employees-list-item/EmployeesListItem";

export const EmployeesList = ({employees, onDelete}) => {


  return (
    <ul className="list list-group">
      {employees.map(item => <EmployeesListItem key={item.name}
                                                {...item}
                                                onDelete={() => onDelete(item.id)}
      />)}
    </ul>
  );
}