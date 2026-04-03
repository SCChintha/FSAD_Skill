import { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const loadPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const filteredPosts = filter
    ? posts.filter(p => p.userId === Number(filter))
    : posts;

  return (
    <div className="container">
      <h2>Fake API Posts</h2>

      <button onClick={loadPosts}>Refresh</button>

      <br /><br />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {filteredPosts.map(post => (
        <div className="card" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p>UserId: {post.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;