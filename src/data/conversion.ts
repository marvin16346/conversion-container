import useSWR from 'swr';
// import { Event } from "@/data/event";
// import { Media } from "@/data/media";


export type Conversion = {
    // id: number | null,
    // media: Media | null,
    // event: Event | null,
    triggerKey: string | null,
    executionCode: string | null,
}

type Data = Conversion;

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean,
    mutate: Function
}

type Props = {
    domain: string,
    event: string,
    media: string    
}

export function useConversion({ domain, event, media } : Props) {
    const { data, error, isLoading, mutate }: Swr = useSWR(`/api/conversion?domain=${domain}&media=${media}&event=${event}`);
    
    return {
        conversion: data || makeConversion(),
        isLoading,
        error,
        mutate
    }
}

export function makeConversion(): Conversion {
    return {
        triggerKey: "",
        executionCode: ""
    }
}