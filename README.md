# Personal portfolio
This repository contains the souce code for my portfolio website where I list 
my recent projects, techstack, development philosophy, workflow and educational milestones.

## Live demo
This portfolio is publicy accessible at roshanbansie.nl and is deployed using Vercel. 
It automatically updates through a CI/CD pipeline between Vercel and Github whenever changes are pushed to the main branch.

## Purpose
The purpose of this website is to showcase my current progression in fullstack (web)development 
by documenting reccent projects. Also, this website shows my identity as developer by explaining my workflow, 
what technologies I use and what paradigms are important to me.

## Featuers
This websites includes the following featuers:
- Projects documentation
- Techstack
- About me section
  - Development philosophy
  - Workflow
  - Educational milestones
- Contact form
- Dark/light mode toggle
- Resume download
- Link to my Github profile

## Techstack
For this website I've used the following technologies:

### Frontend
- Next.js
- Typescript
- CSs

### Backend
- Next.js' API router which includes Node.js

### Deployment
- Vercel

### Email service
- Resend

## Website structure
This website is organized into several main pages:
- Home page
  - Hero
  - Projects preview
  - About
    - Techstack
    - Development philosphy
    - Workflow
    - Educational milestones
  - Contact form
- Projects
  - List of clickable project cards
- Project page
  - Project documentation

## Design decisions

### UI
The design focuses on a modern dark-themed minimalistic design.
I chose for a dark-theme color palette because it makes the website look professional 
and it makes the website's elements (i.e. the images, paragraphs etc.) stand out more. 
The minimalistic design choice enlarges the UX by making the navigation elements and 
action buttons more visible due to absence of non-functional decorative elements.

### Accessibility
To aid screen readers, all images are provided with alternative text, the contact form input fields 
include semantic names and labels and all links contain aria-labels.
Also, this website includes a light mode toggle for people who may find the dark-theme hard to read.
On top of that, the contact form includes meaningful error messages to aid the user in filling in the form.

### Responsiveness
This webiste is responsive for mobile view and for wide-desktop views.

## Performance optimizations

### Images
All images are converted to .webp by default Next.js and while the images are loaded, 
a skeleton loader is displayed to hint that an image is being fetched.

### Prefetching
Each link on this website is implemented with Next.js' Link component. 
These Link components prefetch the resources by default. 
This means that Next.js only fetches the code for the current route and in the background 
it requests the code of the other routes and puts these files in the browser's cache. 
This method reduces the initial page loads.

## SEO considerations
To improve SEO, all layout and page files are server components so Google and 
other search engines can see how this website is organized (i.e. the hirarchy of all the pages). 
On top of that, I've provided a meaningful title and description in the meta tags of the HTML head. 
At last, this websites contains informative images and contains sufficient text to lead 
the user in understanding the contents of this website.

## Getting started

### Dependencies
See the package.json file to view the libraries that have been installed to make this website funcion accordingly.
To install all dependencies, run:
npm install

### Run development
npm run dev

### Build code
npm run build

## Environment variables
| Variable | Description |
| RESEND_API_KEY | API key for Resend to authenticate myself in order to send emails
| DOMAIN | Domain on which this website is being hosted |
| EMAIL | Mailbox to which emails from the contact form need to be send |

## Future improvements
- Add more accessibility options like:
  - Toggle bigger text
  - Toggle paragraph colors (default is grey but I can toggle to white for more visibility if preferred).
  - Toggle dyslectic-proof font

## Author
Created by Roshan Bansie, a BSc Computer Science student at the University of Amsterdam focused on
building modern-looking minimalistic and accessible full-stack webapplications that solve modern-day problems.