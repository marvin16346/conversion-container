// type FetchedList = Array<any>

// type Props = {
//     fetchedList: FetchedList,
//     error: any,
//     isLoading: any
// }

// const FetchList = ({ fetchedList, error, isLoading }: Props) => {
    
//     if (isLoading) {
//         return <div>loading</div>
//     }

//     return (  
//         (error || !fetchedList)
//         ?
//         <div>error</div>
//         :
//         fetchedList.map((elem) => 
//             <ListItemButton key={elem.domain}>
//                 <Link href={`/domain/${elem.domain}`}>{elem.domain}</Link> 
//             </ListItemButton>
//         )
//     );
// }
 
// export default FetchList;