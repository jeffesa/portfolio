export const state = () => ({
  portfolio: { 
    title: 'Jefferson Santos',
    subtitle: 'Staff Software Engineer',
    description: `<p>I build open-source front-end libraries at <a href="#">Algolia</a> and host two tech podcasts: <a href="#">Developer Experience</a> and Entre Devs.</p>
    <p>On my spare time, I share what I learn on my blog and speak at <a href="#">tech conferences</a> around the world.</p>`,
    menu: [
      {
        id: 'projects',
        name: 'Projects'
      },
      {
        id: 'experiences',
        name: 'Experiences'
      },
      {
        id: 'interviews',
        name: 'Interviews'
      },
      {
        id: 'about-my-portfolio',
        name: 'About my portfolio'
      },
    ],
    profile: {
      image: './profile/sarah-dayan.webp',
      github: {
        title: 'Github',
        link: 'https:github.com'
      }
    }
  },
})
