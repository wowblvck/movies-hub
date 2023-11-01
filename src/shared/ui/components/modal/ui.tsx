'use client';

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { useLockedBody } from '@/shared/lib';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { Portal } from '@/shared/ui';

type ModalProps = {
  isOpen: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal: React.FC<ModalProps> = ({ isOpen, children, className, ...props }) => {
  useLockedBody(isOpen);
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={0}
      nodeRef={nodeRef}
      classNames={{
        enterDone: 'opacity-100',
      }}
    >
      <Portal>
        {isOpen && (
          <div
            ref={nodeRef}
            className={twMerge('opacity-0 transition-opacity', className)}
            {...props}
          >
            {children}
          </div>
        )}
      </Portal>
    </CSSTransition>
  );
};
