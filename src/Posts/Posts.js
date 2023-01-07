import PostList from "./PostsList";
import PostsModel from "./PostsModel";

const Posts = () => {
  const { posts, del, isWait, serverError } = PostsModel(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return (
    <div className="container">
      {serverError && (
        <h3 className="text-danger text-center">{serverError}</h3>
      )}
      {isWait && (
        <h3 className="msgs text-center">Please Waiting for Load Data</h3>
      )}
      {posts && <PostList posts={posts} del={del} />}
    </div>
  );
};

export default Posts;
