import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const UserDataGrid = () => {
    const [rows, setRows] = useState<any[]>([]);
    const accessToken = useSelector((state:any) => state.accessToken);
    const columns: GridColDef[] = [
        { 
            field: 'userIdx', 
            headerName: '번호', 
            width: 90 },
        {
            field: 'userName',
            headerName: '이름',
            type: 'string',
            width: 150,
            editable: true,
        },
        {
            field: 'userRole',
            headerName: '권한',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'userMobile',
            headerName: '번호',
            type: 'string',
            sortable: true,
            width: 160,
        },
        {
            field: 'userAddrs',
            headerName: '주소',
            type: 'string',
            sortable: true,
            width: 160,
        },
    ];
    axios.post("http://192.168.0.76:8080/api/selectAllUser", {
        headers: {
            Authorization: `bearer ${accessToken}`
        }
    }).then((data:any) => {
        const row:any[] = [];
        data.data.result.userList.filter((ele:any) => ele.userRole === "ADMIN").map((item:any) => {
            row.push(item);
        })
        setRows(row);
    })

    return (
        <Container >
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    getRowId={(rows) => rows.userIdx}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </Container>
    );
};
export default UserDataGrid;