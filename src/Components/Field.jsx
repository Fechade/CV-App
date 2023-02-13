import { useState } from "react";

function Field() {
  const [Edit_, setEdit] = useState(true);
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const Submit = () => {
    setEdit(false);
    console.log(this.state.Edit);
  };

  const Edit = () => {
    setEdit(true);
    console.log(this.state.Edit);
  };

  return (
    <>
      {Edit_ && (
        <form>
          <input type="text" onChange={handleInput} value={text} />
          <input type="button" onClick={Submit} value="Save" />
        </form>
      )}
      {Edit_ === false && (
        <p>
          {text}
          <input type="button" onClick={Edit} value="Edit" />
        </p>
      )}
    </>
  );
}

export default Field;