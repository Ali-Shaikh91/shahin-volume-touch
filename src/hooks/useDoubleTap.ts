
import { useCallback, useRef } from 'react';

interface DoubleTapOptions {
  onDoubleTap: () => void;
  latency?: number;
}

export const useDoubleTap = ({ onDoubleTap, latency = 300 }: DoubleTapOptions) => {
  const tapTimeout = useRef<number | null>(null);

  const handler = useCallback(() => {
    if (!tapTimeout.current) {
      tapTimeout.current = window.setTimeout(() => {
        tapTimeout.current = null;
      }, latency);
    } else {
      window.clearTimeout(tapTimeout.current);
      tapTimeout.current = null;
      onDoubleTap();
    }
  }, [onDoubleTap, latency]);

  return { onTouchStart: handler, onClick: handler };
};
