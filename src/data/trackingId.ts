import useSWR from 'swr';

export type TrackingId = {
    name: string
}

type Data = Array<TrackingId>

type Swr = {
    data: Data | undefined,
    error: any,
    isLoading: boolean,
    mutate: Function,
}

type Props = {
    domain: string,
    version: string,
    media: string
}

export function useTrackingId({ domain, version, media }: Props) {
    const { data, mutate, error, isLoading }: Swr = useSWR(`/api/trackingId?domain=${domain}&version=${version}&media=${media}`);
    
    return {
        trackingIds: data || [],
        isLoading,
        error,
        mutate
    }
}