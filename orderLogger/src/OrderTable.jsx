import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
    { field: "soft1Id", headerName: "ID", width: 140 },
    { field: "customerName", headerName: "First name", width: 100 },
    { field: "customerPhone", headerName: "Cunstomer Phone", width: 130 },
    { field: "called", headerName: "called?", width: 130 },
    { field: "date", headerName: "Order Date", width: 130 },
    { field: "salesman", headerName: "Salesman", width: 130 },
    {
        field: "completed",
        headerName: "completed",
        width: 130,
        renderCell: (params) => <Checkbox checked={params.value} />,
    },
    {
        field: "delete",
        headerName: "Delete",
        width: 130,
        renderCell: (params) => (
            <IconButton
                variant="contained"
                style={{color: "red"}}
                onClick={() => handleDelete(params.row.id)}
            >
                <DeleteIcon />
            </IconButton>
        ),
    },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({ data }) {
    console.log(data);

    return (
        <Paper sx={{ height: 700, width: "100%", mt: 5 }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 15]}
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
