import React, { useEffect, useMemo, useRef, useState } from "react";
import MaterialReactTable, { MaterialReactTableProps } from 'material-react-table';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import { useSelector } from "react-redux";
import { TableCell, TableHead } from "@mui/material";

export const MaterialReactTableTest =() => {
    const [rows, setRows] = useState<any[]>([]);
    const [saveRows, setSaveRows] = useState<any[]>([]);
    const accessToken = useSelector((state:any) => state.accessToken);
    const userIdxRef = useRef<any>();
    useEffect(() => {
        axios.post("http://192.168.0.76:8080/api/selectAllUser", {}, {
            headers: {
                'Authorization' : `bearer ${accessToken}`
            },
        }).then((data:any) => {
            setRows(data.data.result.userList);
        })
    }, [])
    const columns:any = useMemo(
        () => [
        {
            header: '유저 정보',
            columns:
            [
                {
                    accessorKey: "userIdx",
                    header: "유저번호",
                },
                {
                    accessorKey: "userId",
                    header: "아이디",
                },
                {
                    accessorKey: "userPassword",
                    header: "비밀번호",
                },
                {
                    accessorKey: "userRole",
                    header: "유저권한",
                },
            ],
        },
        {
            header: '개인 정보',
            columns:
            [
                {
                    accessorKey: "userName",
                    header: "이름",
                },
                {
                    accessorKey: "userMobile",
                    header: "전화번호",
                },
                {
                    accessorKey: "userAddrs",
                    header: "주소",
                },
            ]
        },
        {
            header:'test',
            enableSorting: false,
        }
        
    ], []);
    const initalState = {
        grouping: ['userRole']
    }
 
    const handleSaveRow: MaterialReactTableProps<any>['onEditingRowSave'] =
      async ({ exitEditingMode, row, values }) => {
        rows[row.index] = values;
        setRows([...rows]);
        console.log(rows[row.index])
        exitEditingMode(); //required to exit editing mode
    };
    return (
        <div>
            <MaterialReactTable 
                columns={columns}
                enableGrouping={true}
                enableEditing={true}
                editingMode="modal"
                initialState={initalState}
                enableStickyFooter={true}
                enableStickyHeader={true}
                data={rows}
                enableRowNumbers={true}
                onEditingRowSave={(e:any) => handleSaveRow(e)}
                />
        </div>
    )
}
export default MaterialReactTableTest;