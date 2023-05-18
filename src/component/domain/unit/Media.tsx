import { Box, ListItemButton, TextField, Autocomplete, ListItem, IconButton, ListItemIcon } from '@mui/material'
import FetchList from '@/component/common/FetchList';
import { useMedia, Media } from '@/data/media';
import { useContext, useEffect, useState } from 'react';
import { MakingConversionContext } from "@/provider/ConversionProvider"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import MediaEditDialog from '../dialog/MediaEditDialog';
import defaultAxios from '@/axios/axios';
import { useSWRConfig } from 'swr';
import EditIcon from '@mui/icons-material/Edit';
import AutoCompleteForList from '@/component/common/AutoCompleteForList';

type Props = {
    domain: string
}

interface ExtendedMedia extends Media {
    label: string
} 

const Media = ({ domain }: Props) => {
    const { medias, error, isLoading }  = useMedia(domain);
    const { setMedia } = useContext(MakingConversionContext);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedMedia, setSelectedMedia] = useState<Media|null>(null);
    const [showingMedias, setShowingMedias] = useState<Array<ExtendedMedia>>([]);
    const [allMedias, setAllMedias] = useState<Array<ExtendedMedia>>([]);
    


    useEffect(() => {
        setAllMedias(
            medias.map((media) => ({
                ...media,
                label: media.platform_name
            }))
        );
    
      return () => {
      }
    }, [medias]);
    

    return ( 
        <Box>
            {allMedias && 
            <AutoCompleteForList
                allItems={allMedias}
                showingItems={showingMedias}
                setShowing={setShowingMedias}
            />
            }

            {
                selectedMedia &&
                <MediaEditDialog
                    domain={domain}
                    platform={selectedMedia.platform_name}
                    open={open}
                    onClose={() => setOpen(false)}
                />
            }

            

            {
            FetchList({
                fetchedList: showingMedias, 
                error,
                isLoading,
                mapFunction: (elem: Media) => (
                    <ListItem
                        key={elem.platform_name}
                        secondaryAction={
                            <>
                                <IconButton 
                                    edge="end" 
                                    aria-label="add" 
                                    onClick={(evt) => {
                                        evt.stopPropagation();
                                        setSelectedMedia(elem);
                                        setOpen(true);
                                    }}
                                >
                                    <EditIcon/>
                                </IconButton>

                                <IconButton 
                                    edge="end" 
                                    onClick={async (evt) => {
                                        evt.stopPropagation();
                                        const res = await defaultAxios.put(
                                            `/containers/${domain}/mediums/${elem.platform_name}/is_using`,
                                        );
                                        if (res.status == 200) {
                                            setAllMedias(
                                                allMedias.map((media) => (
                                                    media.platform_name == elem.platform_name
                                                    ?
                                                     {
                                                        ...media,
                                                        is_using: !media.is_using
                                                    }
                                                    :
                                                    media
                                                ))
                                            );
                                            // mutate(
                                            //     `/containers${domain}/mediums`,
                                                // medias.map((media) => (
                                                //     media.platform_name == elem.platform_name
                                                //     ?
                                                //      {
                                                //         ...media,
                                                //         is_using: !media.is_using
                                                //     }
                                                //     :
                                                //     media
                                                // ))
                                            // );
                                        }
                                    }}
                                    >
                                    {
                                        elem.is_using
                                        ?
                                        <RemoveCircleIcon/>
                                        :
                                        <AddCircleIcon/>
                                    }
                                </IconButton>
                            </>
                        }
                    >
                        <ListItemButton 
                            key={elem.platform_name} 
                            onClick={() => {
                                setMedia(elem);
                            }}
                        >
                            <ListItemIcon>
                                {
                                    elem.is_using
                                    ?
                                    <CheckIcon color="success" />
                                    :
                                    <BlockIcon color="secondary" />
                                }
                            </ListItemIcon>
                            {elem.platform_name}
                        </ListItemButton>
                    </ListItem>
                )
            })
            }
        </Box>
    )
}
 
export default Media;