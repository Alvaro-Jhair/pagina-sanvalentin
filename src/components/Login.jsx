import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [date, setDate] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 8) value = value.slice(0, 8); // Limit to 8 digits

        if (value.length > 4) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
        } else if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`;
        }

        setDate(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Expected format: YYYY-MM-DD or simple string match depending on input type
        // We'll use a text input with placeholder for "DD/MM/YYYY" to match user request exact string "05/05/2025" logic
        // Or we can use type="date" but user specifically mentioned "05/05/2025" string.
        // Let's use a standard text input for flexibility with the exact string format.

        if (date === '05/05/2025') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000); // Shake effect reset
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>🔒 Nuestra Fecha Especial</h1>
                <p>Introduce nuestra fecha de aniversario para continuar.</p>

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="tel"
                        placeholder="DD/MM/AAAA"
                        value={date}
                        onChange={handleInputChange}
                        maxLength="10"
                        className={error ? 'input-error' : ''}
                    />
                    <button type="submit">Entrar ❤️</button>
                </form>
                {error && <p className="error-msg">Esa no es... 😢 Intenta de nuevo </p>}
            </div>
        </div>
    );
}
