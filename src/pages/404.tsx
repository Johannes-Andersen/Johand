import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const NotFound: FC = () => (
  <>
    <Head>
      <title>Page Not Found</title>
    </Head>
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Link href="/" className="inline-flex">
            <span className="sr-only">Your Company</span>
            <Image
              width={12}
              height={12}
              className="h-12 w-auto"
              src="/mark.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
)

export default NotFound
