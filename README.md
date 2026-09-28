# Niv AI Website

Professional website for Niv AI - Enterprise AI Solutions & Products

## Overview

This is a modern, responsive website built with HTML5 and CSS3, designed to showcase AI services and products. The design is inspired by leading enterprise tech companies like Gigster.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading performance
- 🎨 Professional color scheme and typography
- 🔍 SEO-optimized
- ♿ Accessible design standards

## Sections

1. **Hero Section** - Compelling headline and CTA
2. **Solutions** - 6 AI solution offerings with descriptions
3. **Services** - 3 engagement models (Fully Managed, Dedicated Team, Augmented Staff)
4. **Why Choose Us** - 6 key differentiators
5. **Testimonials** - Social proof from clients
6. **CTA** - Call-to-action for getting started
7. **Footer** - Comprehensive navigation and links

## Deployment

### Vercel Deployment

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Niv AI website"
git branch -M main
git remote add origin https://github.com/yourusername/nivailabs.git
git push -u origin main
```

2. Connect your GitHub repo to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the project root
   - Click "Deploy"

3. Configure custom domain:
   - In Vercel dashboard, go to Settings → Domains
   - Add `nivailabs.online`
   - Follow the DNS configuration instructions in Namecheap
   - Wait for DNS propagation (can take 24-48 hours)

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Server will run on http://localhost:3000
```

## Customization

### Colors
Edit the CSS variables in `index.html`:
```css
:root {
    --primary-blue: #0066ff;  /* Main brand color */
    --dark-gray: #1a1a1a;
    --light-gray: #f5f5f5;
    --border-gray: #e0e0e0;
}
```

### Content
- Update hero section text and buttons
- Modify solution cards and descriptions
- Add your testimonials
- Update contact information in footer
- Replace social media links

### Email Contact
To enable email functionality, you can integrate:
- EmailJS
- SendGrid
- Mailgun
- Firebase

## File Structure

```
nivailabs/
├── index.html          # Main website file
├── server.js           # Node.js server for hosting
├── package.json        # Node.js dependencies
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- Zero external dependencies
- Single page load
- Optimized images
- Fast CSS and JavaScript

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Configure custom domain (nivailabs.online)
3. 📧 Add email form integration
4. 📝 Add blog section
5. 🎥 Add video demonstrations
6. 📊 Integrate analytics (Google Analytics, Mixpanel)
7. 💬 Add live chat support

## Support

For questions or customizations, contact: hello@nivailabs.online

## License

© 2026 Niv AI. All rights reserved.
