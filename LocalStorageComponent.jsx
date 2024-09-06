import React, { useState, useEffect } from 'react';

function StorageExample() {
    const [text, setText] = useState('');

    // Recupera el valor almacenado en localStorage al cargar el componente
    useEffect(() => {
        const storedText = localStorage.getItem('userText');
        if (storedText) {
            setText(storedText);
        }
    }, []);

    // Maneja el cambio en el campo de texto
    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);

        // Guarda el texto en localStorage
        localStorage.setItem('userText', newText);
    };

    return (
        <div>
            <h2>Texto Guardado en localStorage</h2>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Escribe algo..."
                rows="4"
                cols="50"
            />
            <p>El texto se guarda automáticamente y persiste entre sesiones.</p>
        </div>
    );
}

export default StorageExample;
