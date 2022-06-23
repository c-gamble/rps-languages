import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';

export default function Languages() {
    const navigate = useNavigate();
    const handleFrench = useCallback(() => navigate('/French', {replace: true}), [navigate]);
    const handleGerman = useCallback(() => navigate('/German', {replace: true}), [navigate]);
    const handleLatin = useCallback(() => navigate('/Latin', {replace: true}), [navigate]);
    return (
        <div>
            <button onClick = {handleFrench}>French</button>
            <button onClick = {handleGerman}>German</button>
            <button onClick = {handleLatin}>Latin</button>
        </div>

    );
}