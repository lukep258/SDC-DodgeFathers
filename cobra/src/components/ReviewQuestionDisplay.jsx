


import React, { useState } from 'react';
import Questions from './Questions';
import Reviews from './Reviews';

function TabComponent() {
    const [activeTab, setActiveTab] = useState('tab1'); // Default to the first tab

    return (
        <div>
            <div role="tablist" className="flex py-5 m-auto max-w-[75%] border-t-[1px] font-titillium font-semibold tabs tabs-bordered">
                <a role="tab" className={`tab ${activeTab === 'tab1' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab1')}>Questions (8)</a>
                <a role="tab" className={`tab ${activeTab === 'tab2' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab2')}>Questions (1)</a>
            </div>

            {activeTab === 'tab1' && <Reviews />}
            {activeTab === 'tab2' && <Questions />}
        </div>
    );
}

export default TabComponent;
