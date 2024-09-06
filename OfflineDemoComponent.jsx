import React, { useState, useEffect } from 'react';

function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine); // <- state

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            {isOnline ? 'Estás conectado a Internet.' : 'Estás desconectado.'}
        </div>
    );
}

export default NetworkStatus;
