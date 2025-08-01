# 🚀 GitHub Pages Deployment Instructions

Your portfolio is now ready for GitHub Pages! Follow these steps to deploy:

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Repository settings:
   - **Repository name**: `portfolio`
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push the Fixed Code

First, push the latest fixes to your repository:

```bash
git push origin main
```

## Step 3: Connect Your Local Repository (if not done already)

If you haven't connected to GitHub yet, run:

```bash
git remote add origin https://github.com/AanshOjha/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository: `https://github.com/AanshOjha/portfolio`
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Step 5: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (green checkmark, ~2-5 minutes)
4. Your site will be live at: `https://AanshOjha.github.io/portfolio/`

## 🎉 Your Portfolio Will Be Live!

Once deployed, your portfolio will be automatically updated whenever you push changes to the main branch.

## Next Steps After Deployment

1. **Update content** in `src/lib/data.ts` with your real information
2. **Add your resume** to the `static` folder as `resume.pdf`
3. **Add project images** to showcase your work
4. **Customize colors** in `tailwind.config.js` if desired

## Troubleshooting

- **404 Error**: Wait a few minutes after first deployment
- **Styling Issues**: Check if all CSS is loading properly
- **Build Failures**: Check the Actions tab for error details

Your portfolio is production-ready! 🚀
