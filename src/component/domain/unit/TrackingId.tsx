import { Button, IconButton, Box, Stack, TextField, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import defaultAxios from '@/axios/axios';
import { Media } from '@/data/media';
import { useEffect, useState } from 'react';


interface Props {
    trackingList: string[],
    setTrackingList: Function
}

const TrackingId = ({ trackingList, setTrackingList }: Props) => {

    return (
        <Box>
            <List>
                {
                    trackingList.map((trackingId) => 
                        <ListItem
                            key={trackingId}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon
                                        onClick={async () => {
                                            let nextTrackingList = trackingList.filter(
                                                (original) => original != trackingId
                                            );
                                            setTrackingList(nextTrackingList);
                                        }}
                                    />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton dense>
                                <ListItemText primary={trackingId} />
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List>
            <Stack direction={'row'} >
                <TextField
                    id="more-tracking-id"
                    label="트래킹 id"
                    sx={{
                        flexGrow: 1
                    }}
                />
                <Button 
                    variant="outlined"
                    onClick={() => {
                        setTrackingList([
                            ...trackingList,
                            document.getElementById("more-tracking-id").value
                        ]);
                    }}
                >
                    추가
                </Button>
            </Stack>
        </Box>
    )
}
 
export default TrackingId;