'use client'
import { BaseError, readContract } from '@wagmi/core';
import * as React from 'react'
import { Address, toEventHash } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { LandContract } from '../config/contracts';

export default function ShowUserApplications() {
    const currentAddress = useAccount()
    
  const { data, error } = useReadContract({
    address: LandContract.address as Address,
    abi: LandContract.abi,
    functionName: 'getAllLandInfoByOwner',
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
    <div className='w-full flex flex-wrap gap-8'>
      {
        (data as any).map((land:any, i:number) => {
        if(land.image == '')return(
          <React.Fragment key={i}></React.Fragment>
        )
        return (
          <div  key={i} className='flex flex-col w-[30rem] min-h-96 p-4 bg-[#2d2d2d] rounded-xl shadow-xl gap-1'>
          <img src={land.image}></img>
          <p>
                Latitude: {land.latitude}
              </p>
              Longitude: {land.longitude}
              <p>
              Area: {(land.area as bigint).toString()} m²
              </p>
              <p>
              title: {land.title}
              </p>
              Zoning: {land.zoning}
              <p>
              Features: {land.features.map((feature:string) => { return ` ${feature}, `})}
              </p>
              <p>
              First Owner: {land.firstOwner}
              </p>
              <p>
              Current Owner: {land.currentOwner}
              </p>

        </div>
        )
        })
      }
    </div>
  )

  return <div>Loading</div>
}