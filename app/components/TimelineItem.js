'use client';

import { useId, useState } from 'react';

export default function TimelineItem({
  yr,
  duration,
  company,
  pill,
  role,
  current = false,
  children,
}) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const hasDetails = Boolean(children);

  const classes = ['tl-item'];
  if (current) classes.push('current');
  if (open) classes.push('open');

  const header = (
    <>
      <div className="tl-company">
        <h3>{company}</h3>
        {pill && <span className="pill">{pill}</span>}
      </div>
      {role && <div className="tl-role">{role}</div>}
    </>
  );

  return (
    <div className={classes.join(' ')}>
      <div className="tl-time">
        <span className="yr">{yr}</span>
        {duration}
      </div>
      <div className="tl-body">
        {hasDetails ? (
          <button
            type="button"
            className="tl-header"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={detailsId}
          >
            {header}
            <span className="tl-chev" aria-hidden="true" />
          </button>
        ) : (
          <div className="tl-header tl-header--static">{header}</div>
        )}
        {hasDetails && (
          <div id={detailsId} className="tl-details" aria-hidden={!open}>
            <div className="tl-details-inner">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
}
