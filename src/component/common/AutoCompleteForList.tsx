import { TextField, Autocomplete } from '@mui/material'
import { useEffect, useState } from 'react'

type Item = {
    label: string
}

type Props = {
    allItems: Item[],
    showingItems: Item[],
    setShowing: Function,
}

const AutoCompleteForList = ({ allItems, showingItems, setShowing  }: Props) => {
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
        />
     );
}
 
export default AutoCompleteForList;