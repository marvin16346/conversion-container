import AutoCompleteForList from "@/component/common/AutoCompleteForList";
import Loading from "@/component/common/Loading";
import { Platform, usePlatform } from "@/data/platform";
import { useEffect, useState } from "react";


interface PlatformOption extends Platform {
    label: string
}

type Props = {
    onSelect: Function
}

const PlatformOption = ({ onSelect }: Props) => {
    const { platforms, error, isLoading } =  usePlatform();;
    const [allPlatforms, setAllPlatforms] = useState<PlatformOption[]>([]);
    const [showingPlatforms, setShowingPlatforms] = useState<PlatformOption[]>([]);

    useEffect(() => {
      setAllPlatforms(
        platforms.map((platform) => ({
            ...platform,
            label: platform.name
        }))
      )
    
      return () => {
      }
    }, [platforms]);
    

    return ( 
        isLoading
        ?
        <Loading/>
        :
        <AutoCompleteForList
            allItems={allPlatforms}
            showingItems={showingPlatforms}
            setShowing={setShowingPlatforms}
            onSelect={onSelect}
        />
     );
}
 
export default PlatformOption;