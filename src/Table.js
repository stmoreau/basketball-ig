import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';
import {Data} from 'react-data-grid-addons';
import {players} from './players';

const columns = [
    {key: 'id', name: 'ID', width: 40},
    {key: 'name', name: 'Name', editable: true},
    {key: 'title', name: 'Job Title', editable: true},
    {key: 'interest', name: 'Interest', editable: true}
].map(
    column => ({
        ...column,
        sortable: true
    })
);

class Table extends Component {
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
        const rows = this.getRows();
        return rows[rowIdx];
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
                minHeight={632 /* +35 */}
            />
        );
    }
}

export default Table;
