const API_URL = "https://api.ivelthoven.nl/github";
const PROJECTS_URL = "https://projects.ivelthoven.nl/"

const loadData = (data) => {
    for (let i in data) {
        let repo = data[i];
        let current_datetime = new Date(repo.created_at)
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()

        let deployment_url = "";
        if (repo.deployments === 'github-pages') {
            deployment_url = PROJECTS_URL + repo.name;
        }
        $("#repositories").append(`
        <div class="repo">
            <h2>${repo.name}</h2>
            <p class="caption">${repo.id} / ${formatted_date}</p>
            ${deployment_url}
        </div>
        `)
    }
}

$(() => {
    $(document).ready(function () {
        $.getJSON( API_URL, function( data ) {
        });
    });
    loadData(example_data);
});

// const example_data = [
//     {
//       id: 160435640,
//       name: 'noxious_networks_landing_page',
//       description: 'A landing Page for Noxious Networks',
//       created_at: '2018-12-04T16:15:50Z',
//       url: 'https://api.github.com/repos/ivelthoven/noxious_networks_landing_page',
//       deployments: null
//     },
//     {
//       id: 91120396,
//       name: 'DoOrDoNot',
//       description: 'Not sure on to do something but you do want to give it some chance depending on how you feel like doing it? ',
//       created_at: '2017-05-12T11:45:58Z',
//       url: 'https://api.github.com/repos/ivelthoven/DoOrDoNot',
//       deployments: null
//     },
//     {
//       id: 91119760,
//       name: 'TheGuessingGame',
//       description: 'A simple guessing game from the 1/10 numbers and you have 3 chances to complete. Good luck!',
//       created_at: '2017-05-12T11:36:37Z',
//       url: 'https://api.github.com/repos/ivelthoven/TheGuessingGame',
//       deployments: null
//     },
//     {
//       id: 76448580,
//       name: 'omeganetworkpac3',
//       description: 'The pac models you are permitted to use on the server.',
//       created_at: '2016-12-14T02:16:14Z',
//       url: 'https://api.github.com/repos/ivelthoven/omeganetworkpac3',
//       deployments: null
//     },
//     {
//       id: 75197554,
//       name: 'passwordcheck',
//       description: 'You need to fill in a password to get through.',
//       created_at: '2016-11-30T06:59:57Z',
//       url: 'https://api.github.com/repos/ivelthoven/passwordcheck',
//       deployments: null
//     },
//     {
//       id: 185399188,
//       name: 'shopify-tutorial',
//       description: 'Created with CodeSandbox',
//       created_at: '2019-05-07T05:39:06Z',
//       url: 'https://api.github.com/repos/ivelthoven/shopify-tutorial',
//       deployments: null
//     },
//     {
//       id: 156760820,
//       name: 'serieweb',
//       description: 'My first web application',
//       created_at: '2018-11-08T11:51:54Z',
//       url: 'https://api.github.com/repos/ivelthoven/serieweb',
//       deployments: null
//     },
//     {
//       id: 75195701,
//       name: 'AboutME',
//       description: 'A little python code which is about me!',
//       created_at: '2016-11-30T06:40:19Z',
//       url: 'https://api.github.com/repos/ivelthoven/AboutME',
//       deployments: null
//     },
//     {
//       id: 157990700,
//       name: 'ivelthoven_static',
//       description: 'A static landing page portfolio',
//       created_at: '2018-11-17T06:10:23Z',
//       url: 'https://api.github.com/repos/ivelthoven/ivelthoven_static',
//       deployments: null
//     },
//     {
//       id: 157547790,
//       name: 'ivelthoven',
//       description: 'A Portfolio',
//       created_at: '2018-11-14T04:47:52Z',
//       url: 'https://api.github.com/repos/ivelthoven/ivelthoven',
//       deployments: null
//     },
//     {
//       id: 73363665,
//       name: 'hello-world',
//       description: 'For the tutorial',
//       created_at: '2016-11-10T00:52:27Z',
//       url: 'https://api.github.com/repos/ivelthoven/hello-world',
//       deployments: null
//     },
//     {
//       id: 178943190,
//       name: 'loadingscreen',
//       description: 'A loading screen for Garry\'s Mod',
//       created_at: '2019-04-01T13:38:39Z',
//       url: 'https://api.github.com/repos/ivelthoven/loadingscreen',
//       deployments: 'github-pages'
//     },
//     {
//       id: 114985119,
//       name: 'ONTerminal',
//       description: 'lua entity for gmod',
//       created_at: '2017-12-21T01:01:24Z',
//       url: 'https://api.github.com/repos/ivelthoven/ONTerminal',
//       deployments: null
//     },
//     {
//       id: 180863872,
//       name: 'ivelthoven.github.io',
//       description: 'My index page for github pages',
//       created_at: '2019-04-11T12:30:27Z',
//       url: 'https://api.github.com/repos/ivelthoven/ivelthoven.github.io',
//       deployments: 'github-pages'
//     },
//     {
//       id: 180360671,
//       name: 'ASP.NET-TestWorld',
//       description: null,
//       created_at: '2019-04-09T05:22:05Z',
//       url: 'https://api.github.com/repos/ivelthoven/ASP.NET-TestWorld',
//       deployments: null
//     },
//     {
//       id: 157991182,
//       name: 'old_portfolio',
//       description: 'Github Page',
//       created_at: '2018-11-17T06:16:21Z',
//       url: 'https://api.github.com/repos/ivelthoven/old_portfolio',
//       deployments: 'github-pages'
//     }
//   ]