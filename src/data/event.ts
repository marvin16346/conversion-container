import useSWR from 'swr';

export type Event = {
    name: string
}

type Data = Array<Event>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useEvent(media: string | undefined) {
    const { data, error, isLoading }: Swr = useSWR(media ? `/api/event?media=${media}` : null);
    
    return {
        events: data || [],
        isLoading,
        error
    }
}