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
    /* api 추가해달라. 응답 형태 좀 맞춰 달라. url에 id 넣어도 되나? */
    const { data, error, isLoading }: Swr = useSWR("/api/domain");
    
    return {
        domains: data || [],
        isLoading,
        error
    }
}