'use client'
import { VehicleHelperContract } from '@/app/config/contracts';
import { BaseError } from '@wagmi/core';
import * as React from 'react'
import { useState } from 'react';
import { Address } from 'viem';
import { useWriteContract } from 'wagmi'

const testCarInfo = {
    image: "https://dealer-content.s3.amazonaws.com/images/models/toyota/2021/corolla/colors/barcelona-red-metallic.png",
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Red",
    VIN: "123456789",
    vehicleType: "Sedan",
    fuelType: "Gasoline",
    transmissionType: "Automatic",
    firstOwner: "0x3bda57DeBB6eE977EfBb0D16Ceb28dC6Fc38dC86",
    currentOwner: "0x3bda57DeBB6eE977EfBb0D16Ceb28dC6Fc38dC86",
    isMintable: true,
    to: "0x3bda57DeBB6eE977EfBb0D16Ceb28dC6Fc38dC86"
};
export function MintNFT() {
  const [image, setImage] = useState('')
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [VIN, setVIN] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmissionType, setTransmissionType] = useState('');

  const { data: hash,error, writeContract } = useWriteContract()

  async function submitContract() { 
    console.log(hash)
    
    writeContract({
      address: VehicleHelperContract.address as Address,
      abi: VehicleHelperContract.abi,
      functionName: 'createVehicleNFTApplication',
      args: [image,manufacturer, model, year, color, VIN, vehicleType, fuelType, transmissionType],
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
      Manufacturer : {' '}<input onChange={(e)=> {
        setManufacturer(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Toyota" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Model : {' '}<input onChange={(e)=> {
        setModel(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Corolla" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Year : {' '}<input onChange={(e)=> {
        setYear(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="2023" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Color : {' '}<input onChange={(e)=> {
        setColor(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Red" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      VIN : {' '}<input onChange={(e)=> {
        setVIN(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="12345ABCD" required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Vehicle Type : {' '}<input onChange={(e)=> {
        setVehicleType(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Sedan, Truck, Bike, etc." required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Fuel Type : {' '}<input onChange={(e)=> {
        setFuelType(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Diesel, Petrol, Electric, etc." required />
      </span>
      <span className='text-[#947AFF] font-extrabold'>
      Transmission Type : {' '}<input onChange={(e)=> {
        setTransmissionType(e.target.value)
      }} className='bg-[#2d2d2d] rounded-xl font-normal text-white p-2 w-96' name="address" placeholder="Manual, Automatic, etc." required />
      </span>
      <button type="submit" className='text-[#70FFAF] border border-[#70FFAF] w-fit px-8 m-auto rounded-xl text-3xl hover:scale-110 hover:bg-[#70FFAF] hover:text-[#2d2d2d] transition-all active:scale-90'>Apply</button>
      {hash && <div className='text-[#70FFAF]'>Transaction Hash: {hash}</div>}
      {error && <div className='text-red-700'>Error: {(error as BaseError).shortMessage}</div>}
    </form>
  )
}