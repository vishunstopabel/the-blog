import { FallingLines } from 'react-loader-spinner';
import React from 'react';

function Loader() {
    return (
        <div className="w-full h-full backdrop-blur-sm bg-white/30 flex justify-center items-center fixed top-0 left-0 z-50">
            <FallingLines
                color="#03a9f4"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
            <div className="text-2xl ml-4">Loading...</div>
        </div>
    );
}

export default Loader;
