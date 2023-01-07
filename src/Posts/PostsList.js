import { useState } from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, del }) => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <div className="mb-4 col-md-12">
        <div className="card">
          <div className="d-flex justify-content-between card-header">
            <form>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                id="search"
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>
            <div>
              <Link to="/posts" className="btn btn-info mx-2">
                HOME
              </Link>
              <Link to="/add" className="btn btn-primary">
                Add
              </Link>
            </div>
          </div>
          <div className="card-body">
            <table
              className="table table-bordered text-center align-middle"
              id="table"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Details</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts
                    .map((post) => {
                      if (query === "") {
                        return post;
                      } else if (
                        post.title.toLowerCase().includes(query.toLowerCase())
                      ) {
                        return post;
                      }
                    })
                    .map((post) => (
                      <tr key={post.id} tabIndex={post.id}>
                        <th scope="row">{post.id}</th>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                          <Link
                            to={"/posts/" + post.id}
                            className="btn btn-success"
                          >
                            Details
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={"/edit/" + post.id}
                            className="btn btn-info"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => del(post.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                {posts.length <= 0 && (
                  <tr>
                    <td colspan="6">
                      <h5 className="text-danger">
                        The Elements is Not Found, Or Wrong
                      </h5>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
