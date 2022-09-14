import './employees-list-item.scss';
import {Button} from "../../ui/button/Button";
import {Input} from "../../ui/input/Input";

export const EmployeesListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">john Smith</span>
      <Input type={"text"}
             classes={"list-group-item-input"}
             id={"item-input"}
             name={"salary"}
             inputValue={"1000$"}
             placeholder={""}
             labelValue={""}
      />
      <div className="d-flex justify-content-center align-content-center">
        <Button type={"button"}
                classes={"btn-cookie btn-sm"}
                children={<i className='fas fa-cookie'></i>}
        />
        <Button type={"button"}
                classes={"btn-trash btn-sm"}
                children={<i className="fas fa-trash"></i>}
        />
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}