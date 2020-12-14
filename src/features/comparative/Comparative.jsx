import React from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./comparativeSlice";

export default function Comparative() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.comparative.posts);

  return (
    <>
      {posts.length === 0 ? (
        "Agregar post"
      ) : (
        <Row sm={4}>
          {posts.map((post) => (
            <Col>{post}</Col>
          ))}
        </Row>
      )}

      <button onClick={() => dispatch(fetchPosts())}>+</button>
    </>
  );
}
