import { VehicleContract, VehicleHelperContract } from "@/app/config/contracts";
import { error } from "console";
import { Address } from "viem";
import { useAccount, useReadContract } from "wagmi";

export default function useOwner() { 
    const address = useAccount().address

    const { data:d2, error:e2 } = useReadContract({
        address: VehicleHelperContract.address as Address,
        abi: VehicleHelperContract.abi,
        functionName: 'getOwner',
        args: [],
    })
    if(e2){
        console.error(e2)
    }
    return d2 == address
}