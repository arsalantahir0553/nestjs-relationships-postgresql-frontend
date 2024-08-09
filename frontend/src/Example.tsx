import { useQuery } from "@tanstack/react-query";

interface RepoData {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

function Example() {
  // Ensure the key is an array and add appropriate typing
  const { isLoading, error, data } = useQuery<RepoData>({
    queryKey: ["books"], // Use an array for the key
    queryFn: () =>
      fetch("http://localhost:3000/courses").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + (error as Error).message;

  console.log(data);
  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
    </div>
  );
}

export default Example;
