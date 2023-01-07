import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isWait, setWait] = useState(false);
  const navigate = useNavigate();
  const mySub = (e) => {
    e.preventDefault();
    const myPost = { userId, title, body };
    setWait(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(myPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => {
        console.log("added");
        setWait(false);
        navigate("/posts");
      });
    console.log(myPost);
  };
  return (
    <div className="container mt-4">
      <form method="POST" onSubmit={mySub}>
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
          {!isWait && <button className="btn btn-primary">Add</button>}
          {isWait && <button className="btn btn-primary disabled">Add</button>}
        </div>
      </form>
    </div>
  );
};

export default Add;
