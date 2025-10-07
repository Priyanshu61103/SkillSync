import React from 'react'

const JobDescription = () => {
    return (
        <div className="flex flex-col gap-3 justify-between mt-5">
            <div className="flex flex-col gap-2 justify-center text-amber-50">
                <label className="text-[1.2rem]">Job Title</label>
                <input className='focus:border-cyan-500 px-4 py-2 rounded-[6px] border-white border-1 focus:outline focus:outline-cyan-500 ' required placeholder="Ex. Full Stack Developer"/>
            </div>
            <div className="flex flex-col gap-2 justify-center text-amber-50">
                <label>Job Description</label>
                <textarea className='focus:border-cyan-500 px-4 py-2 rounded-[6px] border-white border-1 focus:outline focus:outline-cyan-500' required placeholder="Enter or paste job description"/>
            </div>
            <button
                type="button"

                className="bg-pink-500 text-white font-medium inline-flex items-center justify-center gap-2 rounded-md px-3 py-2
             hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 active:bg-pink-700"
                aria-label="Create interview"
            >submit</button>
        </div>
    )
}
export default JobDescription
