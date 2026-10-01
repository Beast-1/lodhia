import React from 'react';

interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, children, light = false }) => {
  return (
    <div className={`section-label${light ? ' section-label-light' : ''}`}>
      <span>{number}</span>
      <span className="label-rule" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
};
