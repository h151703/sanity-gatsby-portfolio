export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eda3ecc3a487c85e21d89d6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sy9ypzu4',
                  apiId: 'e7fe282d-5c75-4023-bc4c-1b1faa8d12c2'
                },
                {
                  buildHookId: '5eda3eccf5a8b0992cce8128',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bj5kw12k',
                  apiId: '5b16bde1-7233-4571-b771-8933f04eccc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/h151703/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bj5kw12k.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
