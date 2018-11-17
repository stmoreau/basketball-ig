import React, { Component } from "react";
import { Link } from "react-router-dom";
import { players } from "./helpers/constants";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Players extends Component {
  constructor() {
    super();
    this.state = {
      data: players
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Id",
              id: "id",
              maxWidth: 40,
              accessor: d => d.id + 1
            },
            {
              Header: "First Name",
              id: "name",
              accessor: d => (
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    "/players/" +
                    d.name.toLowerCase().replace(" ", ".")
                  }
                >
                  {d.name}
                </Link>
              )
            },
            {
              Header: "Next Game (29th Nov)",
              id: "accepted",
              accessor: d =>
                d.accepted ? (
                  <span>
                    Coming
                    <span className="secondary-content">
                      <i className="check" />
                    </span>
                  </span>
                ) : (
                  "Not coming"
                )
            }
          ]}
          defaultPageSize={players.length}
          showPagination={false}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default Players;
