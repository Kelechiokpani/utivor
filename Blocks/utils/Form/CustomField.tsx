import React from 'react';

const CustomField = ({as: AsComponent, ...rest}: any) => {
    return (
        <>
            <AsComponent
                {...rest}
            />
        </>
    );
};




export default CustomField
