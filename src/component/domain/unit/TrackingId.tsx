import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useTrigger } from "@/data/trigger";
import FetchList from "@/component/common/FetchList";
import { useTrackingId } from '@/data/trackingId';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultAxios from '@/axios/axios';
import { useSWRConfig } from 'swr';


interface Props {
    domain: string,
    version: string,
    media: string
}

const TrackingId = ({ domain, version, media }: Props) => {
    const { trackingIds, error, isLoading, mutate } = useTrackingId({
        domain,
        version,
        media
    });

    return FetchList({
        fetchedList: trackingIds, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItem
                key={elem.name}
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon
                            onClick={async () => {
                                const res = await defaultAxios.delete("/api/trackingId", {
                                    data: {
                                        domain,
                                        version,
                                        media,
                                    }
                                });
                                if (res.status == 200) {
                                    mutate(trackingIds);
                                }
                            }}
                        />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton dense>
                    <ListItemText id={elem.name} primary={elem.name} />
                </ListItemButton>
            </ListItem>
        )
    })
}
 
export default TrackingId;