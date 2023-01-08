module.exports = {
  title: 'PL',
  logo: {
    alt: 'My Site Logo',
    src: 'img/favicon.ico',
    //src: 'img/logo.svg',
  },
  items: [
    {
      type: 'doc',
      docId: 'intro',
      position: 'left',
      label: 'Temas',
    },
    {to: '/blog', label: 'Clases', position: 'left'},
    {to: '/labs', label: 'Labs', position: 'left'},
    {to: '/teams', label: 'Teams', position: 'left'},
    {to: '/docs/resources', label: 'Resources', position: 'right'},

    {
      type: 'dropdown',
      label: 'Community',
      position: 'left',
      items: [
        {
          label: 'Facebook',
          href: 'https://www.facebook.com',
        },
        {
          to: '/chuchu',
          label: 'Social',
          //docId: 'social',
        },
        // ... more items
      ],
    },

    {
      to: '/campus-virtual',
      label: 'Campus Virtual',
      position: 'right',
      items: [
        { label:'PL en el Campus Virtual', href: 'https://campusingenieriaytecnologia2122.ull.es/course/view.php?id=2122090039' },
         
        // Teachers
        { label: "Guía", href: 'https://www.ull.es/apps/guias/guias/view_guide_course/2122/139263121/'},
        { label: "Casiano", href: 'https://www.ull.es/apps/guias/guias/view_teacher_niu/798/crguezl/'},
        { label: "Israel", href: 'https://www.ull.es/apps/guias/guias/view_teacher_niu/798/ilopezpl/'},
        { label: 'Horario de Tutorías', href: 'https://www.ull.es/apps/guias/guias/view_guide_course/2122/139263121/3/'},

        // Sections in the Campus
        { label: 'Participantes', href: "https://campusingenieriaytecnologia2122.ull.es/user/index.php?id=2122090039" },
        { label: 'Calificador', href: "https://campusingenieriaytecnologia2122.ull.es/grade/report/user/index.php?id=2122090039" },
        { label: 'Tareas', href: "https://campusingenieriaytecnologia2122.ull.es/mod/assign/index.php?id=2122090039"},
        { label: 'Foros', href: "https://campusingenieriaytecnologia2122.ull.es/mod/forum/index.php?id=2122090039"},
        { label: 'Banco de Preguntas', href: "https://campusingenieriaytecnologia2122.ull.es/question/edit.php?courseid=2122090039" },

        // Other
        { label: 'Calendario Académico', href: 'https://www.ull.es/estudios-docencia/calendario-academico/' },
        { labe: 'Portafirmas', href: 'https://sede.ull.es/ecivilis-signature-inbox-application/inbox.html'},
      
        // Other subjects and Centers
        { label: 'TFG', href: "https://campusingenieriaytecnologia2122.ull.es/grade/report/user/index.php?id=2122090070&userid=254"},
        { label: 'Campus de Masters', href: "https://campusdoctoradoyposgrado2122.ull.es/my/"},
      ]
    },
    require('./github-navbar'),
    {
      label: 'Google',
      type: 'dropdown',
      position: 'right',
      items: [
        {label: 'Meet', href: 'https://meet.google.com/eha-yfij-zmo'},
        {label: 'Chat', href: 'https://mail.google.com/chat/u/1/#chat/welcome'},
        {label: 'Spreadsheets', href: 'https://docs.google.com/spreadsheets/u/1/?tgif=d'},
        {label: 'Community', href: 'https://currents.google.com/u/0/communities/101901734024125937720'},
        {
          //type: 'dropdown',
          label: 'Vídeos 21/22', 
          href: 'https://youtube.com/playlist?list=PLuPGCp-dfrUQbbnbT_8qHK1WQYurYwBEY'
        },
        { label: 'Videos 20/21', href: 'https://www.youtube.com/playlist?list=PLuPGCp-dfrUTzN_o2beArY1QoFUTGH-yd'},
        { label: 'Videos 19/20', href: 'https://youtube.com/playlist?list=PLuPGCp-dfrUTByhC5b9vInei9OzdYSBs7' }
      ],
    },

  ],
}