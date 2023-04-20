import { Event } from "@/data/event";
import { Media } from "@/data/media";
import { Trigger } from "@/data/trigger";
import { ReactElement, useState } from "react";
import { createContext } from "react";

type Props = {
    children :ReactElement
};

type Conversion = {
    media: Media | null,
    event: Event | null,
    trigger: Trigger | null
}

type AllConversion = {
    allConversion: Conversion[],
    pushToAllConversion: (elem: Conversion) => void,
    removeInAllConversion: (elem: Conversion) => void
}

type MakingConversion = {
    makingConversion: Conversion,
    setMedia: (elem: Media) => void,
    setEvent: (elem: Event) => void,
    setTrigger: (elem: Trigger) => void,
    isAllSet: () => boolean,
}

export const MakingConversionContext =  createContext<MakingConversion>({
    makingConversion: {
        media: null,
        event: null,
        trigger: null
    },
    setMedia: (elem: Media) => {},
    setEvent: (elem: Event) => {},
    setTrigger: (elem: Trigger) => {},
    isAllSet: () => { return false; }
});

export const AllConversionContext =  createContext<AllConversion>({
    allConversion: [],
    pushToAllConversion: (elem: Conversion) => {},
    removeInAllConversion: (elem: Conversion) => {}
});

const ConversionProvider = ({ children }: Props) => {
    const [makingConversion, setMakingConversion] = useState<Conversion>({
        media: null,
        event: null,
        trigger: null
    });
    const [allConversion, setAllConversion] = useState<Conversion[]>([]);


    return (
        <MakingConversionContext.Provider value={{
            makingConversion,
            setMedia: (elem: Media) => {setMakingConversion({...makingConversion, media: elem, event: null})},
            setEvent: (elem: Event) => {setMakingConversion({...makingConversion, event: elem}); },
            setTrigger: (elem: Trigger) => {setMakingConversion({...makingConversion, trigger: elem})},
            isAllSet: () => {
                if (makingConversion.media && makingConversion.event && makingConversion.trigger) {
                    return true;
                }
                return false;
            }
        }}>
            <AllConversionContext.Provider value={{
                allConversion,
                pushToAllConversion: (elem) => setAllConversion(allConversion.concat([elem])),
                removeInAllConversion: (elem) => setAllConversion(allConversion.filter(elem2 => JSON.stringify(elem2) != JSON.stringify(elem.name)))
            }}>
                {children}
            </AllConversionContext.Provider>
        </MakingConversionContext.Provider>    
    );
};

 
export default ConversionProvider;