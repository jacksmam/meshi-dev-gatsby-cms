import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface MetaType {
  title?: string;
  description?: string;
}

export interface OwnProps {
  meta: MetaType;
}

export const Meta = ({meta}: OwnProps) => {
  return (
    <Helmet>
      {meta.title && <title>{meta.title}</title>}
      {meta.description && <meta name="description" content={meta.description} />}
    </Helmet>
  )
}