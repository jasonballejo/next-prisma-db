import React from "react";

export default function Dashboard({ ...post }) {
  return (
    <>
      <h1>
        Name: <span className="text-yellow-500">{post.name}</span>
      </h1>
      <h2>
        Email: <span className="text-yellow-500">{post.email}</span>
      </h2>
      <h2>
        Created: <span className="text-yellow-500">{post.createdAt}</span>
      </h2>
    </>
  );
}
