"use client";
import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define props interface once
interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href: string; // Define the link target
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

// First Button Component: ArrowButton
export function ArrowButton({
  text = "Open",
  href,
  textColor = "#BA2025",
  buttonOverlayColor = "#BA2025",
  borderColor = "#BA2025",
  iconColor = "white",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <Link href={href} passHref>
      <button
        style={{ borderColor: borderColor }}
        {...props}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out",
          className
        )}
      >
        <span
          style={{ background: buttonOverlayColor }}
          className={cn(
            "ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center duration-300 group-hover:translate-x-0"
          )}
        >
          <MoveRight style={{ color: iconColor }} />
        </span>
        <span
          style={{ color: textColor }}
          className={cn(
            "absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full"
          )}
        >
          {text}
        </span>
        <span className="invisible relative">{text}</span>
      </button>
    </Link>
  );
}

// Second Button Component: CustomButton
export function CustomButton({
  text = "Open",
  href,
  textColor = "white",
  buttonOverlayColor = "#BA2025",
  borderColor = "#BA2025",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <Link href={href} passHref>
      <button
        style={{ borderColor: borderColor }}
        className={cn(
          "relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group",
          className
        )}
        {...props}
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-00 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span
          style={{ background: buttonOverlayColor }}
          className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"
        ></span>
        <span
          style={{ color: textColor }}
          className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
        >
          {text}
        </span>
      </button>
    </Link>
  );
}