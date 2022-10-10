import React, { useState } from "react";

interface FormState {
  form: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

export default function Form({ onNewSub }: FormProps) {
  const [form, setForm] = useState<FormState["form"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(form);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <button>Save new Sub</button>
      </form>
    </div>
  );
}
