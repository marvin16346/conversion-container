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
import { useRouter } from 'next/router';
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
    const { makingConversion, setMedia } = useContext(MakingConversionContext);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedMedia, setSelectedMedia] = useState<Media|null>(null);
    const [showingMedias, setShowingMedias] = useState<Array<ExtendedMedia>>([]);
    const [allMedias, setAllMedias] = useState<Array<ExtendedMedia>>([]);
    
    const {mutate} = useSWRConfig();
    const router = useRouter();
    const { version } = router.query;


    useEffect(() => {
        setAllMedias(
            medias.map((media) => ({
                ...media,
                label: media.name
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
                    media={selectedMedia}
                    open={open}
                    onClose={() => setOpen(false)}
                    onSubmit={async () => {
                        
                    }}
                />
            }

            

            {
            FetchList({
                fetchedList: showingMedias, 
                error,
                isLoading,
                mapFunction: (elem) => (
                    <ListItem
                        key={elem.name}
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
                                {
                                    elem.using
                                    ?
                                    <IconButton 
                                        edge="end" 
                                        aria-label="add" 
                                        onClick={async (evt) => {
                                            evt.stopPropagation();
                                            const res = await defaultAxios.put(
                                                "/media",
                                                {
                                                    using: true
                                                }
                                            );
                                            if (res.status == 200) {
                                                mutate(`/media?domain=${domain}`);
                                            }
                                        }}
                                    >
                                        <RemoveCircleIcon/>
                                    </IconButton>
                                    :
                                    <IconButton 
                                        edge="end" 
                                        aria-label="add" 
                                        onClick={async (evt) => {
                                            evt.stopPropagation();
                                            const res = await defaultAxios.put(
                                                "/media",
                                                {
                                                    using: false
                                                }
                                            );
                                            if (res.status == 200) {
                                                mutate(`/media?domain=${domain}`);
                                            }
                                        }}
                                    >
                                        <AddCircleIcon/>
                                    </IconButton>
                                }
                            </>
                        }
                    >
                        <ListItemButton 
                            key={elem.name} 
                            onClick={() => {
                                setMedia(elem);
                            }}
                        >
                            <ListItemIcon>
                                {
                                    elem.using
                                    ?
                                    <CheckIcon color="success" />
                                    :
                                    <BlockIcon color="secondary" />
                                }
                            </ListItemIcon>
                            {elem.name}
                        </ListItemButton>
                    </ListItem>
                )
            })
            }
        </Box>
    )
}
 
export default Media;