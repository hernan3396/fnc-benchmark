import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./comparativeSlice";

export default function Comparative() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.comparative.posts);

  return (
    <>
      <Row>
        {posts.map((post) => (
          <Col>{post}</Col>
        ))}
      </Row>
      <button onClick={() => dispatch(fetchPosts())}>Agregar post</button>
    </>
  );
}
