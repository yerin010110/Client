import React from "react";
import Posts from "../components/Posts";

const AllPosts = ({ postService }) => (
    <Posts postService={postService} addable={true} /> // addable이 ture로 되어있기에 화면에 보이는 것
);

export default AllPosts;
