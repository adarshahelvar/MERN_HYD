import React, { useState } from "react";
import { BASE_URL, token } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    topic: undefined,
    title: undefined,
    content: undefined,
  });

  const navigate = useNavigate();
  const handleTopicChange = (e) => {
    setBlog((prev) => ({ ...prev, topic: e.target.value }));
  };

  const handleChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(token);
      const res = await fetch(`${BASE_URL}/blog/createblog`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blog),
      });
      // console.log(res);
      const result = await res.json();

      if (!result.ok) {
      }
      console.log("Blog created");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(blog);
  return (
    <div>
      <h1 className="text-center">Create a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="ms-5 me-5 mt-5">
          <div className="">
            <label htmlFor="topic" className="form-label">
              Topic
            </label>
            <select
              name=""
              id="topic"
              className="form-select mb-3"
              aria-label="Default select example"
              onChange={handleTopicChange}
            >
              <option value="" selected disabled>
                Select topic
              </option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JAVASCRIPT">JAVASCRIPT</option>
              <option value="REACTJS">REACTJS</option>
              <option value="NODEJS">NODEJS</option>
              <option value="EXPRESSJS">EXPRESSJS</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tilte
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Add title for Blog"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              name=""
              id="content"
              className="form-control"
              rows="9"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="container btn btn-info">Create Blog</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
