import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import ThemedImage from '@theme/ThemedImage';

export default () => {
  const {siteConfig} = useDocusaurusContext();
  const {title, tagline, customFields} = siteConfig;
  return (<div>
    {`${title} ${customFields.title_separator} ${tagline}`}
    
    <ThemedImage
       alt="Docusaurus themed image"
       sources={
        {
          light: customFields.logoLightBackground,
          dark: customFields.logoDarkBackground,
        }
      }/>;
    </div>);
};