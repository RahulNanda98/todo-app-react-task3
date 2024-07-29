import React from 'react';
import './Alert.css';

function Alert({ alertData }) {
    return (
        <div className="alert-box text-center">
            <div className={`alert alert-${alertData.type}`} role="alert">
                <p>{alertData.message}</p>
            </div>
        </div>
    )
}

export default Alert