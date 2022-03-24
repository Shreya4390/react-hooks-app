import React, { useContext } from "react";
import ColorContext from './ColorContext';

const MyComponent = () => {
    const colors = useContext(ColorContext);

    return <div style={{ backgroundColor: colors.blue }}>Hello World</div>;
};

export default MyComponent

