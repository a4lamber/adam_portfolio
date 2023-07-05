# Motivation

Personal portfolio website to showcase my projects and advertise my freelancer work.
# Deployment

1. Install the `gh-pages`  package
```bash
npm install gh-pages --save-dev
```
2. In the `package.json` file, add the following line to the `scripts` section
```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```
3. In the `package.json` file, add the following line to the `homepage` section, where `<github_acocunt>` is the name of the github account and `<repo_name>` is the name of the repository
```json
"homepage": "https://<github_acocunt>.github.io/<repo_name>/",
```
4. In the `vite.config.js` file, add the following line to the `base` section, where `<repo_name>` is the name of the repository
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/<repo_name>/"
})
```
5. Go back to terminal and run
```bash
npm run deploy
```

Now, you have deployed this website and you could check it under your repo's `Settings -> Pages`.




# Reference
- [shiba 3d model, i wish to use it but it's too taxing to browser](https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c)

