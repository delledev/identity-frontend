'use client'
import { VehicleHelperContract } from '@/app/config/contracts';
import { BaseError, readContract } from '@wagmi/core';
import * as React from 'react'
import { Address, toEventHash } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi'

export function ShowUserApplications() {
    const currentAddress = useAccount()
    
  const { data, error } = useReadContract({
    address: VehicleHelperContract.address as Address,
    abi: VehicleHelperContract.abi,
    functionName: 'getApplicationsByAddress',
    args: [currentAddress.address]
})
  const { data: hash,error: mintError, isPending, writeContract } = useWriteContract()


  async function submitContract(tokenId:BigInt) {
    let str = tokenId.toString()
    console.log(str)
    writeContract({
      address: VehicleHelperContract.address as Address,
      abi: VehicleHelperContract.abi,
      functionName: 'mintcustomNFT',
      args:[tokenId],
    })
    
  } 



  if (error){
    return (
   <div>
       {error && <div>Transaction Hash: {error.message}</div>}
   </div>
  )

  }
  if (data) return (
    <div className="flex max-w-[80vw] gap-12 flex-wrap">
      {
        (data as any)[1].map((car:any, i:number) => {
        if(car.image == '')return(
          <React.Fragment key={i}></React.Fragment>
        )
        return (
          <form  key={car.VIN} onSubmit={(e) => {
            e.preventDefault()
            submitContract((data as any)[0][i])
          }} className='flex flex-col w-[30rem] min-h-96 p-4 bg-[#2d2d2d] rounded-xl shadow-xl gap-1'>
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
          Issued By: {car.to}

          </p>
          
          <p className={`${car.isMintable ? 'text-teal-500' : 'text-red-500'}`}>
            STATUS: {car.isMintable ? 'Ready' : 'Not Ready'}
          </p>
          {
            isPending ? <img className='h-12 w-12  m-auto' src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'>
            </img> 
            :
            car.isMinted ? 
            <div className='m-auto text-teal-500'>Already minted!</div>
            :
            car.isDeclined ? 
            <div className='m-auto text-red-500'>This application has been declined!</div>
            :
            car.isMintable &&
            <button type='submit' className='bg-teal-500 w-fit rounded-xl transition-all text-2xl m-auto py-2 px-12 hover:scale-110 active:scale-90'>
              Mint Now!
            </button>
          }
          {
            mintError && <div className='text-red-500 '>
              Error: {(mintError as BaseError).shortMessage || mintError.message}
            </div>
          }
        </form>
        )
        })
      }
    </div>
  )

  return <div>Loading</div>
}