import React from "react";
import { Link } from "react-router-dom";

export default function PostHome({ ad }) {
  return (
    <tr>
      <td class="text-center">
        <img
          width="80"
          class="rounded-circle"
          src={ad.thumbnail}
          alt={ad.ad_name}
        />
      </td>
      <td class="text-center">{ad.impressions}</td>
      <td class="text-center">
        <div class="text-center">{ad.clicks}</div>
      </td>
      <td class="text-center">{ad.objective}</td>
      <td class="text-center text-muted">
        <Link to={`/benchmark/${ad.ad_id}`}>
          <i class="pe-7s-link"> </i>
        </Link>
      </td>
    </tr>
  );
}
