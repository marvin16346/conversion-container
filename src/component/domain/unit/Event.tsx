import { Autocomplete, Box, IconButton, ListItem, ListItemButton, ListItemIcon, TextField } from '@mui/material'
import FetchList from '@/component/common/FetchList';
import { useContext, useEffect, useState, version } from "react";
import { MakingConversionContext } from "@/provider/ConversionProvider"
import { useEvent, Event } from "@/data/event";
import defaultAxios from '@/axios/axios';
import { mutate } from 'swr';
import EventEditDialog from '../dialog/EventEditDialog';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckIcon from '@mui/icons-material/Check';
import BlockIcon from '@mui/icons-material/Block';
import AutoCompleteForList from '@/component/common/AutoCompleteForList';

interface ExtendedEvent extends Event {
    label: string
}

const Event = () => {
    const { makingConversion, setEvent } = useContext(MakingConversionContext);
    const { events, error, isLoading } = useEvent();
    const [selectedEvent, setSelectedEvent] = useState<Event|null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [allEvents, setAllEvents] = useState<Array<ExtendedEvent>>([]);
    const [showingEvents, setShowingEvents] = useState<Array<ExtendedEvent>>([]);

    useEffect(() => {
        setAllEvents(
            events.map((event) => ({
                ...event,
                label: event.name
            }))
        );
    
      return () => {
      }
    }, [events]);


    return (
        <Box>
            {events && 
            <AutoCompleteForList
                allItems={allEvents}
                showingItems={showingEvents}
                setShowing={setShowingEvents}
            />
            }

            {
                selectedEvent &&
                <EventEditDialog
                    event={selectedEvent}
                    open={open}
                    onClose={() => setOpen(false)}
                    onSubmit={async () => {
                        // const res = await defaultAxios.post('/api/trackingId', {
                        //     name:  document.getElementById("additional-tracking-id")?.innerText
                        // });
                        // if (res.status == 200) {
                        //     mutate(`/api/trackingId?domain=${domain}&version=${version}&media=${selectedMedia.name}`);
                        // }
                    }}
                />
            }

            

            {
            FetchList({
                fetchedList: showingEvents, 
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
                                        setSelectedEvent(elem);
                                        setOpen(true);
                                    }}
                                >
                                    <EditIcon/>
                                </IconButton>
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
                            </>
                        }
                    >
                        <ListItemButton 
                            key={elem.name} 
                            onClick={() => {
                                setEvent(elem);
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
    );
}
 
export default Event;