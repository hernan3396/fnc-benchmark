import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./homeSlice";
import HomePost from "./homePost/HomePost";

function Main() {
  const dispatch = useDispatch();

  const homePosts = useSelector((state) => state.home.homePosts);

  useEffect(() => {
    if (homePosts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch]);

  return (
    <>
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div>Comparación</div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="main-card mb-3 card">
                <div class="card-header">Contenidos</div>
                <div class="table-responsive">
                  <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                      <tr>
                        <th class="text-center">Posteo</th>
                        <th class="text-center">Impresiones</th>
                        <th class="text-center">Clicks</th>
                        <th class="text-center">Objetivo</th>
                        <th class="text-center">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {homePosts.map((ad) => (
                        <HomePost key={ad.ad_id} ad={ad} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
