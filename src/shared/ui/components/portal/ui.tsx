// 'use client';

import React from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted && createPortal(children, document.body);
};
