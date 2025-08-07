import React, {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { IData } from "../types";

interface Props {
  setData: Dispatch<SetStateAction<IData[]>>;
  editingItem: IData | null;
  setEditingItem: Dispatch<SetStateAction<IData | null>>;
}

const FormControl: FC<Props> = ({ setData, editingItem, setEditingItem }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setAge(editingItem.age?.toString() || "");
      setAddress(editingItem.address);
      setSalary(editingItem.salary?.toString() || "");
      setPhone(editingItem.phone);
    }
  }, [editingItem]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingItem) {
      setData((prev) => {
        return prev.map((item) =>
          item.id === editingItem.id
            ? { ...item, name, age, address, salary, phone }
            : item
        );
      });
      setEditingItem(null);
    } else {
      let newTeacher: IData = {
        id: Date.now(),
        name,
        age,
        address,
        salary,
        phone,
      };
      setData((prev) => [...prev, newTeacher]);
    }
    setName("");
    setAge("");
    setAddress("");
    setSalary("");
    setPhone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded-xl px-8 py-10 w-full max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-bold">
        Add new teacher
      </h2>

      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          className="w-full border-b-2 pl-10 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          name="age"
          type="number"
          placeholder="Enter your age"
          required
          className="w-full border-b-2 pl-10 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          name="address"
          type="text"
          placeholder="Enter your address"
          required
          className="w-full border-b-2 pl-10 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          name="salary"
          type="number"
          placeholder="Enter your salary"
          required
          className="w-full border-b-2 pl-10 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          type="text"
          placeholder="Enter your phone"
          required
          className="w-full border-b-2 pl-10 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-400 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition duration-300"
      >
        Saqlash
      </button>
    </form>
  );
};

export default React.memo(FormControl);