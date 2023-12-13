'use client'

import { Suspense } from 'react'
import Loading from './loading'
import Navbar from './navbar/page'
import DataTable from './dataTable/page'

// import { PostFeed, Weather } from './Components'

export default function Posts() {
  return (
    <>
      <nav>
        <Navbar />
      </nav >

      <section style={{ marginTop: "6rem" }}>
        <DataTable />
      </section>

      {/* <section>
        MainPart
      </section> */}
    </>
    // <section>
    //   <Suspense fallback={<p>Loading feed...</p>}>
    //     <div>PostFeed</div>
    //     {/* <PostFeed /> */}
    //   </Suspense>
    //   <Suspense fallback={<p>Loading weather...</p>}>
    //     {/* <Weather /> */}
    //     <div>Weather</div>
    //   </Suspense>
    // </section>


  )
}