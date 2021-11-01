import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mike's App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to
          <div className="text-blue-600">
            Mike's First Web App
          </div>
        </h1>

        <div className="text-xl font-light py-6">
          Welcome my first application, created with Next.JS, TailwindCSS, and hosted on DigitalOcean!
        </div>

        <div className="bg-blue-500 px-2 py-1 rounded-md text-white shadow-lg font-semibold hover:animate-pulse hover:bg-black">
          Hello World!
        </div>
      </main>
    </div>
  )
}
