import React from 'react'

export default function ListOfVehicle({carlist}) {
    return (
        <div className="mt-10">
            <p className="font-semibold text-lg">List of vehicle:</p>
            <ul className="mt-5">
                {carlist?.map((car,index)=>(
                <li key={index} className="border border-black p-2 flex items-center justify-between">
                    <p>{car.registration_no}</p>
                    <p>{car.brand}</p>
                    <p>{car.series}</p>
                    <p>{car.model}</p>
                    <p>{car.model_year}</p>
                </li>
                ))}
                
            </ul>
        </div>
    )
}
