import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useTrigger } from "@/data/trigger";
import FetchList from "@/component/common/FetchList";
import { useTrackingId } from '@/data/trackingId';
import DeleteIcon from '@mui/icons-material/Delete';


interface Props {
    domain: string,
    version: string,
    media: string
}

const TrackingId = ({ domain, version, media }: Props) => {
    const { trackingIds, error, isLoading } = useTrackingId({
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
                        <DeleteIcon />
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