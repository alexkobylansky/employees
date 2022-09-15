import './filter.scss';
import {Button} from "../../ui/button/Button";

export const Filter = () => {
  return (
    <div className="btn-group">
      <Button classes={"btn btn-light"}
              type={"button"}
              children={"Все сотрудники"}
              onClick={() => {}}
      />
      <Button classes={"btn btn-outline-light"}
              type={"button"}
              children={"На повышение"}
              onClick={() => {}}
      />
      <Button classes={"btn btn-outline-light"}
              type={"button"}
              children={"З/П больше 1000$"}
              onClick={() => {}}
      />
    </div>
  );
}