'use client';

import { getClientScope } from '@effector/next';
import { attachLogger } from 'effector-logger';
import React from 'react';

const clientScope = getClientScope();

if (clientScope) {
  attachLogger({
    scope: clientScope,
  });
}

export function EffectorLoggerAdapter({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
