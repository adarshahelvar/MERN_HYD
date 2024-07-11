import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { BASE_URL } from "../../utils/config";

const Singleblog = () => {
  const { id } = useParams();
  // console.log('id', id)

  const {
    data: blog,
    loading,
    error,
  } = useFetch(`${BASE_URL}/blog/getsingleblog/${id}`);
  console.log("blog", blog);
  return (
    <>
      <div className="mt-3">
        <img
          className="img-fluid"
          src={`https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg`}
          alt=""
        />
      </div>
      <div className="mt-3">
        <h4>Blog title: {blog.title}</h4>
        <h4>Blog Topic: {blog.topic}</h4>
        <h4>Blog content: {blog.content}</h4>
      </div>
    </>
  );
};

export default Singleblog;
