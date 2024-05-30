'use client'
import { useReadContract } from "wagmi"
import { Address } from "viem"
import React, { useEffect } from "react"
import { VehicleContract } from "@/app/config/contracts"

export default function AllCars (){
    const [currentPage, setCurrentPage] = React.useState(1)
    const [maxPages, setMaxPages] = React.useState(0)
    const ITEMS_PER_PAGE = 4;

    const { data, error } = useReadContract({
        address: VehicleContract.address as Address,
        abi: VehicleContract.abi,
        functionName: 'getAllVehicles',
        args: [currentPage, ITEMS_PER_PAGE]
    })
    const { data:d2, error:e2 } = useReadContract({
        address: VehicleContract.address as Address,
        abi: VehicleContract.abi,
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
        </div>
      )
    
      return <div>Loading</div>
}