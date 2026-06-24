"use client";

import Image from "next/image";
import { useState } from "react";

interface LeadershipPhotoProps {
  src: string;
  alt: string;
  name: string;
}

export function LeadershipPhoto({ src, alt, name }: LeadershipPhotoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(160deg, #0b3d2e 0%, #072318 100%)",
        }}
      >
        <div className="w-28 h-28 rounded-full bg-gold/20 border-2 border-gold/30 flex items-center justify-center">
          <span className="font-serif text-5xl text-gold font-medium">
            {name.charAt(0)}
          </span>
        </div>
        <p className="text-cream/50 text-sm mt-4 font-sans">
          Photo Coming Soon
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Fallback bg (shown before image loads or when missing) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(160deg, #0b3d2e 0%, #072318 100%)",
        }}
      >
        <div className="w-28 h-28 rounded-full bg-gold/20 border-2 border-gold/30 flex items-center justify-center">
          <span className="font-serif text-5xl text-gold font-medium">
            {name.charAt(0)}
          </span>
        </div>
        <p className="text-cream/50 text-sm mt-4 font-sans">
          Photo Coming Soon
        </p>
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top relative z-10"
        sizes="(max-width: 1024px) 90vw, 400px"
        onError={() => setHasError(true)}
      />
    </>
  );
}
