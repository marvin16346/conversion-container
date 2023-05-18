import useSWR from 'swr';

export type EventDetail = {
    name: string,
    url_reg: string,
    func_code: string,
}

export type Event = {
    name: string,
}

type Data = Array<Event>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useEvent(domain: string) {
    const { data, error, isLoading }: Swr = useSWR(`/containers/${domain}/events`);
    
    return {
        events: data || [],
        isLoading,
        error
    }
}
