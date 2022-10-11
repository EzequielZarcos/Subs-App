import React from "react";
import useNewSubForm from "./useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

type InputsForm = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function Form({ onNewSub }: FormProps) {
  //const [form, setForm] = useState<FormState["form"]>(InitialState);
  const [form, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(form);
    handleClear();
  };

  const handleOnChange = (e: InputsForm) => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: {
        inputName: e.target.name,
        inputValue: e.target.value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="divForm">
      <form onSubmit={handleSubmit}>
        <input
          value={form.nick}
          type="text"
          name="nick"
          onChange={(e) => handleOnChange(e)}
          placeholder="Nick..."
        />
        <input
          value={form.subMonths}
          type="number"
          name="subMonths"
          onChange={(e) => handleOnChange(e)}
          placeholder="Sub Months..."
        />
        <input
          value={form.avatar}
          type="text"
          name="avatar"
          onChange={(e) => handleOnChange(e)}
          placeholder="Avatar..."
        />
        <textarea
          value={form.description}
          name="description"
          onChange={(e) => handleOnChange(e)}
          placeholder="Description..."
        />
        <button type="submit">Save new Sub</button>
      </form>
    </div>
  );
}
