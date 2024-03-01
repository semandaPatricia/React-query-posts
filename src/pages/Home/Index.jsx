import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchPosts } from "./Query";

const Home = () => {
  // Using useQuery to fetch data
  const { data, isLoading, error } = useQuery({
    queryKey: ["newPosts"],
    queryFn: fetchPosts,
  });

  const { mutate } = useMutation({
    mutationKey: ["posts"],
    mutationFn: async (newPost) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const data = await response.json();
      return data;
    },
  });

  if (error) return <div>There was an error!!!!</div>;

  if (isLoading) {
    return <div>Loading !!!!</div> ;
  }
  return (
    <div>
      <button
        onClick={() =>
          mutate({
            userId: 1000,
            id: 7000,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          })
        }
      >
        Add post
      </button>
      {data?.map((post) => (
        <div key={post.id}> 
          <h4>ID: {post.id} </h4>
          <h4>TITLE: {post.title} </h4>
          <h4>BODY: {post.body} </h4>
        </div>
      ))}
    </div>
  );
};

export default Home;

