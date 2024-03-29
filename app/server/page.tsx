import { revalidateTag } from "next/cache";

async function fetchData() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
      next: { revalidate: 5, tags: ["collection"] },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
async function revalidate() {
  "use server";
  revalidateTag("collection");
}
export default async function Server() {
  const data = await fetchData();
  return (
    <>
      <form action={revalidate}>
        <div>{data.joke}</div>
        <button type="submit">revalidate</button>
      </form>

      <h1>hi there</h1>
    </>
  );
}
