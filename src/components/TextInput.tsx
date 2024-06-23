import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form>
      <input type="text" value={text} onChange={handleChange} />
    </form>
  );
};

export default TextInput;
