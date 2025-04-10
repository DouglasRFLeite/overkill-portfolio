'use client';

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

export default function Teste(){
    const job = useAppSelector((state: RootState) => state.job.value);
    return (
        <h1>{job}</h1>
    )
}