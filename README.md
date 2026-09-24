# React + Vite

## Live contact-form backend on Vercel

The contact form is deployed as a Vercel Serverless Function at `POST /api/enquiries`.
It stores enquiries in MongoDB and shares the same domain as the website, so no production API URL is needed.

Before deploying, set the following environment variable in **Vercel → Project → Settings → Environment Variables** for Production (and Preview if desired):

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
```

Set the Vercel project's Root Directory to `saha-wealth-app`. Then deploy from the connected GitHub repository or run `vercel --prod` from this directory. After deployment, confirm the backend is online at `https://your-domain.vercel.app/api/health` and submit a test enquiry from the Contact page.

For local Vite development, the form continues to call `http://localhost:5000`. To point it to another API locally, put `VITE_API_BASE_URL=https://your-api.example.com` in a local `.env` file.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
