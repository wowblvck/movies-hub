import { Event, Store } from 'effector';

export interface TogglerInstance {
  open: Event<void>;
  close: Event<void>;
  toggle: Event<void>;
  $isOpen: Store<boolean>;
}
