import { ReactElement } from "react"
import Loading from './Loading';
import { List } from '@mui/material'


type Props = {
    fetchedList: Array<any>,
    error: any,
    isLoading: any,
    mapFunction: (value: any, index: number, array: any[]) => ReactElement
}

const FetchList = ({ fetchedList, error, isLoading, mapFunction }: Props) => {
    
    if (isLoading) {
        return <Loading/>
    }

    return ( 
            error
            ?
            <div>error</div>
            :
            <List>
                {
                    fetchedList.map(mapFunction)
                }
            </List>
     );
}
 
export default FetchList;