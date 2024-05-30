'use client'
import { VehicleHelperContract } from "@/app/config/contracts"
import { BaseError } from "abitype"
import React from "react"
import { Address } from "viem"
import { useReadContract, useWriteContract } from "wagmi"

export default function DisplayVehicleApplicationsComponent(){
    const { data, error } = useReadContract({
        address: VehicleHelperContract.address as Address,
        abi: VehicleHelperContract.abi,
        functionName: 'getNonMintableVehicles',
        args: []
    })

    const { data: hash,error: ewrite, writeContract } = useWriteContract()

    const accept = (tokenId:any) => {
        console.log(tokenId, ' approved')

        writeContract({
            address: VehicleHelperContract.address as Address,
            abi: VehicleHelperContract.abi,
            functionName: 'setMintable',
            args: [BigInt(tokenId)],
          })
        }
    const decline = (tokenId:any) => {
        writeContract({
            address: VehicleHelperContract.address as Address,
            abi: VehicleHelperContract.abi,
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
            (data as any)[1].map((car:any, i:number) => {
            if(car.image == '')return(
              <React.Fragment key={i}></React.Fragment>
            )
            return (
              <form  key={car.VIN} onSubmit={(e) => {
                e.preventDefault()
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