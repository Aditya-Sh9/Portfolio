const Background = () => {
    return (
        <div className="fixed inset-0 z-[-10] min-h-screen w-full bg-[#121212] pointer-events-none">
            {/* Subtle Aurora Gradient */}
            <div className="absolute top-0 left-[-20%] w-[70%] h-[70vh] rounded-full bg-[#E07A5F] opacity-[0.03] blur-[150px] mix-blend-screen mix-blend-lighten pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60vh] rounded-full bg-white opacity-[0.015] blur-[120px] pointer-events-none" />
            
            {/* SVG Noise / Film Grain Overlay */}
            <div 
                className="absolute inset-0 z-[-5] opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay'
                }}
            />
        </div>
    );
};

export default Background;
