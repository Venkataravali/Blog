import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]); //initially it's empty array haven't fetch any data
  useEffect(() => {
    const fetchPosts = async () => {
      //we can't directly use axios because we use async
      const res = await axios.get("http://localhost:3001/api/posts"); //here need to use api to get use this in  package.json write "proxy":"http://localhost:5000/api/"
      //that above returns response
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
