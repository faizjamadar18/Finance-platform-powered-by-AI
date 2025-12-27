

const Background = () => {
    return (
        <div className="w-full h-dvh absolute top-0 left-0 z-0 overflow-hidden">

            <div className="absolute top-0 inset-x-0 w-1/4 mx-auto h-1/4 blur-[8rem] bg-primary/30"></div>

            <div
                className="absolute inset-0 w-screen h-screen -z-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1.35px, transparent 1.35px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)'
                }}
            ></div>
        </div>
    )
};

export default Background