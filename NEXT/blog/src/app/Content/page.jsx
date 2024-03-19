import React from 'react'
import Link from 'next/link'
import { POST } from '../api/add/route'
import data from '/blogdata/nextjs.json'
function page() {
  let a = fetch("/api/add",{method: "POST", headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },body: JSON.stringify(data), })
  let res = a.json()
  console.log(res)
  return (
    <div>
      
           <section className="text-gray-400 bg-gray-900 body-font overflow-hidden ">
      <div className="container px-5 py-24 mx-auto ">
        <div className="-my-8 divide-y-2 divide-gray-800 ">
        
          <div className="py-8 flex flex-wrap md:flex-nowrap ">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CODING</span>
              <span className="mt-1 text-gray-500 text-sm">12 March 2024</span>
            </div>
            <Link href={'/blogpost/Nextjs'}>
            <div className="md:flex-grow">
              {/* <h2 className="text-2xl font-medium text-white title-font mb-2">How to learn Next Js in 2024</h2> */}
              <h2 className="text-2xl font-medium text-white title-font mb-2"></h2>
              <p className="leading-relaxed">Its a Frame work used to design a full stack dynamic websites</p>
       
              <br></br>
            </div>
             </Link>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CODING</span>
              <span className="mt-1 text-gray-500 text-sm">12 March 2024</span>
            </div>
            <Link href={'/blogpost/Python'}>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">How to learn Python in 2024</h2>
              <p className="leading-relaxed">Its a bigneer friendly language and at advance levels used in Ai/Ml</p>
              
              <br></br>
            </div>
          </Link>
          </div>
          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap ">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CODING</span>
              <span className="mt-1 text-gray-500 text-sm">12 March 2024</span>
            </div>
            <Link href={'/blogpost/React'}>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">How to learn React in 2024</h2>
              <p className="leading-relaxed">Its a Frame work of Javascript used to design a frontend for websites</p>
          
              <br></br>
            </div>
         </Link>
          </div>

          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CODING</span>
              <span className="mt-1 text-gray-500 text-sm">12 March 2024</span>
            </div>
            <Link href={'/blogpost/AI-ML'}>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">How to learn AI/ML in 2024</h2>
              <p className="leading-relaxed">Its a upcoming technology used to train models</p>
          
              <br></br>
            </div>
         </Link>
          </div>

          <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CODING</span>
              <span className="mt-1 text-gray-500 text-sm">12 March 2024</span>
            </div>
            <Link href={'/blogpost/Django'}>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">How to learn Django in 2024</h2>
              <p className="leading-relaxed">Its a Frame work of Python used to design a backend for dynamic websites</p>
          
              <br></br>
            </div>
         </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
