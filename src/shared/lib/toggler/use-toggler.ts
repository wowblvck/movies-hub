'use client';

import { useEvent, useUnit } from 'effector-react';
import { TogglerInstance } from './types';

export const useToggler = (togglerInstance: TogglerInstance) => {
  const { $isOpen, ...togglerEvents } = togglerInstance;
  const isOpen = useUnit($isOpen);
  const open = useEvent(togglerEvents.open);
  const close = useEvent(togglerEvents.close);
  const toggle = useEvent(togglerEvents.toggle);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
