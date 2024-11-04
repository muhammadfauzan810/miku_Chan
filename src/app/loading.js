"use client";

import { useEffect, useState } from "react";

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Menghentikan loading setelah 3 detik
        }, 3000);

        return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
    }, []);

    if (loading) {
        // Tampilkan loading spinner saat loading
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="relative flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-8 border-white border-t-transparent shadow-2xl"></div>
                    <div className="absolute h-32 w-32 rounded-full border-4 border-opacity-30 border-white animate-ping"></div>
                </div>
                <h2 className="mt-4 text-white text-lg font-semibold">Loading...</h2>
            </div>
        );
    }
};

export default Loading;
