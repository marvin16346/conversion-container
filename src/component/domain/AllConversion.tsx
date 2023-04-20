import { Collapse, Grid, List, ListItem, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { useCallback, useState } from "react";
import { useContext } from 'react';
import { AllConversionContext } from "@/provider/ConversionProvider";
import { Conversion, useConversion } from "@/data/conversion";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FetchList from "../FetchList";


const AllConversion = () => {
    const [whichOpen, setWhichOpen] = useState("");
    const { allConversion } = useContext(AllConversionContext);
    const { conversions, error, isLoading } =  useConversion();

    const mapFunction = useCallback(
        /* table 고려 */
        (elem: Conversion) => (
            <ListItem>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    textAlign="center"
                    spacing={4}
                >
                    {/* 클릭 리스너 등록 */}
                    <Grid item xs={4}>
                        <div>{elem.media!.name}</div>
                    </Grid>

                    <Grid item xs={4}>
                        <div>{elem.event!.name}</div>
                    </Grid>

                    <Grid item xs={4}>
                        <div>{elem.trigger!.name}</div>
                    </Grid>

                    {/* 삭제 버튼 */}
                </Grid>
            </ListItem>
        ),
        [],
    )
    

    return (
        <>
        {
            FetchList({
                fetchedList: conversions, 
                error,
                isLoading,
                mapFunction: mapFunction
            })
        }
        {
            allConversion.map(mapFunction)
        }            
        </>   
    );
        
}
 
export default AllConversion;