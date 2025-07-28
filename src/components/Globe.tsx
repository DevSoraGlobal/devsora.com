
"use client";

import React, { useEffect, useRef, useState } from 'react';

let Globe: React.FC = () => null;
if (typeof window !== 'undefined') {
  const ReactGlobe = require('react-globe.gl').default;
  Globe = () => {
    const globeEl = useRef<any>();
    const [globeReady, setGlobeReady] = useState(false);

    useEffect(() => {
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
        globeEl.current.pointOfView({ lat: 27.61, lng: 75.14, altitude: 2.5 });
      }
    }, [globeReady]);

    return (
        <ReactGlobe
            ref={globeEl}
            onGlobeReady={() => setGlobeReady(true)}
            animateIn={true}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="orange"
            atmosphereAltitude={0.2}
        />
    );
  }
}

export default Globe;
