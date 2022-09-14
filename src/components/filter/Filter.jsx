import './filter.scss';
import {Button} from "../../ui/button/Button";

export const Filter = () => {
  return (
    <div className="btn-group">
      <Button classes={"btn btn-light"} children={"Все сотрудники"}/>
      <Button classes={"btn btn-outline-light"} children={"На повышение"}/>
      <Button classes={"btn btn-outline-light"} children={"З/П больше 1000$"}/>
    </div>
  );
}