import React, { ReactNode } from 'react';

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='px-3 md:px-10'>{children}</div>
  );
};

export default PageContainer;
