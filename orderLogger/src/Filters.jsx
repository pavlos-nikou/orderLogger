import { TextField } from "@mui/material";
import "./Filters.css";

export default function Filters() {
    return (
        <div className="Filters">
            <TextField
                className="filter"
                id="standard-basic"
                label="Soft1 Id"
                variant="standard"
            />
            <TextField
                className="filter"
                id="standard-basic"
                label="Customer Name"
                variant="standard"
            />
            <TextField
                className="filter"
                id="standard-basic"
                label="Customer Tel."
                variant="standard"
            />
            <TextField
                className="filter"
                id="standard-basic"
                label="Date"
                variant="standard"
            />
            <TextField
                id="standard-basic"
                label="Salesman"
                variant="standard"
            />
            <TextField
                id="standard-basic"
                label="Completed"
                variant="standard"
            />
        </div>
    );
}
