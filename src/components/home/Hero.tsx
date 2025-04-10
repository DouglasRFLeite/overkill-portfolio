"use client";

import { useSelector } from "react-redux";
import { Spotlight } from "../ui/aceternity/Spotlight";
import HeroSocials from "./HeroSocials";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setJob } from "@/redux/slices/jobSlice";

export default function Hero({ title }: { title: string }) {
  const job = useAppSelector((state: RootState) => state.job.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setJob(title));
  }, [title, dispatch]);

  function decodeParameter(title: string) {
    return decodeURIComponent(title.replace(/\+/g, " "));
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen text-left max-w-[80%] w-[1000px] mx-auto">
      <Spotlight />
      <div className="flex justify-between items-start text-left w-[100%]">
        <h2 className="text-3xl font-semibold text-gray-500 mb-4">
          OLÁ 🖖 MEU NOME É DOUGLAS, EU SOU
        </h2>
        <HeroSocials />
      </div>
      <h1 className="text-[8rem] leading-none font-semibold text-gray-500 w-[100%] mb-8">
        {decodeParameter(job).toUpperCase()}
      </h1>
    </section>
  );
}
