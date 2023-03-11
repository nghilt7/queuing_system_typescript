import { FC, useState, ChangeEvent } from "react";

interface IAppProps {
  name?: string;
  age: number;
}

export const Person: FC<IAppProps> = ({ name, age }) => {
  const [country, setCountry] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      {name}
      {age}
      <input
        type="text"
        placeholder="Enter country..."
        onChange={handleChange}
      />
    </div>
  );
};
