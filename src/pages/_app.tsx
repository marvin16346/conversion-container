import DefaultLayout from '@/layout/DefaultLayout'
import AuthProvider from '@/provider/AuthProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import defaultAxios from '@/axios/axios';
import AuthChecker from '@/auth/AuthChecker'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        fetcher: url => defaultAxios.get(url).then(res => res.data),
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <AuthProvider>
        <DefaultLayout>
          <AuthChecker>
            <Component {...pageProps} />
          </AuthChecker> 
        </DefaultLayout> 
      </AuthProvider>
    </SWRConfig>
  )
  
}
