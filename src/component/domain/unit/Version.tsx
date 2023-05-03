import { Box, ListItemButton } from '@mui/material'
import { useVersionByDomain } from "@/data/version";
import FetchList from "@/component/common/FetchList";
import { useRouter } from 'next/router';


const Version = () => {
    const router = useRouter();
    const { domain } = router.query;

    console.log('domain', domain)
    const { versions, error, isLoading } = useVersionByDomain(domain as string | undefined);


    return FetchList({
        fetchedList: versions, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.name} onClick={() => {
                router.push(`/domain/${domain}/version/${elem.name}`);
            }}>
                {elem.name}
            </ListItemButton>
        )
    })
}
 
export default Version;