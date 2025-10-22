This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1) Ensure that Next.js is installed locally inside of project. If so, `next` and some version number will show up under `dependencies` within `package.json` file.


2) If Next.js is not installed locally, add `./node_modules/.bin` to your PATH by running the following commands:
For zsh (default on macOS):
`nano ~/.zshrc`

Add the PATH to the file by scrolling to the bottom, and adding the following line:
`export PATH="./node_modules/.bin:$PATH`

Exit `nano` by pressing `Ctrl + X`, then `Y` to confirm, and `Enter` to save.

Apply the changes.
For zsh: `source ~/.zshrc`


3) Run the development server:
```bash
npm run dev
# or
next dev --turbopack
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
