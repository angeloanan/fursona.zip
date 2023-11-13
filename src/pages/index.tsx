import * as React from 'react'

const IndexPage = () => {
  return (
    <main className='flex w-full flex-col items-center p-8'>
      <section className='w-full max-w-screen-sm'>
        <h1 className='text-xl font-bold'>Fursona.zip - A sona refsheet hosting site!</h1>

        <p className='font-light italic'>Coming soon :3</p>
      </section>

      <section className='mt-4 w-full max-w-screen-sm'>
        <h2 className='font-semibold'>Want to reserve your username?</h2>
        <p>
          Get <span className='font-mono'>yourfursona.fursona.zip</span> by reserving your username!
        </p>
        <p>
          Email me{' '}
          <a href='mailto:angelo+fursonazip@angeloanan.xyz' className='text-blue-600 underline'>
            here
          </a>{' '}
          along with what username you&apos;re interested in. (Just chill, I don&apos;t bite! :3)
        </p>
      </section>
    </main>
  )
}

export default IndexPage
