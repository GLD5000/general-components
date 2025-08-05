'use client';

import useApiJson from "@/hooks/useApiJson";

export default function ApiData() {
    const apiData = useApiJson();
  return (
   
    <div>{JSON.stringify(apiData.data)}</div>
  )
}