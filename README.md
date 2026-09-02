# Bichat-Beaujon Young Researchers website

A lightweight, GDPR-compliant conference website for abstract submissions built with static HTML, CSS, and no backend dependencies.

## Project Structure

```
youngresearchersparisnord/
├── index.html                      # Home page
├── css/
│   └── style.css                   # Main stylesheet
├── js/
│   ├── header.js                   # Header style and logic
│   └── style.css                   # Footer style and logic
├── pages/
│   ├── privacy.html                # Privacy Policy (GDPR)
│   ├── terms.html                  # Terms of Use
│   ├── about.html                  # About the association
│   ├── team.html                   # Presentation of the team (Very WIP)
│   ├── schedule.html               # BYRD schedule (WIP)
│   ├── register.html               # BYRD register form  
│   ├── register-confirmation.html  # BYRD register confirmation  
│   ├── call-for-papers.html        # BYRD call for papers
│   ├── submit-abstract.html        # BYRD abstract submission form
│   └── submit-confirmation.html    # BYRD submission confirmation
├── images/
│   └── favicon/                    # Browser tab icon
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       ├── android-chrome-192x192.png
│       ├── android-chrome-512x512.png
│       └── site.webmanifest
└── README.md                       # This file
```

## Quick Start

### 1. Forms with Web3Forms

1. Visit [web3forms.com](https://web3forms.com/)
2. Enter the association's email and go through e-mail authentification
3. Access forms, _et voilà!_

### 2. Test Locally

1. Open `index.html` in your web browser
2. Navigate through all pages to see your edits in local before pushing to GitHub (which automatically deploys website)

### 3. Contribute and update with GitHub GitHub

#### Option A: Using Git Command Line

```bash
git clone      # Only when contributing for the first time
git status     # See whether you're ahead or behind of the remote version
git commit -a -m "Initial commit" # Commit changes to all existing files
git push
```

#### Option B: Using GitHub Web Interface (Dirtier, not recommended)

Modify files directly on https://github.com/YR-PN/youngresearchersparisnord and commit changes.

#### Option C: Ask someone to edit for you

If something is buggy or seems wrong on the website, see list of contributors and contact the last one. 


## Troubleshooting

### Form Submissions Not Working

1. Verify Web3Forms access key is correct in `submit-abstract.html`
2. Check that your email is verified in Web3Forms dashboard
3. Check spam folder for confirmation emails
4. Test at [web3forms.com/test](https://web3forms.com/test)

### Navigation Links Broken

1. Check file paths in navigation (pages/ directory)
2. Verify `.html` file names match link href values
3. For custom domains, ensure paths are correct

### Styling Issues

1. Clear browser cache (Ctrl+Shift+Delete)
2. Verify `css/style.css` is in correct location
3. Check browser console for CSS errors

## Useful Resources

- **Web3Forms Documentation**: https://web3forms.com/docs
- **GitHub Pages Help**: https://docs.github.com/en/pages
- **GDPR Compliance**: https://gdpr-info.eu/
- **HTML5 Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML

## Version History

- **v1.0** (June 2026) - Initial release

---

**Last Updated**: June 2026
