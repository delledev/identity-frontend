'use client'
import { LandHelperContract } from "@/app/config/contracts"
import { BaseError } from "abitype"
import React from "react"
import { Address } from "viem"
import { useReadContract, useWriteContract } from "wagmi"

export default function DisplayLandApplicationsComponent(){
    const { data, error } = useReadContract({
        address: LandHelperContract.address as Address,
        abi: LandHelperContract.abi,
        functionName: 'getNonMintableLands',
        args: []
    })

    const { data: hash,error: ewrite, writeContract } = useWriteContract()

    const accept = (tokenId:any) => {
        console.log(tokenId, ' approved')

        writeContract({
            address: LandHelperContract.address as Address,
            abi: LandHelperContract.abi,
            functionName: 'setMintable',
            args: [BigInt(tokenId)],
          })
        }
    const decline = (tokenId:any) => {
        writeContract({
            address: LandHelperContract.address as Address,
            abi: LandHelperContract.abi,
            functionName: 'setDeclined',
            args: [BigInt(tokenId)],
          })
        
        console.log(tokenId, ' declined')
    }
    if (error){
        return (
       <div>
           {error && <div>Transaction Hash: {error.message}</div>}
       </div>
      )
    
      }
      console.log(data)
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
              <div className="flex gap-8 mt-4 h-auto w-full">
                <button onClick={() => {
                    accept((data as any)[0][i])
                }} className="m-auto border-[2px] rounded-xl border-teal-500 text-teal-500 hover:scale-110 hover:text-white hover:bg-teal-500 active:scale-90 transition-all px-4 p-2">
                    Approve
                </button>
                <button onClick={() => {
                    decline((data as any)[0][i])
                }} className="m-auto border-[2px] rounded-xl border-red-500 text-red-500 hover:scale-110 hover:text-white hover:bg-red-500 active:scale-90 transition-all px-4 p-2">
                    Decline
                </button>
              </div>
              
              {
                error && <div className='text-red-500 '>
                  Error: {(error as BaseError).shortMessage}
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