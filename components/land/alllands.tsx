'use client'
import { useReadContract } from "wagmi"
import { Address } from "viem"
import React, { useEffect } from "react"
import { LandContract, VehicleContract } from "@/app/config/contracts"

export default function AllLands (){
    const [currentPage, setCurrentPage] = React.useState(1)
    const [maxPages, setMaxPages] = React.useState(0)
    const ITEMS_PER_PAGE = 4;

    const { data, error } = useReadContract({
        address: LandContract.address as Address,
        abi: LandContract.abi,
        functionName: 'getAllLands',
        args: [currentPage, ITEMS_PER_PAGE]
    })
    const { data:d2, error:e2 } = useReadContract({
        address: LandContract.address as Address,
        abi: LandContract.abi,
        functionName: 'getAvailablePageCount',
        args: [ITEMS_PER_PAGE]
    })

    useEffect(() => {
      setMaxPages(Number(d2))
    },[d2])
    
    const nextPage = () => {
      if(currentPage < maxPages){
        setCurrentPage(old => old+1)
      }
    }

    const prevPage = () => {
      if(currentPage > 1){
        setCurrentPage(old => old - 1)
      }
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
        <div className="flex flex-col">
          <div className="flex gap-2 mb-2">
            <div>
              Page {currentPage} of {maxPages}
            </div>
            <button onClick={() => prevPage()} className="border border-white rounded-xl px-2 hover:scale-110 active:scale-90 transition-all">Prev</button>
            <button onClick={() => nextPage()} className="border border-white rounded-xl px-2 hover:scale-110 active:scale-90 transition-all">Next</button>
          </div>
          <div className="flex max-w-[80vw] gap-12 flex-wrap">
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
        </div>
      )
    
      return <div>Loading</div>
}