"use client"; // Add this line at the top
import image2 from "../public/image2.jpg"

import Image from "next/image";
import "animate.css";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <nav className="px-16 bg-black flex h-10 text-white items-center justify-between">
        <div>
          <h3 className="text-3xl">Logo</h3>
        </div>
        <div className="flex space-x-4 items-center">
          <a className="text-base px-4">Home</a>
          <Link href="/About">
            About
          </Link>
          <a className="text-base px-4">My Project</a>
          <a className="text-base px-4">Download CV</a>
          <a className="text-base px-4 bg-green-500 py-1 text-red-500 rounded hover:bg-red-900 hover:text-white">Contact</a>
        </div>
      </nav>
      <div className="flex justify-between items-center p-20 rounded" style={{ height: "550px" }}>
        <div className="W-2/5  animate__animated animate__flip animate__jackInTheBox">
          <h1 className="pl-2  text-3xl">
            <span className="word word1">Welcome</span>{" "}
            <span className="word word2">to</span>{" "}
            <span className="word word3 text-green-600">Parvez</span>{" "}
            <span className="word word4 text-red-600">Ahmed</span>{" "}
            <span className="word word5">Developer</span>
          </h1>
          <br />
          <p className="pl-2">
            I have written a few thousand words on why traditional <br />
            "Semantic class names" are the reason CSS is hard to maintain, but the truth is you are never going...
          </p>
          <div className="mt-4">
            <button className="rounded bg-green-500 p-1.5 mr-4">Subscribe</button>
            <button className="bg-gray-400 rounded p-1.5 mt-2">Contact with us</button>
          </div>
        </div>
        <div className="W-3/5 rounded animate__animated animate__jackInTheBox animate__delay-1s">
          <img src="/image2.jpg" className="rounded pl-16" alt="Description of image" />
        </div>
      </div>
      <style jsx>{`
        .word {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .word1 {
          animation-delay: 0s;
        }
        .word2 {
          animation-delay: 1s;
          animate__animated ;
          animate__flip animate__jackInTheBox;

        }
        .word3 {
          animation-delay: 2s;
        }
        .word4 {
          animation-delay: 3s;
        }
        .word5 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}


