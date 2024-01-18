import {DataTable, DataTableProps} from "primereact/datatable";
import React from "react";

export default function Table({data, props, children}: { data: any[], props?: DataTableProps<any>, children: any }) {
    return (
        <DataTable value={data} stripedRows
                   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                   sortMode={"multiple"} sortField={"id"} sortOrder={-1} removableSort
                   dataKey={"id"}
                   loading={data === undefined || data === null} filterDisplay="row"
                   stateStorage="session" size={"small"}
                   {...props}
        >
            {children}
        </DataTable>
    );
}
