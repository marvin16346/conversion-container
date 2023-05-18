import useSWR from 'swr';

export type Media = {
    platform_name: string,
    is_using: boolean,
}


export type MediaDetail = {
    platform_name: string,
    is_using: boolean,
    base_code: string,
    tracking_list: Array<string>
}

type Data = Array<Media>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean,
}

export function useMedia(domain: string) {
    const { data, error, isLoading }: Swr = useSWR(`/containers/${domain}/mediums`);
    
    return {
        medias: data || [],
        isLoading,
        error,
    }
}

export function makeMedia(): Media {
    return {
        platform_name: '',
        is_using: false,
        base_code: '',
        tracking_list: [],
    }
}