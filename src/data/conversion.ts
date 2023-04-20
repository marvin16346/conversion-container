import useSWR from 'swr';
import { Event } from "@/data/event";
import { Media } from "@/data/media";
import { Trigger } from "@/data/trigger";


export type Conversion = {
    media: Media | null,
    event: Event | null,
    trigger: Trigger | null
}

type Data = Array<Conversion>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useConversion() {
    const { data, error, isLoading }: Swr = useSWR("/api/conversion");
    
    return {
        conversions: data || [],
        isLoading,
        error
    }
}