// import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import "./InputTask.css";
import { inputTitleState } from "../states/inputTitleState";
import { useCallback } from "react";
import { addTitleState } from "../states/addTitleState";
import { v4 as uuidv4 } from "uuid";

function InputTask() {
  //   const inputTitle = useRecoilValue(inputTitleState);
  //   const setInputTitle = useSetRecoilState(inputTitleState);
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      //   console.log(inputTitle);
    },
    [inputTitle]
  );

  const handleEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddTitle([...addTitle, { id: uuidv4(), title: inputTitle }]);
    setInputTitle("");
  };

  const handleClick = () => {
    setAddTitle([...addTitle, { id: uuidv4(), title: inputTitle }]);
    setInputTitle("");
    // console.log(addTitle);
  };

  return (
    <div className="inputTask">
      <form onSubmit={handleEnter}>
        <input
          type="text"
          className="inputTitle"
          onChange={onChange}
          value={inputTitle}
        />
        <button type="button" className="addButton" onClick={handleClick}>
          追加
        </button>
      </form>
    </div>
  );
}
export default InputTask;
