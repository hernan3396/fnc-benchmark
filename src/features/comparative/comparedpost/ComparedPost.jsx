import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Button } from "react-bootstrap";
import { fetchPosts } from "../../home/homeSlice";

import styles from "./ComparedPost.module.css";

export default function ComparedPost() {
  const dispatch = useDispatch();
  const homePosts = useSelector((state) => state.home.homePosts);

  // changes thumbnail in dropdown
  const [adThumbnail, setAdThumbnail] = useState(null);
  const [post, setPost] = useState(null);

  const selectPost = (ad) => {
    setAdThumbnail(ad.thumbnail);
    setPost(ad);
  };

  //if there are 0 posts it fetches them
  //this is just in case
  useEffect(() => {
    if (homePosts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch]);

  return (
    <>
      <div className={styles.comparedPost}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {adThumbnail ? (
              <img
                className={styles.dropdownThumbnail}
                src={adThumbnail}
                alt=""
              />
            ) : (
              "Seleccionar Anuncio"
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {homePosts.map((ad) => (
              <Dropdown.Item key={ad.ad_id}>
                <Button onClick={(e) => selectPost(ad)}>
                  <img
                    className={styles.dropdownThumbnail}
                    src={ad.thumbnail}
                    alt=""
                  />
                </Button>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {post && (
          <>
            <div>impresiones: {post.impressions}</div>
            <div>clicks: {post.clicks}</div>
            <div>
              <img
                className={styles.postThumbnail}
                src={post.thumbnail}
                alt={post.ad_name}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
