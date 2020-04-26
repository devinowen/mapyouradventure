## Map Your Adventure Custom Map Builder

**If you can adventure it, we can map it.**

## Development

First, ensure that you have a `.env.development.local` file in the root directory with the following credentials:

```
EMAIL_NAME="<your_email@example.com>"
EMAIL_PASSWORD="<your_email_password>"
MAPS_API_KEY="<your_maps_api_key>"
```

Install dependencies (if running for the first time), and start the development server:

```bash
$ yarn
$ yarn dev
```
*If using `npm` instead of `yarn`, run `npm run dev`*

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Merge your changes into `master` and push to GitHub (or merge a PR that's managed in GitHub).

That's it! Vercel will pick up any changes to `master` on GitHub and package and release a new version automatically.
