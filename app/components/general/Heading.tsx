import React from 'react';

export type HeadingProps = {
    text: string;
    center?: boolean; // "center" özelliğini ekledik ve opsiyonel yaptık.
};

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
    return (
        <div className={`text-slate-500 my-3 md:my-10 px-3 md:px-10 md:text-xl ${center ? "text-center" : "text-start"}`}>
            {text}
        </div>
    );
};

export default Heading;
