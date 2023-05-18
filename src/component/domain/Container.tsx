import { useContainer } from '@/data/container'
import { IconButton, ListItemButton, Stack, Typography } from '@mui/material'
import FetchList from '@/component/common/FetchList';
import { useRouter } from 'next/router';
import ContainerAddDialog from './dialog/ContainerAddDialog';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';


const Container = () => {
    const { containers, error, isLoading }  = useContainer();
    const [open, setOpen] = useState<boolean>(false);

    const router = useRouter();

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
                <ListItemButton key={elem.domain} onClick={() => {router.push(`/container/${elem.domain}`)}}>
                    {/* <Link href={`/domain/${elem.domain}`}>{elem.domain}</Link>  */}
                    {elem.domain}
                </ListItemButton>
            )
        })
        }


        <ContainerAddDialog/>
        </>
    );
}
 
export default Container;