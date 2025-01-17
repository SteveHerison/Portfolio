"use client";
import Image from "next/image";
import Foto from "@/assets/img/Foto.jpeg";

export const Photo = () => {
  return (
    <div className="relative w-72 h-72">
      <div className="absolute inset-0 animate-scale">
        <Image
          src={Foto}
          quality={100}
          fill
          alt="Foto Principal"
          className="object-cover rounded-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};
