import React from 'react';

function FullScreenDropdown({ isVisible, content }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-white z-50">
            {/* Content goes here */}
            <div className="p-4">
                {content}
            </div>
        </div>
    );
}

export default FullScreenDropdown;
