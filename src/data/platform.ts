import useSWR from 'swr';

export type Platform = {
    name: string,
}

type Data = Array<Platform>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean,
}

export function usePlatform() {
    const { data, error, isLoading }: Swr = useSWR(`/platforms`);
    
    return {
        platforms: data || [],
        isLoading,
        error,
    }
}

 