import { ListItemButton } from '@mui/material'
import FetchList from '@/component/FetchList';
import { useContext } from "react";
import { MakingConversionContext } from "@/provider/ConversionProvider"
import { useEvent } from "@/data/event";


const Event = () => {
    const { makingConversion, setEvent } = useContext(MakingConversionContext);
    const { events, error, isLoading } = useEvent(makingConversion.media?.name);


    return FetchList({
        fetchedList: events, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.name} onClick={() => {
                setEvent(elem);
            }}>
                {elem.name}
            </ListItemButton>
        )
    });
}
 
export default Event;