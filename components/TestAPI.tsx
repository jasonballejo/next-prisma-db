import Link from "next/link";

export default async function TestAPI() {
  return (
    <div className="text-white text-center mt-24 ">
      <h1 className="text-5xl font-bold mb-10">Home</h1>
      <Link className="border bg-red-500 rounded-lg px-5 py-2" href="/users">
        Go to Users
      </Link>
    </div>
  );
}
