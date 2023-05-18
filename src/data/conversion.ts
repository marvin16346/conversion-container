import useSWR from 'swr';
// import { Event } from "@/data/event";
// import { Media } from "@/data/media";


export type Conversion = {
    // id: number | null,
    // media: Media | null,
    // event: Event | null,
    name: string | null,
    script: string | null,
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
    const { data, error, isLoading, mutate }: Swr = useSWR(`/containers/${domain}/tags?platform_name=${media}&event_name=${event}`);
    
    return {
        conversion: data || makeConversion(),
        isLoading,
        error,
        mutate
    }
}

export function makeConversion(): Conversion {
    return {
        name: "",
        script: ""
    }
}