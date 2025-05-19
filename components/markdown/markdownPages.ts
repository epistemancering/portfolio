const CoPlayXM = `CoPlay XM grew out of common difficulties that children's hospitals experience in attempting to provide games to patients. Modern gaming consoles don't merely boot up game discs that run in isolation, they contain full operating systems with a multitude of online features. Whenever a patient is assigned to a room with an online console, it's possible that the previous patient installed inappropriate software, changed the privacy settings, or even left behind chat messages referencing their confidential medical information. This means that hospital staff must manually clear and reconfigure consoles for every patient change, which makes them prohibitively time consuming to provide. With CoPlay XM, however, a fleet of hundreds of Xbox One and Xbox Series consoles can be managed from a single web interface. Hospital staff can use the CoPlay XM app to create a custom profile with the correct privacy settings and software, and then apply the profile at the tap of a button, remotely reconfiguring as many consoles as needed as often as needed with no manual work.

As a web developer at Coplay, the startup that launched CoPlay XM in 2023, I worked on all layers of the technical stack as needed, including the React/Chakra front end, the Lambda/EventBridge back end, and the Firestore database, all in TypeScript. A few of my individual contributions:

- A feature that allows users to set actions to an automatic schedule, e.g. reconfiguring consoles at 2:00 each morning, making fleets truly trivial to manage
- Logic that automatically retries any unsuccessful action after a brief delay, assuring reliable service even when the Xbox Live API is overloaded
- CSS optimizations to make the app usable on mobile devices
- A feature that allows users to edit their custom profiles after creating them, making it easy for them to adapt to changing needs
- A password reset feature to improve the sign in experience`

const BookmarkCity = `Before search, we used web directories to explore the internet; and although search has some obvious advantages, something valuable was lost. With Bookmark City, anyone can create a collection of bookmarks that anyone else can use - that is, anyone can create their own web directory. Here are just a few of the use cases:

- Lists of software tools that your team needs to be familiar with
- Playlists that link to music from different sites
- Recipe books that link to recipes from different blogs
- Wish lists that link to products from different stores
- Meta-collections that link to other collections

The app has an intentionally 90s look that's light on CSS, but I built it with React, Express, and AWS and it showcases some advanced features. I wrote drag and drop logic allowing users to easily reorder bookmarks or drop them into folders. I wanted Bookmark City to complement the browser's bookmarks bar rather than replacing it, so I designed it to allow dragging bookmarks directly from the app to the bookmarks bar, or from the bookmarks bar into the app - I don't think there is another web app in existence that supports that! I wrote a custom routing system so that every collection and every folder (and subfolder, and subsubfolder, and so on) created in that collection has a dynamic URL for easy sharing. Most user actions are instantaneous since I wrote an optimistic UI system that updates the front end without waiting for the server response, and I developed a signals-like state management system to minimize React reconciliation time despite some complex component interactions.`

const FriendlyDiffusion = `There aren't many apps that allow generating images with AI for free, since image generation is computationally expensive even if the models are open source. Colaboratory provides free compute, and there are publicly accessible Colab notebooks that can generate images with AI, but I've never seen one that's easy for non-developers to understand or use. So, I made Friendly Diffusion, a Colab notebook designed to allow absolute beginners with nothing more than a free Google account to unleash their creativity with latent diffusion.

With Friendly Diffusion, no prior knowledge is necessary to understand how to use the notebook to generate images. Users choose an open source model such as Stable Diffusion or Openjourney and they type a prompt, and the notebook generates and displays the requested number of images. This is not just a basic tool, however: I wanted to allow users to configure various settings to take control of the diffusion process, so I wrote the diffusion logic myself rather than using a default Diffusers pipeline, and I presented the settings to the user as simply and clearly as possible with sensible defaults. I also integrated Google Drive to allow users to keep the model for later use, save their images to the cloud, and/or provide existing images to alter rather than generating from scratch.`

