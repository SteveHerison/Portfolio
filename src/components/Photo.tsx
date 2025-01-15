"use client";
import Image from "next/image";
import Foto from "@/assets/img/Foto.jpeg";

const Photo = () => {
  return (
    <div className="relative w-72 h-72">
      <div className="absolute inset-0 animate-scale">
        <Image
          src={Foto}
          quality={100}
          fill
          alt=""
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Photo;
