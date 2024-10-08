/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */


const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  

  mainSidebar: [
    {
      type: 'category',
      label: 'Liga: Los Muertos',
      collapsible: false,
      link:  {
        type: 'doc',
        id: 'liga/2024/index'
      },
      items: ['liga/2024/reglamento',
        {
          type: 'category',
          label: 'Calendario',
          collapsed: false,
          collapsible: false,
          link:  {
            type: 'doc',
            id: 'liga/2024/calendario'
          },
          items: ['liga/2024/enfrentamientos','liga/2024/enfrentamientos_resultados']
        },
        {
          type: 'doc',
          label: 'Equipos',
          id: 'liga/2024/equipos'
        },
      ],
    },
  ],

  equiposLiga: [
    {
      type: 'category',
      label: 'Todos los Equipos',
      collapsible: false,
      link:  {
        type: 'doc',
        id: 'liga/equipos/index'
      },
      items: ['liga/equipos/doro_de_matar',
        'liga/equipos/flying_whales',
        'liga/equipos/jack_y_sus_amigos',
        'liga/equipos/spider_watchers',
        'liga/equipos/tacos_de_asada',
      ],
    },
  ],

};

export default sidebars;
