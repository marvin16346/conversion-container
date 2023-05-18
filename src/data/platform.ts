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

export function usePlatform(domain: string) {
    const { data, error, isLoading }: Swr = useSWR(`/platforms?container_domain=${domain}`);
    
    return {
        platforms: data || [],
        isLoading,
        error,
    }
}

 