import React, { type Dispatch, type FC, type SetStateAction } from "react";
import type { IData } from "../types";

interface Props {
  data: IData[];
  onDelete: (id: number) => void;
  setEditingItem: Dispatch<SetStateAction<IData | null>>;
}

const TeacherView: FC<Props> = ({ data, onDelete, setEditingItem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto mt-10">
      {data?.map((teacher: IData) => (
        <div
          key={teacher.id}
          className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-bold text-indigo-600 mb-2">{teacher.name}</h2>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Age:</span> {teacher.age}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Address:</span> {teacher.address}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Salary:</span> ${teacher.salary}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Phone:</span> {teacher.phone}
          </p>

          <div className="flex justify-between gap-2">
            <button
              onClick={() => setEditingItem(teacher)}
              className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-semibold py-1 px-3 rounded-full text-sm transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(teacher.id)}
              className="flex-1 bg-red-400 hover:bg-red-500 text-white font-semibold py-1 px-3 rounded-full text-sm transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(TeacherView);
