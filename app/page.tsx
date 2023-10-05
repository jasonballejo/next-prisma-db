import Dashboard from "@/components/dashboard";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: { id: number; name: string; email: string }[] = await getPosts();
  return (
    <main>
      <div className="text-white px-10 py-10">
        {data.map((post) => (
          <Dashboard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
