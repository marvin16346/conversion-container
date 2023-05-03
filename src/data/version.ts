import useSWR from 'swr';

export type Version = {
    name: string
}

type Data = Array<Version>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useVersionByDomain(domain: string | undefined) {
    const { data, error, isLoading }: Swr = useSWR(domain ? `/api/version?domain=${domain}` : null);
    
    return {
        versions: data || [],
        isLoading,
        error
    }
}