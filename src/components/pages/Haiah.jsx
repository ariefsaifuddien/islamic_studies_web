import React from 'react'
import { FiMonitor, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Haiah = () => {
  return (
    <>
      <div className='h-80 flex bg-stone-700 bg-opacity-40 text-white'>
        <h1 className='text-5xl m-auto'>هيئة التدريس</h1>
      </div>
      <div className="bg-white border-t-4 border-yellow-600">
        <div className="mx-auto w-[1200px] relative ">
          <h2 className='px-3 py-1 absolute right-0 rounded-bl-lg bg-yellow-600 w-max text-white'>هيئة التدريس لكلية الدراسات الإسلامية</h2>
          <div className="mx-auto w-[900px] text-lg text-end leading-9 py-32">
            <div className="flex flex-row-reverse gap-6 justify-between mb-20">
              <Link to='/haiah/lklkdlkd' className="flex flex-col items-center px-6 py-4 w-max mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <h3 className='text-yellow-600 font-bold'>عميد الكلية</h3>
                <h3 >د. أبوبكر حسن علي بخيت</h3>
              </Link>
              <a href='#' className="flex flex-col items-center px-6 py-4 w-max mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-red-400 mb-4 text-white w-max text-2xl">
                  <FiMonitor />
                </div>
                <h3 className='text-yellow-600 font-bold'>مسجل الكلية</h3>
                <h3 >د. أبوبكر حسن علي بخيت</h3>
              </a>
              <a href='#' className="flex flex-col items-center px-6 py-4 w-max mx-auto pt-12 rounded-lg shadow bg-white">
                <div className="p-4 rounded-lg bg-purple-400 mb-4 text-white w-max text-2xl">
                  <FiUser />
                </div>
                <h3 className='text-yellow-600 font-bold'>نائب العميد</h3>
                <h3 >د. أبوبكر حسن علي بخيت</h3>
              </a>
            </div>
            <div className="border-t-8 border-yellow-600 relative mt-20">
              <h2 className='text-lg text-white px-4 py-2 rounded-full w-[103%] bg-yellow-600 absolute -right-3 -left-3 -top-6 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white pt-5 shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-4 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة العلمية</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
              </ul>
            </div>
            <div className="border-t-8 border-yellow-600 relative mt-20">
              <h2 className='text-lg text-white px-4 py-2 rounded-full w-[103%] bg-yellow-600 absolute -right-3 -left-3 -top-6 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white pt-5 shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-4 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة العلمية</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
              </ul>
            </div>
            <div className="border-t-8 border-yellow-600 relative mt-20">
              <h2 className='text-lg text-white px-4 py-2 rounded-full w-[103%] bg-yellow-600 absolute -right-3 -left-3 -top-6 text-center'>قسم السنة وعلوم الحديث</h2>
              <ul className='bg-white pt-5 shadow'>
                <li className='flex flex-row-reverse items-center font-bold gap-6 border-b-4 px-4 py-2 text-yellow-600'>
                  <p className='w-[65%] text-center'>الأسماء</p>
                  <div className='border-2 h-6 border-yellow-600' />
                  <p className='w-[30%] text-center'>الدرجة العلمية</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
                <li className='flex flex-row-reverse items-center gap-6 border-b-4 px-6 py-2'>
                  <p className='w-[65%]'>د. أبوبكر حسن علي بخيت</p>
                  <div className='border-2 h-6 border-gray-600' />
                  <p className='w-[30%] text-center'>محاضر</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Haiah
