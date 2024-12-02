import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/slices/posts/thunks";

export default function Posts() {
  const posts = useSelector((store) => store.posts.posts);
  const postsStatus = useSelector((store) => store.posts.status);
  const postsError = useSelector((store) => store.posts.error);

  const dispatch = useDispatch();

  function fetchHandler() {
    dispatch(fetchPosts());
  }

  return (
    <div>
      <h1>Posts API</h1>
      <button onClick={fetchHandler}>Fetch posts</button>
      <p>Status: {postsStatus}</p>
      <p>Error: {postsError}</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
