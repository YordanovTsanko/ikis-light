    import React from "react";
    import { LiaTruckLoadingSolid } from "react-icons/lia";

    const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
        <div className="animate-spin rounded-full h-10 w-12 border-t-4 border-b-4 border-red-500">
        <LiaTruckLoadingSolid className="text-primary" size={35} />

        </div>
        <p>Зареждане . . .</p>
        </div>
    );
    };

    export default Loader;
