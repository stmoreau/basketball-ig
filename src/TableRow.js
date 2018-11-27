import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ player }) => {
  return (
    <tr>
      <td>{player.id + 1}</td>
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
            <span className="right">
              <i className="check" />
            </span>
          </span>
        ) : (
          "Not coming"
        )}
      </td>

      <td>
        {player.payed ? (
          <span>
            Yes
            <span className="right">
              <i className="check" />
            </span>
          </span>
        ) : (
          "No"
        )}
      </td>
    </tr>
  );
};

export default TableRow;
