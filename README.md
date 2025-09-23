# Insights-Christian-Counseling

**Insights Christian Counseling** is a responsive, accessible, and aesthetically warm web application designed to introduce potential clients to the counseling practice, share information about services, and provide helpful resources. Built with modern front-end technologies and accessibility best practices, the site creates a welcoming and trustworthy user experience for those seeking care.

## Tech Stack

- **Frontend Framework**: React  
- **Styling & UI**: Material UI (MUI), custom theme  
- **Routing**: React Router DOM  
- **State Management**: React Hooks  
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support  
- **Content Management**: Sanity.io
- **Hosting**: Vercel  

## Project Structure

```
root/
│
├── public/                      # Static assets (e.g. index.html, favicon)
├── src/
│   ├── assets/                  # Images and logos
│   ├── components/              # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/                    # Static data (books, therapists, resources)
│   ├── pages/                   # Route-level views (Home, About, Blog, etc.)
│   ├── styles/                  # Global theme (theme.js) and CSS (App.css)
│   ├── routes.js                # Defines client-side routes using React Router
│   ├── App.js                   # App layout wrapper with ThemeProvider and routing
│   └── index.js                 # Entry point: renders App into the DOM
│
├── .gitignore                   # Files/folders Git should ignore
├── README.md                    # Project overview and setup instructions
└── package.json                 # Project metadata and dependencies
```

## Features

- Fully responsive layout for mobile, tablet, and desktop  
- Smooth in-page scrolling and route transitions  
- Reusable, semantic components (`TherapistCard`, `SpecialtyCard`, `ResourceList`, etc.)  
- ARIA attributes, alt text, and proper keyboard focus handling for accessibility  
- Clear visual hierarchy with a custom color palette and typography theme  
- Embedded secure contact form via Hushmail  
- Blog integration using Sanity.io (WIP)  
- Modular, readable code with detailed inline comments for clarity  

## Future Plans

- Finalize Sanity.io integration for blog content  
- SEO improvements and metadata  
- Deploy site to Vercel  

---

## Setup Instructions

### Prerequisites

- `Node.js` (v18+ recommended)  
- `npm` (v9+ recommended)  
- `Git`  
- A terminal or command-line interface  

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/insights-christian-counseling.git
cd insights-christian-counseling
```

### 2. Install Dependencies

```bash
npm install
```

> Installs all frontend packages defined in `package.json`.

### 3. Start the Development Server

```bash
npm start
```

> Launches the app locally at `http://localhost:3000/`.

### 4. Environment Variables (Optional)

If you integrate third-party services (e.g., Sanity.io, Hushmail), create a `.env` file in the root directory and define your variables:

```bash
REACT_APP_SANITY_PROJECT_ID=your_project_id
REACT_APP_HUSHMAIL_FORM_URL=https://your-hushmail-form-link.com
```

---

## Deployment

This project is configured to be easily deployed on [Vercel](https://vercel.com/), a platform for frontend hosting and serverless functions.

### 1. Deploy with the Vercel CLI (Optional)

If you prefer using the CLI:

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your GitHub repo and project.

### 2. Or Connect via the Vercel Dashboard

1. Go to [vercel.com](https://vercel.com/) and log in or create an account.
2. Click **"Add New Project"** and import your GitHub repository.
3. Make sure the **Framework Preset** is set to **Create React App** (or leave it blank if you're using your own setup).
4. Set any required environment variables under the **Environment Variables** tab:
   - `REACT_APP_SANITY_PROJECT_ID`
   - `REACT_APP_HUSHMAIL_FORM_URL`

5. Click **Deploy**.

### 3. Automatic Deployment

Once connected to Vercel, every `push` to your main branch (or any selected branch) will trigger a new deployment automatically.

> The site will be hosted on a custom Vercel domain (e.g., `your-project-name.vercel.app`), and you can configure a custom domain in the Vercel dashboard.

---

## Deployment Notes 
> ⚠️ This project does not store or process PHI (Protected Health Information). All client communication is routed through Hushmail, a HIPAA-compliant service, and no sensitive data is handled by this React app or the deployment platform (e.g., Vercel).

## Additional Information

### 🔒 Privacy & Security
This site is intended for informational purposes only and does not collect, transmit, or store Protected Health Information (PHI). Any communication containing sensitive health data should be conducted through secure, HIPAA-compliant platforms such as the client portal or Hushmail form embedded on the site.

### ✅ Accessibility Checklist
The project includes the following accessibility features:
- ARIA labels for interactive elements
- Descriptive `alt` text for all meaningful images
- Semantic HTML and headings
- Keyboard navigation support
- High color contrast and visible focus styles
- Smooth scrolling with scroll anchoring support

### 🚫 Contributions
This is a private project and is not currently accepting external contributions.

### 🌐 Deployment
The live website will be hosted at:  
[https://insightschristiancounseling.com](https://insightschristiancounseling.com)
