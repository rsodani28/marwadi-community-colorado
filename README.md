# Marwadi Community of Colorado

This is a [T3 Stack](https://create.t3.gg/) web application for the Marwadi Community of Colorado, built to connect our heritage and build our future.

## About the Community

The Marwadi Community of Colorado is a vibrant organization that brings together Marwadi families and individuals living in Colorado. Our mission is to preserve our cultural heritage while building strong community bonds and supporting each other's growth in our new home.

## Features

This web application includes:

- **Home Page** - Welcome page showcasing our community mission and values
- **Events** - Browse and register for community events, festivals, and activities
- **Members** - Connect with fellow community members and build your network
- **Sign Up** - Join our community with different membership options
- **Support Us** - Contribute through donations or volunteer your time

## Tech Stack

This project is built with the T3 Stack:

- [Next.js](https://nextjs.org) - React framework for production
- [NextAuth.js](https://next-auth.js.org) - Authentication library
- [Prisma](https://prisma.io) - Database ORM
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [tRPC](https://trpc.io) - End-to-end typesafe APIs

## Getting Started

First, install the dependencies:

```bash
npm install
```

Set up your environment variables by copying `.env.example` to `.env` and filling in the required values:

```bash
cp .env.example .env
```

Set up the database:

```bash
npm run db:push
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── pages/           # Page components
│   ├── index.tsx    # Home page
│   ├── events.tsx   # Events listing and details
│   ├── members.tsx  # Member directory
│   ├── signup.tsx   # Membership registration
│   └── support.tsx  # Donations and volunteering
├── server/          # tRPC API routes
├── styles/          # Global styles
└── utils/           # Utility functions
```

## Contributing

We welcome contributions from community members! Whether you're a developer wanting to add features, a designer with UI/UX improvements, or someone with ideas for community engagement, please get in touch.

## Contact

For questions about the website or the community, please contact us through our community channels or at our events.

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)

## Deployment

This application can be deployed on [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify), or using [Docker](https://create.t3.gg/en/deployment/docker).
