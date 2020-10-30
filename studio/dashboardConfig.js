export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9c9987c726ab273571cf04',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jtdaoqty',
                  apiId: 'dee42772-809c-4465-8837-803a39c6a40c'
                },
                {
                  buildHookId: '5f9c99887330082469deb9fd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jdexodvg',
                  apiId: '07415859-7057-4764-898f-2aa5717d808e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinpaulkennedy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jdexodvg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
