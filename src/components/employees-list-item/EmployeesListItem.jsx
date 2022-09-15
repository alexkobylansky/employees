import {useState} from "react";
import './employees-list-item.scss';
import {Button} from "../../ui/button/Button";
import {Input} from "../../ui/input/Input";

export const EmployeesListItem = ({name, salary, increase, onDelete}) => {
  const [like, setLike] = useState(false);

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase"
  }
  if (like) {
    classNames += " like"
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label"
            onClick={() => setLike(!like)}
      >{name}</span>
      <Input type={"text"}
             classes={"list-group-item-input"}
             id={"item-input"}
             name={"salary"}
             inputValue={salary + "$"}
             placeholder={""}
             labelValue={""}
      />
      <div className="d-flex justify-content-center align-content-center">
        <Button type={"button"}
                classes={"btn-cookie btn-sm"}
                children={<i className='fas fa-cookie'></i>}
                onClick={() => {}}
        />
        <Button type={"button"}
                classes={"btn-trash btn-sm"}
                children={<i className="fas fa-trash"></i>}
                onClick={onDelete}
        />
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}