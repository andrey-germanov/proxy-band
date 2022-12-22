import React from "react";
import { postAPI } from "../store/Services/PostService";
import { useParams } from "react-router";

export const Posts = () => {
  const { userId } = useParams<string>();
  const numberId = Number(userId);
  const {
    data: posts,
    isLoading,
    error,
  } = postAPI.useFetchPostsByIdQuery(numberId);
  return (
    <div>
      {isLoading && <div>"loading..."</div>}
      {error && <div>some error</div>}
      {posts?.map((item, key) => {
        return (
          <div
            key={key}
            style={{
              padding: "20px",
              border: "1px solid #e3cfcf",
              fontSize: "12px",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <strong>Title</strong>: {item.title}
            </div>
            <div style={{ textAlign: "left" }}>
              <strong>Body</strong>: {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};
