import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
async function fetchPost(postId: any) {
  const post = await fetch(`http:localhost:3000/api/${postId}`, {
    method: "GET",
  });
  return post.json();
}
export async function generateMetadata({ params }: any) {
  const post = await fetchPost(params.id);
  return {
    title: post.id,
    description: post.description,
    openGraph: {
      title: post.id,
      description: post.description,
      url: "localhost",
      sitemap: "locahost",
      image: [
        {
          url: "localhost",
          width: 100,
          height: 100,
        },
      ],
    },
  };
}
export default function ProfileId() {
  return (
    <>
      <h1>hi</h1>
      {/* <div>this is profileId:{params.id}</div>
      <button onClick={() => router.push("/")}>go to home</button> */}
      <Link
        prefetch={false}
        scroll={false}
        href={{
          pathname: "/",
          query: {
            user: "zak",
          },
        }}
      >
        go to home
      </Link>
    </>
  );
}
