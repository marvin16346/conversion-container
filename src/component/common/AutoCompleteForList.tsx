import { TextField, Autocomplete } from '@mui/material'
import { useEffect, useState } from 'react'

type Item = {
    label: string
}

type Props = {
    allItems: Item[],
    showingItems: Item[],
    setShowing: Function,
    onSelect?: Function
}

const AutoCompleteForList = ({ allItems, showingItems, setShowing, onSelect  }: Props) => {
    useEffect(() => {
        setShowing(allItems);
        return () => {
        }
    }, [allItems, setShowing]);
    

    return ( 
        <Autocomplete
            disablePortal
            options={
                showingItems
            }
            renderInput={(params) => <TextField {...params}  />}
            onInputChange={(event, newInput) => {
                if (newInput === "") {
                    setShowing(allItems);
                } else {
                    setShowing(allItems.filter((item) => 
                        item.label.includes(newInput)
                    ));
                }
            }}
            onChange={(event, newValue) => {
                if (onSelect && newValue) {
                    onSelect(newValue.name);
                }
            }}
        />
     );
}
 
export default AutoCompleteForList;