import useSWR from 'swr';

export type Media = {
    name: string,
    using: boolean,
    commonScript: string,
    trackingList: Array<string>
}

type Data = Array<Media>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean,
}

export function useMedia(domain: string) {
    const { data, error, isLoading }: Swr = useSWR(`/api/media?domain=${domain}`);
    
    return {
        medias: data || [],
        isLoading,
        error,
    }
}