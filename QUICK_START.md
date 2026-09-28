# Niv AI Website - Quick Start Guide

## What You Have

A professional, modern website for Niv AI with:
- ✨ Responsive design that works on all devices
- 🎨 Modern blue/gray color scheme (inspired by Gigster)
- 📱 Mobile-friendly interface
- ⚡ Fast loading performance
- 🚀 Ready for Vercel deployment

## Files Included

| File | Purpose |
|------|---------|
| `index.html` | Main website (22KB, self-contained) |
| `server.js` | Node.js server for hosting |
| `package.json` | Dependencies configuration |
| `vercel.json` | Vercel deployment config |
| `README.md` | Detailed documentation |
| `DEPLOYMENT_GUIDE.md` | Step-by-step deployment instructions |

## Deploy in 3 Steps

### Step 1: Push to GitHub (5 minutes)

```bash
cd C:\Users\admin\Documents\GitHub\nivailabs
git init
git add .
git commit -m "Initial commit: Niv AI website"
```

Then create a repo at [github.com/new](https://github.com/new) and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nivailabs.git
git push -u origin main
```

### Step 2: Connect to Vercel (2 minutes)

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

**Your site is now live at:** `https://nivailabs-[random].vercel.app`

### Step 3: Add Custom Domain (5 minutes)

1. In Vercel, go to Settings → Domains
2. Add `nivailabs.online`
3. Copy the DNS records Vercel provides
4. Log in to Namecheap and add those DNS records
5. Wait 24-48 hours for DNS to propagate

**Your site will be at:** `https://nivailabs.online`

## Customize the Website

### Edit Content

Open `index.html` and find:

```html
<!-- Hero Section -->
<section class="hero">
  <h1>Transform Your Business with AI</h1>
  <p>Your tagline here...</p>
```

### Change Colors

Find the CSS variables:

```css
:root {
    --primary-blue: #0066ff;    /* Main brand color */
    --dark-gray: #1a1a1a;       /* Dark text */
    --light-gray: #f5f5f5;      /* Backgrounds */
}
```

### Update Contact Info

Search for `hello@nivailabs.online` and replace with your email.

### Add Your Team

Find the testimonials section and add real client quotes.

## Website Sections

1. **Header** - Navigation menu with "Get Started" button
2. **Hero** - Main headline "Transform Your Business with AI"
3. **Solutions** - 6 AI service offerings
4. **Services** - 3 engagement models
5. **Why Us** - 6 competitive advantages
6. **Testimonials** - Client success stories
7. **CTA** - Call-to-action section
8. **Footer** - Links and social media

## Key Features

- ✅ No external dependencies (pure HTML/CSS/JS)
- ✅ Mobile responsive (works on phone, tablet, desktop)
- ✅ Fast loading (single 22KB file)
- ✅ SEO optimized
- ✅ Professional design
- ✅ Smooth animations and transitions
- ✅ Dark footer with social links

## After Deployment

### Add Email Form

To capture leads, integrate one of these:
- [Formspree](https://formspree.io/) - Free tier available
- [EmailJS](https://www.emailjs.com/) - No backend needed
- [SendGrid](https://sendgrid.com/) - Professional option

### Add Analytics

Track visitors with Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add this to `<head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Monitor Performance

In Vercel dashboard:
- **Deployments** - See all version history
- **Analytics** - Track visitors and page views
- **Logs** - Check for any errors

## Next Features to Add

- 📝 Blog section with articles
- 📧 Contact form with email notifications
- 🎬 Video demonstrations
- 📊 Case study pages
- 👥 Team member profiles
- 🔍 SEO sitemap
- 💬 Live chat support

## Resources

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Namecheap Dashboard**: https://www.namecheap.com/myaccount/
- **Domain**: nivailabs.online
- **Email**: hello@nivailabs.online

## Troubleshooting

**Domain not working after 24 hours?**
- Check DNS propagation at [whatsmydns.net](https://whatsmydns.net)
- Verify records in Namecheap match Vercel settings
- Check browser cache (Ctrl+Shift+Delete)

**Deployment failed?**
- Check vercel.json syntax (JSON validator)
- Ensure all files are committed to git
- Check Vercel deployment logs

**Want to make changes?**
- Edit `index.html`
- Commit: `git add . && git commit -m "Your message"`
- Push: `git push`
- Vercel automatically redeploys!

---

**Your website is production-ready!** 🚀

For detailed deployment steps, see: `DEPLOYMENT_GUIDE.md`
