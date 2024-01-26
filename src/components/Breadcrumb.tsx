import React from 'react';

type BreadcrumbProps = {
  title: string;
};

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <div className="container">
      <ul className="breadcrumb lg:pt-40">
        <li>
          <a href="/">Strona główna</a>
        </li>
        <li>{props.title}</li>
      </ul>
    </div>
  );
};
