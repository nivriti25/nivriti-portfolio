import { getPosts } from "@/lib/notion";

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>

      <div className="space-y-4">
        {posts.map((post: any) => {
          const title =
            post.properties.Title?.title?.[0]?.plain_text ||
            "Untitled";

          return (
            <div
              key={post.id}
              className="border rounded-lg p-4"
            >
              <h2 className="text-xl font-semibold">
                {title}
              </h2>
            </div>
          );
        })}
      </div>
    </main>
  );
}