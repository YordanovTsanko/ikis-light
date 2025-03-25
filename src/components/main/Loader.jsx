    import React from "react";
    import { LiaTruckLoadingSolid } from "react-icons/lia";

    const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-44 h-44 mx-auto px-2 md:px-0">
        <div className="animate-spin rounded-full h-10 w-12 border-t-4 border-b-4 border-red-500 flex items-center justify-center">
        <LiaTruckLoadingSolid className="text-primary" size={35} />

        </div>
        <p>Зареждане . . .</p>
        </div>
    );
    };

    export default Loader;
