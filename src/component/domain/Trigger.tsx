import { ListItemButton } from '@mui/material'
import { useTrigger } from "@/data/trigger";
import FetchList from "@/component/FetchList";
import { useContext } from 'react';
import { MakingConversionContext } from "@/provider/ConversionProvider"


const Trigger = () => {
    const { triggers, error, isLoading } = useTrigger();
    const { setTrigger } = useContext(MakingConversionContext);

    return FetchList({
        fetchedList: triggers, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.name} onClick={() => {
                setTrigger(elem);
            }}>
                {elem.name}
            </ListItemButton>
        )
    })
}
 
export default Trigger;