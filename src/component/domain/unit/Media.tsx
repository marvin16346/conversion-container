import { Box, ListItemButton, TextField, Autocomplete, ListItem, IconButton, ListItemIcon } from '@mui/material'
import FetchList from '@/component/common/FetchList';
import { useMedia, Media } from '@/data/media';
import { useContext, useState } from 'react';
import { MakingConversionContext } from "@/provider/ConversionProvider"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import MediaEditDialog from '../MediaEditDialog';
import defaultAxios from '@/axios/axios';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next/router';

type Props = {
    domain: string
}

const Media = ({ domain }: Props) => {
    const { medias, error, isLoading }  = useMedia(domain);
    const { makingConversion, setMedia } = useContext(MakingConversionContext);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedMedia, setSelectedMedia] = useState<Media|null>(null);
    const {mutate} = useSWRConfig();
    const router = useRouter();
    const { version } = router.query;

    return ( 
        <Box>
            {medias && 
            
            <Autocomplete
                disablePortal
                id="demo"
                options={
                    medias.map((media) => ({
                        ...media,
                        label: media.name
                    }))
                }
                renderInput={(params) => <TextField {...params}  />}
            />
            }

            {
                selectedMedia &&
                <MediaEditDialog
                    media={selectedMedia}
                    open={open}
                    onClose={() => setOpen(false)}
                    onSubmit={async () => {
                        const res = await defaultAxios.post('/api/trackingId', {
                            name:  document.getElementById("additional-tracking-id")?.innerText
                        });
                        if (res.status == 200) {
                            mutate(`/api/trackingId?domain=${domain}&version=${version}&media=${selectedMedia.name}`);
                        }
                    }}
                />
            }

            

            {
            FetchList({
                fetchedList: medias.map((media) => ({
                    ...media,
                    label: media.name
                })), 
                error,
                isLoading,
                mapFunction: (elem) => (
                    <ListItem
                        key={elem.name}
                        secondaryAction={
                            <IconButton 
                                edge="end" 
                                aria-label="add" 
                                onClick={(evt) => {
                                    evt.stopPropagation();
                                }}
                            >
                                {
                                    elem.using
                                    ?
                                    <RemoveCircleIcon/>
                                    :
                                    <AddCircleIcon/>
                                }
                            </IconButton>
                        }
                        onClick={() => {
                            setSelectedMedia(elem);
                            setOpen(true);
                        }}
                    >
                        <ListItemButton key={elem.name} onClick={() => {
                            setMedia(elem);
                        }}>
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