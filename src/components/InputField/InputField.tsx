import { useRef } from "react";
import "./InputField.scss";


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className="input" onSubmit={(e) => {
      handleAddTodo(e)
      inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        className="input__box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputField;
