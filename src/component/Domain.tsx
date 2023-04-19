import { useDomain } from '@/data/domain'
import { List, ListItem, ListItemButton } from '@mui/material'
import Link from 'next/link';
import Loading from './Loading';


const Domain = () => {
    const { domains, error, isLoading }  = useDomain();

    if (isLoading) {
        return <Loading/>
    }

    return ( 
        <List>
          {
            (error || !domains)
            ?
            <div>error</div>
            :
            domains.map((elem) => 
              <ListItemButton key={elem.domain}>
                <Link href={`/domain/${elem.domain}`}>{elem.domain}</Link> 
              </ListItemButton>
            )
          }
        </List>
     );
}
 
export default Domain;