import { useParams, Link, useNavigate } from "react-router-dom";
import PostsModel from "./PostsModel";

const PostInfo = () => {
  const { id } = useParams();
  const { posts, isWait, serverError } = PostsModel(
    "https://jsonplaceholder.typicode.com/posts/" + id,
  );
  const navigate = useNavigate();
  const del = (id) => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Deleted");
      navigate("/posts");
    });
  };
  return (
    <div className="container">
      {serverError && (
        <h3 className="text-danger text-center">{serverError}</h3>
      )}
      {isWait && (
        <h3 className="msgs text-center">Please Waiting for Load Data</h3>
      )}
      {posts && (
        <>
          <div className="row">
            <div className="col-md-12 mt-4 text-center"></div>
          </div>
          <div className="mb-4 col-md-12">
            <div className="card">
              <div className="d-flex justify-content-between card-header">
                <form>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    id="search"
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
                      <th scope="col">ID</th>
                      <th scope="col">Title</th>
                      <th scope="col">Body</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={id} tabIndex={id}>
                      <th scope="row">{id}</th>
                      <td>{posts.title}</td>
                      <td>{posts.body}</td>
                      <td>
                        <Link to={"/edit/" + posts.id} className="btn btn-info">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            del(id);
                            navigate("/posts");
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostInfo;
