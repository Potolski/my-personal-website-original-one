'use client';

import { useState } from 'react';

export default function CopyEmailButton({ value }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <button
      className={`small-copy${copied ? ' copied' : ''}`}
      onClick={onClick}
      type="button"
    >
      {copied ? 'copied ✓' : 'copy'}
    </button>
  );
}
