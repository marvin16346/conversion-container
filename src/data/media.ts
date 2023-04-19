import useSWR from 'swr';

export type Media = {
    name: string
}

type Data = Array<Media>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean
}

export function useMedia() {
    const { data, error, isLoading }: Swr = useSWR("/api/media");
    
    return {
        media: data || [],
        isLoading,
        error
    }
}