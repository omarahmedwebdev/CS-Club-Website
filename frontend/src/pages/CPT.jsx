import React from 'react'

export default function CPT() {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-blue-950'>

      <div className='h-fit text-center pt-5 pb-10 px-16'>
        <div className="texty p-10 text-center">
            <h1 className='mb-3'><span className='text-red-600'>Ramadan Mubarak !</span><br />Join Our Coding Marathon !</h1>
            <h3>Compete in a compititve progarmming marathon along the month, and earn Awards!</h3>
        </div>
        <div className="link">
            <a href="https://codeforces.com/blog/entry/139991" target='_blank' style={{borderRadius:"0px 50px 50px 0px"}} className='bg-white text-blue-800 px-8 py-5 text-xl border-solid border-blue-800 duration-200 border-2 hover:bg-transparent hover:border-white hover:text-white'>Compete Now</a>
        </div>
    </div>

    <div className='h-fit text-center pt-5 pb-10 px-16'>
      <hr />
        <div className="texty p-10 text-center">
            <h1 className='mb-3'>Watch our <br />Competitive Programming Training Course For FREE!</h1>
            <h3>Start preparing with our mentors to win programming contests, prepare for ACPC, EOI and many other contests.</h3>
        </div>
        <div className="link">
            <a href="/training" style={{borderRadius:"50px 0px 50px 0px"}} className='bg-white text-blue-800 px-16 py-5 text-xl border-solid border-blue-800 duration-200 border-2 hover:bg-transparent hover:border-white hover:text-white'>Start Now</a>
        </div>
        <br />
        <br />
        <hr />
    </div>
    </div>
  )
}
