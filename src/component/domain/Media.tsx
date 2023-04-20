import { ListItemButton } from '@mui/material'
import FetchList from '@/component/FetchList';
import { useMedia } from '@/data/media';
import { useContext } from 'react';
import { MakingConversionContext } from "@/provider/ConversionProvider"

const Media = () => {
    const { medias, error, isLoading }  = useMedia();
    const { makingConversion, setMedia } = useContext(MakingConversionContext);

    return FetchList({
        fetchedList: medias, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.name} onClick={() => {
                setMedia(elem);
            }}>
                {elem.name}
            </ListItemButton>
        )
    });
}
 
export default Media;