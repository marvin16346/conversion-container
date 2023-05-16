import { useContainer } from '@/data/container'
import { ListItemButton } from '@mui/material'
import Link from 'next/link';
import FetchList from '@/component/common/FetchList';
import { useRouter } from 'next/router';


const Container = () => {
    const { containers, error, isLoading }  = useContainer();

    const router = useRouter();

    return FetchList({
        fetchedList: containers, 
        error,
        isLoading,
        mapFunction: (elem) => (
            <ListItemButton key={elem.domain} onClick={() => {router.push(`/container/${elem.domain}`)}}>
                {/* <Link href={`/domain/${elem.domain}`}>{elem.domain}</Link>  */}
                {elem.domain}
            </ListItemButton>
        )
    });
}
 
export default Container;