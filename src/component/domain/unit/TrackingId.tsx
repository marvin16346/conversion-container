import { IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useTrigger } from "@/data/trigger";
import FetchList from "@/component/common/FetchList";
import { useTrackingId } from '@/data/trackingId';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultAxios from '@/axios/axios';
import { mutate, useSWRConfig } from 'swr';
import { Media } from '@/data/media';
import { useEffect, useState } from 'react';


interface Props {
    domain: string,
    version: string,
    media: Media
}

const TrackingId = ({ domain, version, media }: Props) => {

    const [trackingList, setTrackingList] = useState<Array<string>>([]);

    useEffect(() => {
      setTrackingList(media.trackingList);
    
      return () => {
      }
    }, []);
    

    return (
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
                                        const res = await defaultAxios.put(`/api/media?domain=${domain}`,
                                            {
                                                media: {
                                                    ...media,
                                                    trackingList: nextTrackingList
                                                }
                                            }
                                        );
                                        if (res.status == 200) {
                                            // mutate(`/api/media?domain=${domain}`);
                                            setTrackingList(nextTrackingList);
                                        }
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
    )
}
 
export default TrackingId;