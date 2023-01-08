import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default () => {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline, customFields } = siteConfig;
  return (<div>
    {`${title} ${customFields.title_separator} ${tagline}`}
    <ul>
      <li><a href="{customFields.campus_virtual}">PL {customFields.campus_virtual}</a></li>
      <li><a href="{customFields.participantes}">Participantes</a></li>
      <li><a href="{customFields.tareas}">Tareas</a></li>
      <li><a href="{customFields.foros}">Foros</a></li>
      <li>Aula de <a href="{customFields.covid_ull}">Recursos Disponibles para Realizar ACTIVIDAD DOCENTE NO PRESENCIAL</a></li>
    </ul>
  </div>);
};