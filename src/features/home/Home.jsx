import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./homeSlice";
import HomePost from "../homePost/HomePost";
import { Spinner } from "react-bootstrap";

function Main() {
  const homePosts = useSelector((state) => state.home.homePosts);
  const fetchingPosts = useSelector((state) => state.home.fetchingPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //ver de que cuando cargues la pagina te traiga los datos 1 vez sola!!
  return (
    <>
      {fetchingPosts && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <ul>
        {homePosts.map((ad) => (
          <HomePost key={ad.ad_id} data={ad} />
        ))}
      </ul>
    </>
  );
}

export default Main;
