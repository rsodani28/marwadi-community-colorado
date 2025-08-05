# Marwadi Community of Colorado

This is a [Next.js](https://nextjs.org) web application for the Marwadi Community of Colorado, built to connect our heritage and build our future.

## About the Community

The Marwadi Community of Colorado is a vibrant organization that brings together Marwadi families and individuals living in Colorado. Our mission is to preserve our cultural heritage while building strong community bonds and supporting each other's growth in our new home.

## Features

This web application includes:

- **Home Page** - Welcome page showcasing our community mission and values with photo galleries
- **Events** - Browse past community events with photo galleries and links
- **Members** - Directory of 26 community families with leadership structure
- **Sign Up** - Join our community with family membership ($200/year) via Google Form
- **Support Us** - Contribute through QR code donations for community events

## Tech Stack

This project is built with modern web technologies:

- [Next.js 15](https://nextjs.org) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Google Forms](https://forms.google.com) - Membership registration integration
- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image) - Optimized image loading

## Getting Started

First, install the dependencies:

```bash
npm install
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
│   ├── index.tsx    # Home page with community showcase
│   ├── events.tsx   # Past events with photo galleries
│   ├── members.tsx  # Member directory (26 families)
│   ├── signup.tsx   # Family membership registration
│   └── support.tsx  # QR code donation system
├── styles/          # Global styles and Tailwind CSS
└── utils/           # API utilities (simplified)
public/
├── PeoplePhotos/    # Community event photos
├── QRs/            # Payment QR codes
└── ...             # Community logos and images
```

## Key Features

✅ **Static Site Generation** - Fast loading and SEO optimized  
✅ **Google Forms Integration** - No backend required for registration  
✅ **QR Code Donations** - Simple mobile payment system  
✅ **Photo Galleries** - Community event showcases  
✅ **Mobile Responsive** - Works perfectly on all devices  
✅ **TypeScript** - Type-safe development experience  

## Environment Variables

This application requires no environment variables for basic functionality. It's designed as a static site that works out of the box.

## Contributing

We welcome contributions from community members! Whether you're a developer wanting to add features, a designer with UI/UX improvements, or someone with ideas for community engagement, please get in touch.

## Contact

For questions about the website or the community, please contact us through our community channels or at our events.

## Deployment

This application is optimized for deployment on:
- **[Vercel](https://vercel.com)** (Recommended) - Zero configuration deployment
- **[Netlify](https://netlify.com)** - JAMstack deployment
- **Static hosting** - Can be exported as static files

See `DEPLOYMENT.md` for detailed deployment instructions.

## Community Statistics

- 👨‍👩‍👧‍👦 **26 Families** - Active community members
- 🎉 **4+ Annual Events** - Cultural celebrations and gatherings  
- 🏠 **2+ Years Strong** - Growing community in Colorado
- 💰 **$200/year** - Family membership supporting community activities
