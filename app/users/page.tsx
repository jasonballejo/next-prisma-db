import { Key, ReactNode } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="text-center text-white mt-20">
      <h1 className="font-bold text-3xl text-yellow-400">
        Users: {data[0].address.suite}
      </h1>
      {data.map(
        (user: {
          id: Key;
          name: ReactNode;
          email: ReactNode;
          address: ReactNode;
          street: ReactNode;
        }) => {
          return (
            <>
              <p key={user.id}>{user.name}</p>
              <p key={user.id}>{user.email}</p>
            </>
          );
        }
      )}
    </div>
  );
}
