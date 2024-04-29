const projectRoutes: {
    [key: string]: {
        title: string,
        description: string,
        skills: string[],
        links: { label: string, href: string }[],
        markdown?: string
    }
} = {
    ["coplay-xm"]: {
        title: "CoPlay XM",
        description: "We're providing a fleet management solution for gaming consoles that enables children's hospitals to provide games to patients.",
        skills: ["TypeScript", "React", "Chakra", "NodeJS", "Firestore", "AWS Lambda", "AWS EventBridge"],
        links: [{ label: "Demo", href: "https://drive.google.com/file/d/1OISJlhkaFDcflL25iiv_ztTcZc22Y__7/edit" }, { label: "Hosted Site", href: "https://xm.coplay.io/sign-in" }]
    },
    ["bookmark-city"]: {
        title: "Bookmark City",
        description: "I built a lightning fast bookmark manager allowing anyone to create a web directory for all to use.",
        skills: ["React", "Express", "PostgreSQL", "AWS EC2", "AWS RDS", "AWS Route 53", "AWS ACM", "axios"],
        links: [{ label: "Github Repo", href: "https://github.com/epistemancering/bookmarks" }, { label: "Demo", href: "https://vimeo.com/848881228" }, { label: "Hosted Site", href: "https://bookmark.city/" }]
    },
    ["friendly-diffusion"]: {
        title: "Friendly Diffusion",
        description: "I built a tool that allows non-developers to generate high quality images with AI for free.",
        skills: ["Python", "PyTorch", "Transformers", "Pillow", "Colaboratory"],
        links: [{ label: "Hosted Site", href: "https://colab.research.google.com/drive/1LJZRLAX1yX_1hBLY2yYyIT-NWgY0c1us" }]
    },
    asteroids: {
        title: "Asteroids",
        description: "I built a rigid body physics simulation that has lasers and explosions.",
        skills: ["JavaScript"],
        links: [{ label: "Hosted Site", href: "https://epistemancer.neocities.org/collisionandbullets" }]
    },
    expong: {
        title: "Expong",
        description: "I built a mobile game about catching a ball that gets faster as you do.",
        skills: ["TypeScript", "React Native", "Expo"],
        links: [{ label: "Github Repo", href: "https://github.com/epistemancering/expong" }]
    },
    portfolio: {
        title: "Portfolio",
        description: "I built the site you're using right now.",
        skills: ["TypeScript", "Next.js", "Tailwind", "AWS EC2", "AWS Route 53", "AWS ACM"],
        links: [{ label: "Github Repo", href: "https://github.com/epistemancering/portfolio" }]
    }
}
projectRoutes["coplay-xm"].markdown = `CoPlay XM grew out of common difficulties that children's hospitals experience in attempting to provide games to patients. Modern gaming consoles don't merely boot up game discs that run in isolation, they contain full operating systems with a multitude of online features. Whenever a patient is assigned to a room with an online console, it's possible that the previous patient installed inappropriate software, changed the privacy settings, or even left behind chat messages referencing their confidential medical information. This means that hospital staff must manually clear and reconfigure consoles for every patient change, which makes them prohibitively time consuming to provide. With CoPlay XM, however, a fleet of hundreds of Xbox One and Xbox Series consoles can be managed from a single web interface. Hospital staff can use the CoPlay XM app to create a custom profile with the correct privacy settings and software, and then apply the profile at the tap of a button, remotely reconfiguring as many consoles as needed as often as needed with no manual work.

As a web developer at Coplay, the startup that launched CoPlay XM in 2023, I work on all layers of the technical stack as needed, including the React/Chakra front end, the Lambda/EventBridge back end, and the Firestore database, all in TypeScript. A few of my individual contributions:

- A feature that allows users to set actions to an automatic schedule, e.g. reconfiguring consoles at 2:00 each morning, making fleets truly trivial to manage
- Logic that automatically retries any unsuccessful action after a brief delay, assuring reliable service even when the Xbox Live API is overloaded
- CSS optimizations to make the app usable on mobile devices
- A feature that allows users to edit their custom profiles after creating them, making it easy for them to adapt to changing needs
- A password reset feature to improve the sign in experience`
projectRoutes["bookmark-city"].markdown = `Before search, we used web directories to explore the internet; and although search has some obvious advantages, something valuable was lost. With Bookmark City, anyone can create a collection of bookmarks that anyone else can use - that is, anyone can create their own web directory. Here are just a few of the use cases:

- Lists of software tools that your team needs to be familiar with
- Playlists that link to music from different sites
- Recipe books that link to recipes from different blogs
- Wish lists that link to products from different stores
- Meta-collections that link to other collections

The app has an intentionally 90s look that's light on CSS, but I built it with React, Express, and AWS and it showcases some advanced features. I wrote drag and drop logic allowing users to easily reorder bookmarks or drop them into folders. I wanted Bookmark City to complement the browser's bookmarks bar rather than replacing it, so I designed it to allow dragging bookmarks directly from the app to the bookmarks bar, or from the bookmarks bar into the app - I don't think there is another web app in existence that supports that! I wrote a custom routing system so that every collection and every folder (and subfolder, and subsubfolder, and so on) created in that collection has a dynamic URL for easy sharing. Most user actions are instantaneous since I wrote an optimistic UI system that doesn't wait for the server response before updating the front end, and I wrote a signals-like state management system to minimize React reconciliation time despite some complex interactions between components.`
projectRoutes["friendly-diffusion"].markdown = `There aren't many apps that allow generating images with AI for free, since image generation is computationally expensive even if the models are open source. Colaboratory provides free compute, and there are publicly accessible Colab notebooks that can generate images with AI, but I've never seen one that's easy for non-developers to understand or use. So, I made Friendly Diffusion, a Colab notebook designed to allow absolute beginners with nothing more than a free Google account to unleash their creativity with latent diffusion.

With Friendly Diffusion, no prior knowledge is necessary to understand how to use the notebook to generate images. Users choose an open source model such as Stable Diffusion or Openjourney and they type a prompt, and the notebook generates the requested number of images and displays them. This is not just a basic tool, however: I wanted to allow users to configure various settings to take control of the diffusion process, so I wrote the diffusion logic myself rather than using a default Diffusers pipeline, and I presented the settings to the user as simply and clearly as possible with sensible defaults. I also integrated Google Drive to allow users to keep the model for later use, save their images to the cloud, and/or provide existing images to alter rather than generating from scratch.`
projectRoutes.asteroids.markdown = `This project dates to before my web development career, when I wanted to teach myself JavaScript but didn't quite understand what it's typically used for. So, as a fun learning project, I decided to use JavaScript to develop a video game with accurate physics and fast action that I would personally want to play. Insane as this idea was, it turned out well.

Since I was a beginning developer at the time, I used no library. I never learned <canvas>. I derived the trigonometry with pencil and paper. The player's ship is a dynamically colored CSS drop shadow cast from an offscreen <img>. Asteroids and explosions are CSS radial gradients. Walls and lasers are rotated <div>s. Frames are displayed with requestAnimationFrame, with dynamically calculated frame pacing so that the simulation speed doesn't depend on the device's refresh rate. Asteroid collisions are physically accurate with no randomness. Ray traced lasers bounce indefinitely at reflected angles until they strike an asteroid. I ensured all physics calculations are robust to floating point error, and I wrote continuous collision detection logic that prevents any tunneling glitches even when very small asteroids collide at very high speeds. All of the HTML, CSS, and JavaScript is in a single .html file, hosted for free on a beginner-friendly service called Neocities.

It turns out JavaScript is a pretty good language!`
projectRoutes.expong.markdown = `Expong is a Pong game that I built to learn Expo. Designed to be played with one hand, the player controls the paddle by sliding their finger across the screen. To keep things interesting, the puck gets faster or slower to match the player's performance.

Expong runs natively on Android and iOS. I used React Native's Dimensions API to measure the screen's height and width for game logic calculations to be consistent on different devices.`
projectRoutes.portfolio.markdown = `I'm often asked whether I used a template to build this site. I did use a free Astro template as my starting point for the visual design, but for various reasons I preferred to use a full stack framework, so I wrote every line of the code myself in Next.js.

My version uses Next.js image optimization for faster loading and Next.js routing for instant page navigation, both significant improvements over the original template. I replaced Astro's built-in Markdown parser with the react-markdown library for project descriptions such as the one you're currently reading. Automatically determining the initial color scheme based on prefers-color-scheme is an interesting puzzle with a full stack framework, since the server can't know the client's preference before page load: I solved it cleanly by forcing client-side rendering for <body> content, with no need for any extra library and no hydration conflicts.`

export default projectRoutes