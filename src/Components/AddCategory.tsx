import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

interface Props {
  setCategories: Dispatch<SetStateAction<string[]>>;
}
export const AddCategory = ({ setCategories }: Props) => {
  const [value, setValue] = useState<string>('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value?.trim().length > 2) {
      setCategories((categories) => [value, ...categories]);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="label"
        placeholder="Category"
        className="input"
        value={value}
        onChange={handleInputChange}
      />
    </form>
  );
};
