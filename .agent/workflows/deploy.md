---
description: How to deploy the Travel Agency platform to the web (Vercel)
---

### 1. Push to GitHub
If you haven't already, initialize a git repository and push your code to GitHub:
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.

### 3. Set Environment Variables
In the Vercel dashboard, go to **Settings** -> **Environment Variables** and add:
- `NEXTAUTH_URL`: Your production URL (e.g., `https://your-site.vercel.app`)
- `NEXTAUTH_SECRET`: A long random string
- `GOOGLE_CLIENT_ID`: From Google Cloud Console
- `GOOGLE_CLIENT_SECRET`: From Google Cloud Console
- `SENDGRID_API_KEY`: For contact form emails
- `CONTACT_RECEIVER_EMAIL`: Your business email

### 4. Update Google Redirect URI
In Google Cloud Console, add your live URL to authorized redirect URIs:
`https://your-site.vercel.app/api/auth/callback/google`

### // turbo
### 5. Production Build Test
Run this locally to ensure there are no errors before going live:
```bash
npm run build
```
