import { useDomain } from '@/data/domain'
import { ListItemButton } from '@mui/material'
import Link from 'next/link';
import FetchList from '@/component/FetchList';


const Domain = () => {
    const { domains, error, isLoading }  = useDomain();

    return FetchList({
        fetchedList: domains, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.domain}>
                <Link href={`/domain/${elem.domain}`}>{elem.domain}</Link> 
            </ListItemButton>
        )
    });
}
 
export default Domain;