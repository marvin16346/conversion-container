import useSWR from 'swr';

export type Event = {
    name: string,
    regUrl: string,
    eventListener: string,
}

type Data = Array<Event>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useEvent() {
    const { data, error, isLoading }: Swr = useSWR(`/api/event`);
    
    return {
        events: data || [],
        isLoading,
        error
    }
}

export function makeEvent(): Event {
    return {
        name: "",
        regUrl: "",
        eventListener: ""
    }
}