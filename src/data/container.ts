import useSWR from 'swr';

export type Container = {
    name: string,
    domain: string,
    description: string
}

type Data = Array<Container>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useContainer() {
    const { data, error, isLoading }: Swr = useSWR("/containers");
    
    return {
        containers: data || [],
        isLoading,
        error
    }
}