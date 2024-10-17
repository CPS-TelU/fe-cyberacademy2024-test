import { Skeleton } from "@/components/ui/Skeleton"
import React from "react";


export function SkeletonHomeHero() {
    return (
        <section className="flex flex-col justify-center items-center  py-10 md:py-20">
      <div className="text-center items-center">
        <Skeleton className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold items-center text-center mb-4 mx-auto w-[90%] sm:w-[600px] md:w-[800px] lg:w-[900px] 2xl:w-[1000px]"/>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          Brace Yourself For A Whole New Adventure
        </p>
        <Skeleton text="Let's Get Started" href="/lms" className="mt-8" />
      </div>
      <div className="mt-12 w-full flex justify-center px-4 md:px-0">
        <Skeleton
          className="rounded-2xl w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[90%] h-auto"
        />
      </div>
    </section>

    )
}