import { useState } from "react";
import axios from "axios";

const PostsModel = (url) => {
  const [isWait, setWait] = useState(true);
  const [serverError, setserverError] = useState(null);
  const [posts, setPosts] = useState("");
  axios
    .get(url)
    .then((res) => {
      // console.log(res.data);
      setPosts(res.data);
      setWait(false);
    })
    .catch((e) => {
      setserverError(e.message);
      setWait(false);
    });

  const del = (id) => {
    fetch(url + "/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Deleted");
    });
  };
  return { posts, del, isWait, serverError };
};

export default PostsModel;