const Asteroids = `This project dates to before my web development career, when I wanted to teach myself JavaScript but didn't quite understand what it's typically used for. So, as a fun learning project, I decided to use JavaScript to develop a video game with accurate physics and fast action that I would personally want to play. Insane as this idea was, it turned out well.

Since I was a beginning developer at the time, I used no library. I never learned <canvas>. I derived the trigonometry with pencil and paper. The player's ship is a dynamically colored CSS drop shadow cast from an offscreen <img>. Asteroids and explosions are CSS radial gradients. Walls and lasers are rotated <div>s. Frames are displayed with requestAnimationFrame, with dynamically calculated frame pacing so that the simulation speed doesn't depend on the device's refresh rate. Asteroid collisions are physically accurate with no randomness. Ray traced lasers bounce indefinitely at reflected angles until they strike an asteroid. I ensured all physics calculations are robust to floating point error, and I wrote continuous collision detection logic that prevents any tunneling glitches even when very small asteroids collide at very high speeds. All of the HTML, CSS, and JavaScript is in a single .html file, hosted for free on a beginner-friendly service called Neocities.

It turns out JavaScript is a pretty good language!`

const Expong = `Expong is a Pong game that I built to learn Expo. Designed to be played with one hand, the player controls the paddle by sliding their finger across the screen. To keep things interesting, the puck gets faster or slower to match the player's performance.

Expong runs natively on Android and iOS. I used React Native's Dimensions API to measure the screen's height and width for game logic calculations to be consistent on different devices.`

const Portfolio = `I'm often asked whether I used a template to build this site. I did use a free Astro template as my starting point for the visual design, but for various reasons I preferred to use a full stack framework, so I wrote every line of the code myself in Next.js.

My version uses Next.js image optimization for faster loading and Next.js routing for instant page navigation, both significant improvements over the original template. I replaced Astro's built-in Markdown parser with the react-markdown library for project descriptions such as the one you're currently reading. Automatically determining the initial color scheme based on prefers-color-scheme is an interesting puzzle with a full stack framework, since the server can't know the client's preference before page load: I solved it cleanly by forcing client-side rendering for <body> content, with no need for any extra library and no hydration conflicts.`

const WindsurfsAIassistanthasfullfilesystemaccess = `Windsurf's AI assistant has built-in tools to search for, read, and modify your files without asking. Users are likely to assume that the purpose of these tools is to assist with code projects, and so they wouldn't work with files outside of the folder that the user opened in Windsurf. However, the tools work with any file. Suppose you have two folders, one of which contains a private file:
\`\`\`
personal/
    private.txt
project/
\`\`\`
Windsurf's AI assistant can read and modify \`personal/private.txt\` regardless of whether you opened \`personal/\`, \`project/\`, or some other folder.

As Windsurf's disclaimer states, "AI may make mistakes." In other words, since AI models are inherently inscrutable, there can be no assurance that they will behave as intended. It follows that there can be no assurance that the assistant will never invent a reason to access private files, regardless of the model you choose. Furthermore, since all models as of this writing are highly gullible, malicious MCP plugins and even static websites can trivially enlist the assistant to steal secrets or plant malware.
## Full read access can't be disabled
The built-in tools for modifying files are disabled in Chat mode, but the tools for searching for and reading files, i.e. sending your data to Windsurf's servers, are always available. The \`.codeiumignore\` feature can protect files in the current folder, but it doesn't affect files outside of the current folder, even if those files have their own \`.codeiumignore\`. Suppose you create \`.codeiumignore\` files in both folders to try to protect \`personal/private.txt\`:
\`\`\`
personal/
    .codeiumignore
    private.txt
project/
    .codeiumignore
\`\`\`
The assistant can't access \`personal/private.txt\` if you opened \`personal/\` and you configured \`personal/.codeiumignore\` correctly. However, it can access \`personal/private.txt\` if you opened \`project/\` or some other folder, regardless of how you configured either \`.codeiumignore\` file.
## The vulnerability is specific to Windsurf
I tested Github Copilot and Cursor as well:
- Copilot can't access files outside of the current folder unless you tag them.
- Cursor can access files outside of the current folder, but this can be restricted with its [Global Cursor Ignore List](https://docs.cursor.com/context/ignore-files#global-ignore-files) setting, which Windsurf lacks.
## Workarounds
Windsurf's unlimited free tier sets it apart as the only Visual Studio Code-based editor that allows coders to leverage AI ethically without funding it, so I don't necessarily recommend that Windsurf users switch. The surefire way to work around the vulnerability is sandboxing Windsurf. If that isn't an option, here's how to minimize your risk:
- Don't use Write mode.
- Disable the Enable Cascade Web Tools setting.
- Don't add MCP servers that you don't trust absolutely, even if they don't use local scripts.
- Write in \`global_rules.md\` that \`grep_search\` and \`view_file\` must never be used.
- Write a local MCP server with your own versions.
## Yes, I tried official channels
Windsurf's support page directs feature requests to an official forum where [I posted on 4/15](https://windsurf.canny.io/feature-requests/p/security-prevent-cascade-from-accessing-non-workspace-files). No one responded, so I messaged support on 5/3, and well, AI dystopia may be closer than you think. [You can read the conversation here.](/blog/windsurf's-ai-assistant-has-full-file-system-access/windsurf-support-emails) I realized on 5/11 that Windsurf's documentation directs security concerns to a different inbox, and I sent an email there as well. There has been no response.
## This bodes poorly
Most people are worried about artificial intelligence but know little about it. We in the information industry are the experts expected to inform the rest of society. In my experience, however, most software engineers are stubbornly asleep at the wheel. We've watched AI capabilities proliferate at a breakneck pace for years and we still insist they'll hit a wall any month now. We watched AI spam ruin software job boards and we still insist AI isn't a destructive technology. AI-enabled cyberattacks aren't even on our radar. It's possible that Windsurf's architects simply haven't realized that language models can abuse permissions.

Our industry needs to wake up, explicitly acknowledge that AI is dangerous, and start implementing the most basic security, or we're collectively going to bring about [a future no one wants](https://ai-2027.com).`

