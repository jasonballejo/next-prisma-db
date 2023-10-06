// "use client";

// import Dashboard from "@/components/Dashboard";
// import { useState } from "react";
import TestAPI from "@/components/TestAPI";

interface FormData {
  title: string;
  content: string;
  id: string;
}

export default async function Home() {
  // const [form, setForm] = useState<FormData>({
  //   title: "",
  //   content: "",
  //   id: "",
  // });
  return (
    <div>
      <TestAPI />
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border-2 rounded border-gray-600"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="border-2 rounded border-gray-600"
        />

        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Add +
        </button>
      </form> */}
    </div>
  );
}
