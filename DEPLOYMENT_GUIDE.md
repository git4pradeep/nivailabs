# Vercel Deployment Guide for Niv AI Website

Complete step-by-step guide to deploy your website to Vercel with your custom domain.

## Prerequisites

- GitHub account (free at github.com)
- Vercel account (free at vercel.com)
- Domain registered at Namecheap (nivailabs.online)
- Git installed on your computer

## Step 1: Prepare Your Code

### 1.1 Initialize Git Repository

Open PowerShell/Command Prompt in your project directory and run:

```powershell
git init
git config user.name "Your Name"
git config user.email "pradeep.kothakota@gmail.com"
git add .
git commit -m "Initial commit: Niv AI website"
git branch -M main
```

### 1.2 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `nivailabs`
3. Description: "Niv AI - Enterprise AI Solutions & Products"
4. Make it Public
5. Click "Create repository"

### 1.3 Push to GitHub

After creating the repository, run:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/nivailabs.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Click "Import Git Repository"
5. Search for "nivailabs" and select your repository
6. Click "Import"

### 2.2 Configure Project

On the "Configure Project" page:
- **Project Name**: `nivailabs`
- **Framework Preset**: Other (Node.js)
- **Root Directory**: ./
- Leave other settings as default

Click "Deploy"

### 2.3 Wait for Deployment

Vercel will automatically deploy your site. Wait for the green checkmark showing "Success!" This usually takes 1-2 minutes.

You'll get a temporary URL like: `https://nivailabs-xyz123.vercel.app`

## Step 3: Connect Custom Domain

### 3.1 In Vercel Dashboard

1. Go to your project in Vercel
2. Click on "Settings" → "Domains"
3. Enter your domain: `nivailabs.online`
4. Click "Add"

### 3.2 Copy DNS Records

Vercel will show you the DNS records you need to add. You'll see something like:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.165
```

Or it might show:
```
Type: NS records pointing to Vercel's nameservers
```

Note: The exact records depend on your setup.

### 3.3 Update Namecheap DNS

1. Log in to [namecheap.com](https://namecheap.com)
2. Go to "Dashboard" → "Domain List"
3. Click the "Manage" button next to `nivailabs.online`
4. Go to the "Advanced DNS" tab
5. Delete existing DNS records (except for any email-related ones)
6. Add the DNS records from Vercel:

**Option A: If Vercel shows CNAME records**
- Add: `www CNAME cname.vercel-dns.com`
- Add: `@ A 76.76.19.165`

**Option B: If Vercel shows Nameserver records**
- Go to "Nameservers" section
- Change nameservers to what Vercel provides

7. Click "Save All Changes"

### 3.4 Wait for DNS Propagation

DNS changes can take 24-48 hours to propagate. You can check status at:
- [whatsmydns.net](https://www.whatsmydns.net)

During this time:
- Vercel URL works immediately: `nivailabs-xyz.vercel.app`
- Custom domain works after DNS propagates

### 3.5 Enable SSL Certificate

Once DNS is set up:
1. Return to Vercel project settings
2. In Domains, you should see ✓ next to your domain
3. Vercel automatically creates a free SSL certificate
4. Make sure both `nivailabs.online` and `www.nivailabs.online` are set up

## Step 4: Automatic Deployments

Your site is now set up with automatic deployments:
- Any push to the `main` branch will automatically deploy
- You'll see deployment progress in Vercel dashboard
- Previous versions are kept for rollback if needed

## Step 5: Monitor Your Site

### View Logs
- In Vercel dashboard, click "Deployments"
- Click any deployment to see logs and build information

### Check Performance
- Vercel provides analytics
- Check "Analytics" tab for visitor data
- Monitor build times and performance

## Updating Your Website

### Make Local Changes

1. Edit `index.html` with your content
2. Commit and push:

```powershell
git add index.html
git commit -m "Update homepage content"
git push
```

3. Vercel automatically deploys within seconds

### Common Updates

**Update Hero Text**: Edit the `<section class="hero">` in `index.html`

**Update Solutions**: Edit the `<section id="solutions">` cards

**Change Colors**: Edit CSS variables at the top of `index.html`:
```css
:root {
    --primary-blue: #0066ff;  /* Change this */
}
```

**Update Contact Email**: Search for `hello@nivailabs.online` and update

## Troubleshooting

### Domain Not Working

1. **Check DNS Propagation**: Use [whatsmydns.net](https://www.whatsmydns.net)
2. **Wait 24-48 hours**: DNS changes take time
3. **Verify Records**: Double-check Namecheap DNS settings match Vercel's requirements
4. **Clear Browser Cache**: Press Ctrl+Shift+Delete and clear cache

### SSL Certificate Issues

- Vercel automatically handles SSL
- If you see certificate warnings, wait 24 hours for propagation
- Go to Vercel project → Settings → Domains to verify

### Deployment Failed

1. Check the deployment logs in Vercel
2. Ensure `package.json` and `server.js` are in root directory
3. Common issues:
   - Missing `package.json`
   - Typos in `vercel.json`
   - Invalid JSON syntax

## Next Steps

1. **Monitor Analytics**: Set up Google Analytics for visitor tracking
2. **Add Email Form**: Integrate EmailJS or Formspree for contact forms
3. **Add Blog**: Create a blog section with articles
4. **SEO**: Optimize meta tags and add sitemap.xml
5. **Performance**: Use Vercel Analytics to monitor speed

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Domain Help**: https://www.namecheap.com/support/
- **DNS Guide**: https://www.namecheap.com/support/knowledgebase/article.aspx/9442/46/how-do-i-set-up-host-records-for-a-domain

## Quick Reference

| What | Where |
|------|-------|
| GitHub Repo | https://github.com/YOUR_USERNAME/nivailabs |
| Vercel Dashboard | https://vercel.com/dashboard |
| Vercel Project Settings | https://vercel.com/YOUR_USERNAME/nivailabs/settings |
| Namecheap Dashboard | https://www.namecheap.com/myaccount/domain-list |
| Your Website | https://nivailabs.online |

## Estimated Timeline

- **Immediate**: Deploy to Vercel (1-2 minutes)
- **1-48 hours**: Custom domain works (after DNS propagation)
- **Ongoing**: Automatic deployments on every git push

---

**Congratulations!** Your Niv AI website is now live! 🎉
