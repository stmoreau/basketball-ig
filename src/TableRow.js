import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ player, i }) => {
  return (
    <tr>
      <td>{player.id}</td>
      <td>
        <Link
          to={
            process.env.PUBLIC_URL +
            "/players/" +
            player.name.toLowerCase().replace(" ", ".")
          }
        >
          {player.name}
        </Link>
      </td>

      <td>
        {player.accepted ? (
          <span>
            Coming
            <span className="secondary-content">
              <i className="check" />
            </span>
          </span>
        ) : (
          "Not coming"
        )}
      </td>
    </tr>
  );
};

export default TableRow;
