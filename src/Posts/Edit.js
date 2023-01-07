import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isWait, setWait] = useState(true);
  const navigate = useNavigate();
  axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then((res) => {
    setUserId(res.data.userId);
    setTitle(res.data.title);
    setBody(res.data.body);
    setWait(false);
  });
  const mySub = (e) => {
    e.preventDefault();
    const myPost = { id, userId, title, body };
    setWait(true);
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "PUT",
      body: JSON.stringify(myPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => {
        console.log("Edited");
        setWait(false);
        navigate("/posts");
      });
    console.log(myPost);
  };
  return (
    <div className="container mt-4">
      {isWait && (
        <h3 className="text-center msgs">Please Waiting for Load Data</h3>
      )}
      <form method="PUT" onSubmit={mySub}>
        <div className="mb-3">
          <label>UserId</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="UserId"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <p>{userId}</p>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <p>{title}</p>
        <div className="mb-3">
          <label>Body</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <p>{body}</p>
        <div className="mb-3">
          {!isWait && <button className="btn btn-primary">Edit</button>}
          {isWait && <button className="btn btn-primary disabled">Edit</button>}
        </div>
      </form>
    </div>
  );
};

export default Edit;
