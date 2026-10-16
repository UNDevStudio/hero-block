# Hero Block

A responsive custom Gutenberg Hero Block for WordPress websites.

## Features

- Custom hero background image selection.
- Editable hero title and subtitle.
- Custom call-to-action button and URL.
- Dark, Light, and Outline style variations.
- Responsive design for desktop, tablet, and mobile.
- Editor preview and editing toggle.
- Accessible keyboard focus states.
- Optimized production build using WordPress Scripts.

## Installation

1. Copy the `hero-block` folder into the WordPress `wp-content/plugins/` directory.
2. Open a terminal in the plugin directory.
3. Install the required dependencies:

```bash
npm install
```

4. Build the Gutenberg block:

```bash
npm run build
```

5. Activate **Hero Block** from the WordPress Plugins page.
6. Open the Gutenberg editor and insert the **Hero Block**.

## Usage

After adding the Hero Block to a page:

- Select a background image.
- Edit the hero title.
- Add or edit the subtitle.
- Enter button text.
- Add a button URL.
- Choose a visual style from the block Styles panel.

### Available Styles

- **Dark** — dark overlay with light text.
- **Light** — light background with dark text.
- **Outline** — light background with a visible border and dark text.

## Development

Start the development build with:

```bash
npm start
```

Create a production build with:

```bash
npm run build
```

## Technologies

- WordPress Gutenberg
- React
- JavaScript
- CSS
- `@wordpress/scripts`

## Project Structure

```text
hero-block/
├── build/
├── src/
│   ├── block.json
│   ├── index.js
│   └── style.css
├── hero-block.php
├── package.json
├── package-lock.json
└── README.md
```

## License

This project was created as part of a WordPress Gutenberg development internship project.