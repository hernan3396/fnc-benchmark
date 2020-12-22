import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../home/homeSlice";
import FB from "./buttons/FB";
import IG from "./buttons/IG";
import Marcas from "./buttons/Marcas";
import Objetivos from "./buttons/Objetivos";

export default function ComparedPost({ clickedPost }) {
  const dispatch = useDispatch();
  const homePosts = useSelector((state) => state.home.homePosts);

  // changes thumbnail in dropdown
  const [adThumbnail, setAdThumbnail] = useState(null);
  const [post, setPost] = useState({});

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
    if (clickedPost) {
      const foundAd = homePosts.find((ad) => ad.ad_id === clickedPost);
      if (foundAd) {
        setAdThumbnail(foundAd.thumbnail);
        setPost(foundAd);
      }
    }
  }, [dispatch]);

  return (
    <>
      {/* <div className={styles.comparedPost}>
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
      </div> */}

      <div className="col-md-5">
        <div className="main-card mb-3 card">
          <div className="card-body">
            <ul className="header-menu nav">
              <li className="nav-item">
                <Marcas />
              </li>
              <li className="nav-item">
                <Objetivos />
              </li>
              <li className="redes-selector">
                <FB />
              </li>
              <li className="redes-selector">
                <IG />
              </li>
              <li className="nav-item">
                <div className="dropdown d-inline-block">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    className="mb-2 mr-2 dropdown-toggle btn btn-secondary"
                  >
                    Posteo
                  </button>
                  <div
                    tabindex="-1"
                    role="menu"
                    aria-hidden="true"
                    className="dropdown-menu"
                    x-placement="bottom-start"
                    style={{
                      position: "absolute",
                      transform: "translate3d(0px, 33px, 0px)",
                      top: "0px",
                      left: "0px",
                      willChange: "transform",
                    }}
                  >
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                      <tbody>
                        {homePosts.map((ad) => (
                          <tr onClick={() => selectPost(ad)}>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                      <img
                                        width="60"
                                        className="rounded-circle"
                                        src={ad.thumbnail}
                                        alt={ad.ad_name}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <img width="100%" src={post.thumbnail} alt={post.ad_name} />

          <div className="card-body">{post.body}</div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-card mb-3 card">
                  <div className="table-responsive">
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">Impresiones</th>
                          <th className="text-center">Clicks</th>
                          <th className="text-center">Objective</th>
                          <th className="text-center">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">{post.impressions}</td>
                          <td className="text-center">
                            <div className="text-center">{post.clicks}</div>
                          </td>
                          <td className="text-center">{post.objective}</td>
                          <td className="text-center text-muted">
                            <a
                              href={`https://fb.com/${post.post_link}`}
                              target="_blank"
                            >
                              <i className="pe-7s-link"> </i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
