import React, { Component } from "react";
import { Link } from "react-router-dom";
import { players } from "./helpers/players";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
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
              columns: [
                {
                  Header: "Id",
                  id: "id",
                  maxWidth: 40,
                  accessor: d => d.id + 1
                }
              ]
            },
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  id: "name",
                  accessor: d => (
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/" +
                        d.name.toLowerCase().replace(" ", ".")
                      }
                    >
                      {d.name}
                    </Link>
                  )
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Job Title",
                  accessor: "title"
                },
                {
                  Header: "Email",
                  id: "email",
                  accessor: d => <a href={"mailto:" + d.email}>{d.email}</a>
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Times Played",
                  id: "datesParticipated",
                  accessor: d => d.datesParticipated.length
                },
                {
                  Header: "Next Game (29th Nov)",
                  id: "accepted",
                  accessor: d => (d.accepted ? "Coming" : "Not coming")
                }
              ]
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

export default Table;