const Windsurfsupportemails = `me:
>https://windsurf.canny.io/feature-requests/p/security-prevent-cascade-from-accessing-non-workspace-files

Mike (Windsurf):
>Your request (26513) has been received and is being reviewed by our support staff.
>
>Due to the volume of reports, our team may take 1-2 business days to complete their review.
>
>In the meantime, check out our documentation - [https://docs.windsurf.com/](https://docs.windsurf.com/)
>
>To help us assist you quickly, attach any available logs to your ticket per the instructions -
>[https://docs.windsurf.com/extensions/gathering-extension-logs](https://docs.windsurf.com/extensions/gathering-extension-logs)
>
>To add additional comments, reply to this email.
>
>Thank you,
>
>Windsurf Support Team

Peter (Windsurf):
>Hi Austin,
>
>I understand your concern about Cascade's file system access. You can control which files Cascade can access by using the .codeiumignore file at the root of your workspace. This file works similarly to .gitignore and will prevent Cascade from viewing, editing, or creating files in the specified paths.
>
>To restrict Cascade's access:
>
>1. Create a .codeiumignore file in your workspace root directory
>1. Add the file paths you want Cascade to ignore using the same format as .gitignore
>1. Cascade will automatically respect these restrictions and won't access the designated paths
>
>This gives you granular control over which files and directories Cascade can interact with in your workspace. ([read more](https://docs.windsurf.com/plugins/cascade/cascade-overview))
>
>Additionally, if you have files listed in your .gitignore that you want Cascade to access, you can manage this through Windsurf Settings in the "Cascade Gitignore Access" section. By default, this access is turned off. ([read more](https://docs.windsurf.com/windsurf/advanced))
>
>Best regards,
>
>Windsurf Support Team
>
>*This response was generated by AI, which our team uses in order to provide the fastest support experience possible. The AI, powered by our vendor, may sometimes make mistakes. Our human support engineers are available to assist as needed.*
>
>To add additional comments, reply to this email.
>
>Thank you,
>
>Windsurf Support Team

me:
>The model didn't grasp that the issue is non-workspace files.

Peter (Windsurf):
>Hi Austin,
>
>You can control which files Cascade can access by using the .codeiumignore file at the root of your workspace. This file works similarly to .gitignore and will prevent Cascade from viewing, editing, or creating files in the specified paths. ([read more](https://docs.windsurf.com/plugins/cascade/cascade-overview))
>
>Would you be able to provide more details about your specific concerns regarding non-workspace files? This would help me better address your security requirements.
>
>Best regards,
>
>Windsurf Support Team
>
>To add additional comments, reply to this email.
>
>Thank you,
>
>Windsurf Support Team

me:
>Details are at the link.

Peter (Windsurf):
>Hi Austin,
>
>You can control which files Cascade can access within your workspace by using the .codeiumignore file at the root of your workspace. This will prevent Cascade from viewing, editing, or creating files inside the paths you designate ([read more](https://docs.windsurf.com/plugins/cascade/cascade-overview)).
>
>Could you please share the specific concerns from the link you mentioned? This would help me provide more targeted assistance for your security requirements.
>
>Best regards,
>
>Windsurf Support Team
>
>To add additional comments, reply to this email.
>
>Thank you,
>
>Windsurf Support Team

me:
>Escalate to a human.

Peter (Windsurf):
>Hi Austin,
>
>I understand your concerns about Cascade's file system access. While we continuously work to improve our AI tools and incorporate user feedback into our product development process, I am here to help address your security concerns directly. What specific aspects of the file system access would you like me to address?
>
>A specialist will take a closer look into this and be in touch shortly. We appreciate your patience and understanding. For transparency, our specialist team is currently managing a high volume of requests, so please allow 1-2 business days for a thorough review.
>
>Best regards,
>
>Windsurf Support Team
>
>To add additional comments, reply to this email.
>
>Thank you,
>
>Windsurf Support Team

(no further emails)`

