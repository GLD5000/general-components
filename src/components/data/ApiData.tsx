'use client';

import useApiJson from "@/hooks/useApiJson";

export default function ApiData() {
    const apiData = useApiJson();
  return (
   
      <div>{apiData.data?.map((tuple, index) => <a target="_blank" style={{color:'unset'}} key={`${tuple[0]}-${index}`} href={tuple[1]}><h2 className="text-black">{tuple[0]}</h2></a>)}</div>
  )
}