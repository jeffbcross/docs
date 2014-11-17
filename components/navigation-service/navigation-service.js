angular.module('dpdNavigationService', []).
  service('dpdNavigationService', function() {
    this.guidesNav = [
      {
        title: 'Getting Started',
        url: '/docs/getting-started/what-is-deployd.md.html'
      },
      {
        title: 'Basics',
        url: '/docs/basics/cli.md.html'
      },
      {
        title: 'Collections',
        url: '/docs/collections/creating-collections.md.html'
      },
      {
        title: 'Users',
        url: '/docs/users/creating-user-collections.md.html'
      },
      {
        title: 'Using Modules',
        url: '/docs/using-modules/installing-modules.md.html'
      },
      {
        title: 'The Deployd Server',
        url: '/docs/server/as-a-node-module.md.html'
      },
      {
        title: 'Developing Modules',
        url: '/docs/developing-modules/creating-modules.md.html'
      }
    ];

    this.apis = [
      {
        title: 'collections',
        url: '/docs/collections/reference/event-api.md.html',
        children: [
          {
            url: '/docs/collections/reference/event-api.md.html',
            title: 'Event API'
          },
          {
            url: '/docs/collections/reference/http.md.html',
            title: 'Over HTTP'
          },
          {
            url: '/docs/collections/reference/querying-collections.md.html',
            title: 'Querying Collections'
          },
          {
            url: '/docs/collections/reference/updating-objects.md.html',
            title: 'Updating Objects in Collections'
          },
          {
            url: '/docs/collections/reference/dpd-js.md.html',
            title: 'Using dpd.js'
          }
        ]
      },
      {
        title: 'using modules',
        url: '/docs/using-modules/reference/dpd-js.md.html',
        children: [
          {
            url: '/docs/using-modules/reference/dpd-js.md.html',
            title: 'Dpd.js for Custom Resources'
          },
          {
            url: '/docs/using-modules/reference/event-api.md.html',
            title: 'Event API for Custom Resources'
          }
        ]
      },
      {
        title: 'developing-modules',
        url: '/docs/developing-modules/internal-api/collection.md.html',
        children: [
          {
            url: '/docs/developing-modules/internal-api/collection.md.html',
            title: 'Collection Resource Type'
          },
          {
            url: '/docs/developing-modules/internal-api/context.md.html',
            title: 'Context'
          },
          {
            url: '/docs/developing-modules/internal-api/script.md.html',
            title: 'Event Scripts'
          },
          {
            url: '/docs/developing-modules/internal-api/internal-client.md.html',
            title: 'Internal Client'
          },
          {
            url: '/docs/developing-modules/internal-api/resource.md.html',
            title: 'Resource Types'
          },
          {
            url: '/docs/developing-modules/internal-api/server.md.html',
            title: 'Server'
          },
          {
            url: '/docs/developing-modules/internal-api/session.md.html',
            title: 'Session'
          },
          {
            url: '/docs/developing-modules/internal-api/session-store.md.html',
            title: 'Session Store'
          },
          {
            url: '/docs/developing-modules/internal-api/store.md.html',
            title: 'Store'
          }
        ]
      }
    ];

    this.examples = [
      {
        url: 'collections/creating-collections.md.html',
        title: 'Collections',
        children: [
          {
            url: '/examples/index.html#s-A%20Simple%20Todo%20App',
            title: 'A Simple Todo App'
          },
          {
            url: '/examples/index.html#s-A%20Simple%20Todo%20App%20with%20AngularJS',
            title: 'A Simple Todo App with AngularJS'
          },
          {
            url: '/examples/index.html#s-A%20Simple%20Todo%20App%20with%20Backbone.js',
            title: 'A Simple Todo App with Backbone.js'
          },
          {
            url: '/examples/index.html#s-Chatroom',
            title: 'Chatroom'
          }
        ]
      },
      {
        url: 'users/creating-user-collections.md.html',
        title: 'Users',
        children: [
          {
            url: '/examples/index.html#s-Microblogging%20app',
            title: 'Microblogging app'
          },
          {
            url: '/examples/index.html#s-Simple%20Login%20Form',
            title: 'Simple Login Form'
          }
        ]
      },
      {
        url: 'developing-modules/creating-modules.md.html',
        title: 'Developing Modules',
        children: [
          {
            url: '/examples/index.html#s-Email%20Resource%20Type',
            title: 'Email Resource'
          },
          {
            url: '/examples/index.html#s-Event%20Resource%20Type',
            title: 'Event Resource'
          },

          {
            url: '/examples/index.html#s-S3%20Bucket%20Resource%20Type',
            title: 'S3 Bucket Resource'
          }
        ]
      }
    ];
  });