export default {
    ["coplay-xm"]: {
        title: "CoPlay XM",
        description: "I worked on a fleet management solution for gaming consoles that enables children's hospitals to provide games to patients.",
        markdown: CoPlayXM,
        project: {
            skills: ["TypeScript", "React", "Chakra", "NodeJS", "Firestore", "AWS Lambda", "AWS EventBridge"],
            links: [{ label: "Demo", href: "https://drive.google.com/file/d/1OISJlhkaFDcflL25iiv_ztTcZc22Y__7/edit" }, { label: "Hosted Site", href: "https://xm.coplay.io/sign-in" }]
        }
    },
    ["bookmark-city"]: {
        title: "Bookmark City",
        description: "I built a lightning-fast bookmark manager allowing anyone to create a web directory for all to use.",
        markdown: BookmarkCity,
        project: {
            skills: ["React", "Express", "PostgreSQL", "AWS EC2", "AWS RDS", "AWS Route 53", "AWS ACM", "axios"],
            links: [{ label: "Github Repo", href: "https://github.com/epistemancering/bookmarks" }, { label: "Demo", href: "https://vimeo.com/848881228" }, { label: "Hosted Site", href: "https://bookmark.city/" }]
        }
    },
    ["friendly-diffusion"]: {
        title: "Friendly Diffusion",
        description: "I built a tool that allows non-developers to generate high quality images with AI for free.",
        markdown: FriendlyDiffusion,
        project: {
            skills: ["Python", "PyTorch", "Transformers", "Pillow", "Colaboratory"],
            links: [{ label: "Hosted Site", href: "https://colab.research.google.com/drive/1LJZRLAX1yX_1hBLY2yYyIT-NWgY0c1us" }]
        }
    },
    asteroids: {
        title: "Asteroids",
        description: "I built a rigid body physics simulation that has lasers and explosions.",
        markdown: Asteroids,
        project: {
            skills: ["JavaScript"],
            links: [{ label: "Hosted Site", href: "https://epistemancer.neocities.org/collisionandbullets" }]
        }
    },
    expong: {
        title: "Expong",
        description: "I built a mobile game about catching a ball that gets faster as you do.",
        markdown: Expong,
        project: {
            skills: ["TypeScript", "React Native", "Expo"],
            links: [{ label: "Github Repo", href: "https://github.com/epistemancering/expong" }]
        }
    },
    portfolio: {
        title: "Portfolio",
        description: "I built the site you're using right now.",
        markdown: Portfolio,
        project: {
            skills: ["TypeScript", "Next.js", "Tailwind", "AWS EC2", "AWS Route 53", "AWS ACM"],
            links: [{ label: "Github Repo", href: "https://github.com/epistemancering/portfolio" }]
        }
    },
    "windsurf's-ai-assistant-has-full-file-system-access": {
        title: "Windsurf's AI assistant has full file system access",
        description: "Windsurf is glaringly insecure",
        openGraph: { images: "blog/data-center-shoggoth-infestation.jpg" },
        markdown: WindsurfsAIassistanthasfullfilesystemaccess,
        article: {
            published: "5/19/2025",
            image: "data-center-shoggoth-infestation",
            supplements: {
                "windsurf-support-emails": { title: "Windsurf support emails", description: "subject: Cascade has full file system access", markdown: Windsurfsupportemails }
            }
        }
    }
} as {
    [key: string]: {
        title: string,
        description: string,
        openGraph?: { images: string },
        markdown: string,
        project?: {
            skills: string[],
            links: { label: string, href: string }[]
        },
        article?: {
            published: string,
            image: string,
            supplements: {
                [key: string]: { title: string, description: string, markdown: string }
            }
        }
    }
}