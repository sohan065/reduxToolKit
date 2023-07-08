import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./postSlice";

export default function PostView() {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {isLoading && <h3>Loading...</h3>}

      {error && <h1>{error}</h1>}

      {posts &&
        posts.map((post) => {
          return (
            <article>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </article>
          );
        })}
    </>
  );
}
