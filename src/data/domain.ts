import useSWR from 'swr';

export type Domain = {
    domain: string
}

type Data = Array<Domain>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useDomain() {
    const { data, error, isLoading }: Swr = useSWR("/api/domain");
    
    return {
        domains: data,
        isLoading,
        error
    }
}