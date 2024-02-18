import React from 'react'
import { Zeyada, Allura, Yatra_One } from 'next/font/google';
import Image from 'next/image';
import nudity from '../../../public/oscar.jpg'
import fel from '../../../public/felic.jpg'


const sat = Zeyada({subsets: ['latin'], weight: ['400']})
const allura = Yatra_One({subsets: ['latin'], weight: ['400']})

const url = `https://dog.ceo/api/breeds/image/random`
async function getBooks(){
    
    const response = await fetch(url);
    const data = await response.json()
    return data
}

export default async function HomePage() {
    const books = await getBooks()
   
  return (
    <main className='bg-yellow-50 w-full p-10'>
        <div className={` text-center p-10`}>
          <h1 className={`${allura.className} lg:text-[40px] `}>FELICIA OWADARA</h1>
          <p className={`${sat.className} lg:text-[30px]`}>Provocative Romance</p>
        </div>
        <div className={`p-10`}>
            <section className={`grid lg:grid-cols-2 bg-gray-500 text-neutral-200 lg:px-14`}>
                <article className={`p-5 `}>
                    <div className={`flex justify-center`}>
                        <h2 className={`${sat.className}  text-[40px]`}>Welcome</h2>
                    </div>
                    <div className={`p-10`}>
                        <p className={`py-5 `}>Hi there and welcome to my website.</p>
                        <p>I&apos;m Felicia Owadara, the author of the nudity of a woman and it&apos;s companion novels. Right now i&apos;m working on a brand new story, one that i hope you will enjoy as much as the nudity of a woman, feel free to look around.</p>
                        <p className={`py-5`}>And watch out for the Blu-ray and DvD release of nudity of a woman, coming out mid-2024</p>
                        <p>All the best</p>
                        <p>FO</p>
                    </div>
                    <div className={`p-10 flex justify-center`}>
                        <button className={` border-[1.5px] py-2 px-8 border-white shadow-md text-white`}>BROWSE BOOKS</button>
                    </div>
                </article>
                <article className={`p-5 `}>
                    <div>
                        <Image src={fel} width={350} height={100} className={` rounded-2xl shadow-md shadow-slate-400`} />
                    </div>
                </article>
            </section>
        </div>
        <div>
            <section className={`text-center px-10`}>
                <div className={`  p-5`}>
                    <h3>Nudity of a woman- Out Now!</h3>
                    <p className=''>Read more <span className={`text-blue-500`}>here.</span></p>
                    <div className={`flex justify-center`}>
                        <Image src={nudity} width={800} height={100} className={`shadow-lg rounded-lg shadow-orange-50`}/>
                    </div>
                </div>
            </section>
        </div>
        <div className={`p-10`}>
            <article className={`flex justify-center bg-yellow-100 p-20`}>
                <div className={`${sat.className} lg:text-[30px] `}>
                     <p>Sign up for update by email</p>
                     </div>

               <div className={`px-10 `}>
                <input type="email" name="" id="" placeholder='Email Address' className={`rounded-xl w-[300px] px-5 py-1`} />
                <span className={`px-5`}>
                     <button className={` px-5 py-1 rounded-xl bg-white`} >SUBSCRIBE</button>
                </span>
               
               </div>

            </article>
        </div>

        <section>
            <div>

            </div>
        </section>
    </main>
  )
}
