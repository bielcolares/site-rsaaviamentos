import React from 'react';
import classNames from 'classnames';

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={classNames('bg-white rounded-xl shadow-sm border border-gray-100 p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
}
