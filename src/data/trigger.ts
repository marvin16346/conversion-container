import useSWR from 'swr';

export type Trigger = {
    name: string
}

type Data = Array<Trigger>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useTrigger() {
    const { data, error, isLoading }: Swr = useSWR("/api/trigger");
    
    return {
        triggers: data || [],
        isLoading,
        error
    }
}