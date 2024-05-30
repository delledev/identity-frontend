'use client'
import { VehicleContract, VehicleHelperContract } from '@/app/config/contracts';
import { BaseError, readContract } from '@wagmi/core';
import * as React from 'react'
import { Address, toEventHash } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi'

export default function ShowUserApplications() {
    const currentAddress = useAccount()
    
  const { data, error } = useReadContract({
    address: VehicleContract.address as Address,
    abi: VehicleContract.abi,
    functionName: 'getAllVehicleInfoByOwner',
    args: [currentAddress.address]
})



  if (error){
    return (
   <div>
       {error && <div>Transaction Hash: {error.message}</div>}
   </div>
  )

  }
  console.log(data)
  if (data) return (
    <div className='flex flex-wrap w-full gap-8'>
      {
        (data as any).map((car:any, i:number) => {
        if(car.image == '')return(
          <React.Fragment key={i}></React.Fragment>
        )
        return (
          <div  key={car.VIN} className='flex flex-col w-[30rem] min-h-96 p-4 bg-[#2d2d2d] rounded-xl shadow-xl gap-1'>
          <img src={car.image}></img>
          <p>
            Manufacturer: {car.manufacturer}
          </p>
          Model: {car.model}
          <p>
          Color: {car.color}
            
          </p>
          <p>
          Year: {car.year.toString()}

          </p>
          VIN: {car.VIN}
          <p>
          Vehicle Type: {car.vehicleType}

          </p>
          <p>
          Fuel Type: {car.fuelType}

          </p>
          Transmission Type: {car.transmissionType}
          <p>
          Current Owner: {car.currentOwner}

          </p>
          <p>
          First Owner: {car.firstOwner}

          </p>

        </div>
        )
        })
      }
    </div>
  )

  return <div>Loading</div>
}