'use client'
import { LandHelperContract } from '@/app/config/contracts';
import { BaseError, readContract } from '@wagmi/core';
import * as React from 'react'
import { Address, toEventHash } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi'

export function MyLandApps() {
    const currentAddress = useAccount()
    
    const { data, error } = useReadContract({
        address: LandHelperContract.address as Address,
        abi: LandHelperContract.abi,
        functionName: 'getApplicationsByAddress',
        args: [currentAddress.address]
    })
  const { data: hash,error: mintError, isPending, writeContract } = useWriteContract()


  async function submitContract(tokenId:BigInt) {
    let str = tokenId.toString()
    console.log(str)
    writeContract({
      address: LandHelperContract.address as Address,
      abi: LandHelperContract.abi,
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
        (data as any)[1].map((land:any, i:number) => {
        if(land.image == '')return(
          <React.Fragment key={i}></React.Fragment>
        )
        return (
          <form  key={land.VIN} onSubmit={(e) => {
            e.preventDefault()
            submitContract((data as any)[0][i])
          }} className='flex flex-col w-[30rem] min-h-96 p-4 bg-[#2d2d2d] rounded-xl shadow-xl gap-1'>
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
              Issued By: {land.to}
              </p>
          
          <p className={`${land.isMintable ? 'text-teal-500' : 'text-red-500'}`}>
            STATUS: {land.isMintable ? 'Ready' : 'Not Ready'}
          </p>
          {
            isPending ? <img className='h-12 w-12  m-auto' src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'>
            </img> 
            :
            land.isMinted ? 
            <div className='m-auto text-teal-500'>Already minted!</div>
            :
            land.isDeclined ? 
            <div className='m-auto text-red-500'>This application has been declined!</div>
            :
            land.isMintable &&
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