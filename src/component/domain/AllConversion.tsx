import { Box, Collapse, Grid, List, ListItem, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useContext } from 'react';
import { AllConversionContext } from "@/provider/ConversionProvider";
import { Conversion, useConversion } from "@/data/conversion";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FetchList from "../FetchList";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// function createRow(media: Media, )

// const rows = [
//     { id: 1, media: 'kakao', event: '광고 클릭', trigger: '#ad 클릭' },
//     { id: 2, media: 'naver', event: '구매 전환', trigger: '구매 완료' },
// ]

interface ConversionRow {
    id: number,
    media: string,
    event: string,
    trigger: string
}

const columns: GridColDef[] = [
    { field: 'media', headerName: '매체', width: 400 },
    { field: 'event', headerName: '이벤트', width: 400 },
    { field: 'trigger', headerName: '트리거', width: 400 },
];

const mapToRow = (conversion: Conversion) => (
    {
        id: conversion.id,
        media: conversion.media!.name,
        event: conversion.event!.name,
        trigger: conversion.trigger!.name
    } as ConversionRow
)

const AllConversion = () => {
    // const [whichOpen, setWhichOpen] = useState("");
    const { allConversion, setAllConversion } = useContext(AllConversionContext);
    const { conversions, error, isLoading } = useConversion();

    const [rows, setRows] = useState<ConversionRow[]>([]);

    useEffect(() => {
        setRows(allConversion.map(mapToRow));
        return () => {
            
        }
    }, [allConversion]);


    useEffect(() => {
        setAllConversion(conversions);
        
    
        return () => {
        }
    }, [conversions]);


    
    
    

    // const mapFunction = useCallback(
    //     /* table 고려 */
    //     (elem: Conversion) => (
    //         <ListItem>
    //             <Grid
    //                 container
    //                 direction="row"
    //                 justifyContent="space-around"
    //                 textAlign="center"
    //                 spacing={4}
    //             >
    //                 {/* 클릭 리스너 등록 */}
    //                 <Grid item xs={4}>
    //                     <div>{elem.media!.name}</div>
    //                 </Grid>

    //                 <Grid item xs={4}>
    //                     <div>{elem.event!.name}</div>
    //                 </Grid>

    //                 <Grid item xs={4}>
    //                     <div>{elem.trigger!.name}</div>
    //                 </Grid>

    //                 {/* 삭제 버튼 */}
    //             </Grid>
    //         </ListItem>
    //     ),
    //     [],
    // )
    

    return (
        <div>
            <DataGrid
                rows={rows}
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
            />
        {/* {
            FetchList({
                fetchedList: conversions, 
                error,
                isLoading,
                mapFunction: mapFunction
            })
        }
        {
            allConversion.map(mapFunction)
        }             */}
        </div>   
    );
        
}
 
export default AllConversion;