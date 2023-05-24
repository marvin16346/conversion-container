import { useContainer } from '@/data/container'
import { IconButton, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import FetchList from '@/component/common/FetchList';
import { useRouter } from 'next/router';
import ContainerAddDialog from '../dialog/ContainerAddDialog';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import defaultAxios from '@/axios/axios';
import Link from 'next/link';

const ContainerPanel = () => {
    const { containers, error, isLoading }  = useContainer();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
        <Stack
            direction={"row"}
            justifyContent={"center"}
        >
            <Typography variant="h4" color="initial">관리 중인 컨테이너</Typography>
            <IconButton
                onClick={() => {
                    setOpen(true);
                }}
            >
                <AddCircleIcon color="primary"/>
            </IconButton>
        </Stack>

        {
        FetchList({
            fetchedList: containers, 
            error,
            isLoading,
            mapFunction: (elem) => (
                <ListItem 
                    key={elem.domain} 
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon
                                onClick={async () => {
                                    const res = await defaultAxios.delete(
                                        `/containers/${elem.domain}`
                                    )
                                }}
                            />
                        </IconButton>
                    }
                >
                    <ListItemButton>
                        <Link href={`/container/${elem.domain}`}>{elem.domain}</Link> 
                        {/* {elem.domain} */}
                    </ListItemButton>
                </ListItem>
            )
        })
        }


        <ContainerAddDialog
            open={open}
            onClose={() => setOpen(false)}
        />
        </>
    );
}
 
export default ContainerPanel;