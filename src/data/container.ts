import useSWR from 'swr';

export type Container = {
    domain: string
}

type Data = Array<Container>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useContainer() {
    const { data, error, isLoading }: Swr = useSWR("/containers");
    // const { data, error, isLoading }: Swr = useSWR("/container");
    
    return {
        containers: data || [],
        isLoading,
        error
    }
}