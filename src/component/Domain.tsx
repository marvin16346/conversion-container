import { useDomain } from '@/data/domain'
import { ListItemButton } from '@mui/material'
import Link from 'next/link';
import FetchList from '@/component/common/FetchList';
import { useRouter } from 'next/router';


const Domain = () => {
    const { domains, error, isLoading }  = useDomain();

    const router = useRouter();

    return FetchList({
        fetchedList: domains, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.domain} onClick={() => {router.push(`/domain/${elem.domain}`)}}>
                {/* <Link href={`/domain/${elem.domain}`}>{elem.domain}</Link>  */}
                {elem.domain}
            </ListItemButton>
        )
    });
}
 
export default Domain;