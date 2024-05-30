'use client'
import { LandHelperContract, VehicleHelperContract } from '@/app/config/contracts';
import { BaseError } from '@wagmi/core';
import * as React from 'react'
import { useState } from 'react';
import { Address } from 'viem';
import { useWriteContract } from 'wagmi'

export function LandApplication() {
  const [image, setImage] = useState('')
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [area, setArea] = useState('');
  const [title, setTitle] = useState('');
  const [zoning, setZoning] = useState('');
  const [features, setFeatures] = useState<string[]>([]);

  const { data: hash,error, writeContract } = useWriteContract()

  async function submitContract() { 
    console.log(hash)
    writeContract({
      address: LandHelperContract.address as Address,
      abi: LandHelperContract.abi,
      functionName: 'createLandApplication',
      args: [image,latitude, longitude, area, title, zoning, features],
    })
    
  } 

  return (
    <form  className='bg-[#121212] p-2 rounded-xl w-fit px-12 flex-col py-12 flex gap-4' onSubmit={(e) => {
        e.preventDefault();
        submitContract().then(res => console.log(res))
    }}>
      <span className='text-[#947AFF] font-extrabold'>
      Image Url : {' '}<input onChange={(e)=> {
        setImage(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="https://images.com/carimage" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Latitude : {' '}<input onChange={(e)=> {
        setLatitude(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="37.7749" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Longitude : {' '}<input onChange={(e)=> {
        setLongitude(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="-122.4194" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Area ( ㎡ ) : {' '}<input onChange={(e)=> {
        setArea(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="123" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Title : {' '}<input onChange={(e)=> {
        setTitle(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Beautiful Property in San Francisco" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Zoning : {' '}<input onChange={(e)=> {
        setZoning(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Residential" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Features : {' '}<input onChange={(e)=> {
        setFeatures(e.target.value.split(','))
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Seperated by comma exm: Garden,Garage,Swimming Pool " required />
      </span>
     
      <button type="submit" className='text-[#70FFAF] border border-[#70FFAF] w-fit px-8 m-auto rounded-xl text-3xl hover:scale-110 hover:bg-[#70FFAF] hover:text-[#2d2d2d] transition-all active:scale-90'>Apply</button>
      {hash && <div className='text-[#70FFAF]'>Transaction Hash: {hash}</div>}
      {error && <div className='text-red-700'>Error: {(error as BaseError).shortMessage}</div>}
    </form>
  )
}