import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDataGrid from 'react-data-grid';
import {Data} from 'react-data-grid-addons';
import {players} from './players';

const columns = [
    {key: 'id', name: 'ID', width: 40},
    {key: 'name', name: 'Name'},
    {key: 'accepted', name: 'Coming the 29th Nov'},
].map(
    column => ({
        ...column,
        sortable: true
    })
);

class App extends Component {
    constructor(props) {
        super(props);

        const originalRows = players;
        this.state = {
            rows: originalRows,
            originalRows
        };

        this.rowGetter = this.rowGetter.bind(this);
        this.getRows = this.getRows.bind(this);
        this.handleGridSort = this.handleGridSort.bind(this);
        this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
    }

    handleGridSort(sortColumn, sortDirection) {
        const comparator = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
            }
        };

        const rows = sortDirection === 'NONE' ? this.state.originalRows : this.state.rows.sort(comparator);

        this.setState({rows});
    }


    getRows() {
        return Data.Selectors.getRows(this.state);
    }

    rowGetter(rowIdx) {
        let rows = this.getRows();
        let newRows = rows.map(row => {
          if(typeof row.name === 'string' && row.name.includes('<Link') === false){
            row.name = <Link className="arrow" to={`/${row.name.toLowerCase().replace(' ', '.')}`}>{row.name}</Link>;
          }
          return row;
        })
        return newRows[rowIdx];
    }

    handleGridRowsUpdated({fromRow, toRow, updated}) {
        this.setState({
            rows: this.state.rows.map(
                (row, i) => {
                    if (i < fromRow || i > toRow) return row;
                    return {...row, ...updated};
                }
            )
        });
    }

    render() {
        return (
          <ReactDataGrid
            enableCellSelect={true}
            columns={columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            onGridSort={this.handleGridSort}
            onGridRowsUpdated={this.handleGridRowsUpdated}
            minHeight={597 /* 35 */}
          />
        );
    }
}

export default App;
