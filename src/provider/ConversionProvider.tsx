import { Event } from "@/data/event";
import { Media } from "@/data/media";
import { ReactElement, useState } from "react";
import { createContext } from "react";

type Props = {
    children :ReactElement
};


export type MemoryConversion = {
    media: Media | null,
    event: Event | null,
}

type MakingConversion = {
    makingConversion: MemoryConversion,
    setMedia: (elem: Media) => void,
    setEvent: (elem: Event) => void,
    isAllSet: () => boolean,
}

export const MakingConversionContext =  createContext<MakingConversion>({
    makingConversion: {
        media: null,
        event: null,
    },
    setMedia: (elem: Media) => {},
    setEvent: (elem: Event) => {},
    isAllSet: () => { return false; },
});


const ConversionProvider = ({ children }: Props) => {
    const [makingConversion, setMakingConversion] = useState<MemoryConversion>({
        media: null,
        event: null,
    });


    return (
        <MakingConversionContext.Provider value={{
            makingConversion,
            setMedia: (elem: Media) => {setMakingConversion({...makingConversion, media: elem})},
            setEvent: (elem: Event) => {setMakingConversion({...makingConversion, event: elem}); },
            isAllSet: () => {
                if (makingConversion.media && makingConversion.event) {
                    return true;
                }
                return false;
            },
        }}>
            {children}
        </MakingConversionContext.Provider>    
    );
};

 
export default ConversionProvider;