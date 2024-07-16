# Code README Generator Extension

## Overview

This browser extension automatically generates stylish and detailed README files from code snippets. It's compatible with both Google Chrome and Microsoft Edge.

## Features

- Accepts code input directly in the extension popup
- Detects programming language (basic implementation)
- Extracts function names from the code
- Generates a markdown-formatted README
- Provides basic instructions on how to run the code

## Installation

### For Google Chrome:

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" in the top left corner
5. Select the directory containing the extension files

### For Microsoft Edge:

1. Download or clone this repository to your local machine
2. Open Edge and navigate to `edge://extensions`
3. Enable "Developer mode" in the bottom left corner
4. Click "Load unpacked" in the top left corner
5. Select the directory containing the extension files

## Usage

1. Click on the extension icon in your browser toolbar
2. In the popup window, paste your code into the textarea
3. Click the "Generate README" button
4. The generated README will appear below in markdown format

## Customization

You can customize the extension by modifying the following files:

- `popup.html`: Adjust the layout of the extension popup
- `styles.css`: Modify the styling of the extension
- `popup.js`: Enhance language detection, function extraction, or README generation logic

## Limitations

- Language detection is basic and may not accurately identify all programming languages
- Function extraction is currently optimized for JavaScript and may not work well with other languages
- The generated README is a basic template and may need manual adjustments for complex projects

## Contributing

Contributions to improve the extension are welcome! Please feel free to submit pull requests or open issues to suggest enhancements.

## License

This project is open source and available under the [MIT License](LICENSE).
