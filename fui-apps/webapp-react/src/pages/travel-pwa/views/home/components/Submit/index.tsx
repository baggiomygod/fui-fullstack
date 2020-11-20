import * as React from 'react';

import './index.styl';

const { memo } = React
function Submit() {
    return (
        <div className="submit">
            <button type="submit" className="submit-button">
                {' '}
                搜索{' '}
            </button>
        </div>
    );
};

export default memo(Submit)
