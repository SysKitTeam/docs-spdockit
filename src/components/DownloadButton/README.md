# DownloadButton Component

A customizable download button component for Docusaurus that displays file information with icons, size, filename, and type.

## Features

- **File Type Icons**: Automatically selects appropriate outline SVG icons based on file type
- **File Information**: Displays filename, file size, and file type
- **Optional Description**: Support for additional description text
- **Responsive Design**: Works great on both desktop and mobile devices
- **Theme Support**: Adapts to Docusaurus light/dark themes
- **Hover Effects**: Smooth animations and visual feedback
- **Accessibility**: Proper semantic HTML and keyboard navigation

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `href` | string | ✅ | The download URL or file path |
| `filename` | string | ✅ | Display name of the file |
| `fileSize` | string | ✅ | Human-readable file size (e.g., "2.3 KB", "1.5 MB") |
| `fileType` | string | ✅ | File type/extension for icon selection and badge display |
| `description` | string | ❌ | Optional description text shown below filename |

## Usage

### Basic Usage

```mdx
import DownloadButton from '@site/src/components/DownloadButton';

<DownloadButton 
  href="/bp/downloads/example.zip"
  filename="example.zip"
  fileSize="2.3 KB"
  fileType="ZIP"
/>
```

### With Description

```mdx
<DownloadButton 
  href="/bp/downloads/get-bpapppoolgroupmembership.zip"
  filename="get-bpapppoolgroupmembership.zip"
  fileSize="2.3 KB"
  fileType="ZIP"
  description="PowerShell script to check application pool group membership"
/>
```

## Supported File Types & Icons

The component automatically selects appropriate icons based on the file type:

| File Types | Icon | Description |
|------------|------|-------------|
| `zip`, `7z` | Archive icon | Compressed archive files |
| `pdf` | Document icon | PDF documents |
| `doc`, `docx` | Document with lines | Microsoft Word documents |
| `xls`, `xlsx` | Document with table | Microsoft Excel spreadsheets |
| `ppt`, `pptx` | Document with circle | Microsoft PowerPoint presentations |
| `ps1`, `powershell` | Terminal icon | PowerShell scripts |
| Others | Generic document | Default for unrecognized file types |

## Examples

### PowerShell Scripts

```mdx
<DownloadButton 
  href="/bp/downloads/set-bploopbackcheckconfig.zip"
  filename="set-bploopbackcheckconfig.zip"
  fileSize="1.5 KB"
  fileType="ZIP"
  description="PowerShell script to configure loopback check settings"
/>

<DownloadButton 
  href="/scripts/get-sharepoint-status.ps1"
  filename="get-sharepoint-status.ps1"
  fileSize="3.2 KB"
  fileType="PowerShell"
  description="Check SharePoint farm health status"
/>
```

### Documentation Files

```mdx
<DownloadButton 
  href="/bp/downloads/installation-guide.pdf"
  filename="installation-guide.pdf"
  fileSize="1.2 MB"
  fileType="PDF"
  description="Complete installation and configuration guide"
/>

<DownloadButton 
  href="/bp/downloads/configuration-template.xlsx"
  filename="configuration-template.xlsx"
  fileSize="45 KB"
  fileType="XLSX"
  description="SharePoint configuration planning template"
/>
```

## File Structure

```
src/components/DownloadButton/
├── index.tsx           # Main component file
├── styles.module.css   # Component styles
└── README.md          # This documentation
```

## Styling

The component uses CSS modules for styling and supports:

- **CSS Custom Properties**: Uses Docusaurus theme variables for consistent theming
- **Dark Mode**: Automatically adapts to dark/light theme changes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Hover States**: Smooth transitions and visual feedback

### Custom Styling

You can override styles by targeting the CSS classes:

```css
.download-button {
  /* Custom styles */
}

.file-icon svg {
  /* Custom icon styles */
}
```

## Browser Support

Works in all modern browsers that support:
- CSS Grid and Flexbox
- SVG icons
- CSS custom properties
- ES6+ JavaScript features

## Development

### Testing Locally

1. Make changes to the component
2. Run the development server:
   ```bash
   npm start
   ```
3. Visit pages that use the DownloadButton component

### Building

```bash
npm run build
```

The component will be included in the production build automatically when imported in MDX files.

## Migration from Emoji Icons

If upgrading from the previous emoji-based version:

1. ✅ **No prop changes required** - all existing usage will continue to work
2. ✅ **Automatic icon conversion** - emoji icons are replaced with SVG outlines
3. ✅ **Improved accessibility** - SVG icons work better with screen readers
4. ✅ **Better theming** - Icons now respect theme colors

## Contributing

When adding new file types:

1. Add the file extension check in the `getFileIcon` function
2. Create or use an appropriate SVG icon (outline style, 24x24 viewBox)
3. Ensure the icon uses `currentColor` for proper theming
4. Update this README with the new file type

## Notes

- **File Organization**: Place downloadable files in `static/downloads/` folder instead of `static/img/` for better organization
- **File Paths**: Use paths like `/bp/downloads/filename.zip` for proper routing with the site's base URL
- Use the `download` attribute for proper browser download behavior
- Icons are rendered as inline SVG for better performance and theming
- Component is TypeScript-ready with full type definitions

## Recommended File Structure

```
static/
├── img/              # Images only (logos, screenshots, etc.)
└── downloads/        # Downloadable files (scripts, documents, etc.)
    ├── *.zip
    ├── *.7z
    ├── *.pdf
    └── *.ps1
```
