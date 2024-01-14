import React from 'react';
import NavLinks from '../NavLinks';
const PageContainer = ({children}) => {
    return <div>
        <NavLinks/>
    {children}
    </div>;
}

export default PageContainer;