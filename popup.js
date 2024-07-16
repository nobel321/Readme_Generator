document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const codeInput = document.getElementById('codeInput');
    const output = document.getElementById('output');
  
    generateBtn.addEventListener('click', function() {
      const code = codeInput.value;
      const readme = generateReadme(code);
      output.textContent = readme;
    });
  
    function generateReadme(code) {
      // Simple language detection (can be expanded)
      const language = detectLanguage(code);
      
      // Extract function names (this is a basic implementation and may need to be adapted for different languages)
      const functions = extractFunctions(code);
      
      // Generate README content
      let readme = `# Code Analysis\n\n`;
      readme += `## Language\n\nThis code appears to be written in ${language}.\n\n`;
      readme += `## Functions\n\n`;
      
      functions.forEach(func => {
        readme += `- \`${func}\`\n`;
      });
      
      readme += `\n## How to Run\n\n`;
      readme += `1. Ensure you have ${language} installed on your system.\n`;
      readme += `2. Save the code in a file with an appropriate extension (e.g., \`.${language.toLowerCase()}\`).\n`;
      readme += `3. Run the file using the appropriate command for ${language}.\n\n`;
      readme += `## Code\n\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\`\n`;
  
      return readme;
    }
  
    function detectLanguage(code) {
      // This is a very basic detection and should be expanded for better accuracy
      if (code.includes('function') || code.includes('var')) return 'JavaScript';
      if (code.includes('def ') || code.includes('import ')) return 'Python';
      if (code.includes('public class') || code.includes('System.out.println')) return 'Java';
      return 'Unknown';
    }
  
    function extractFunctions(code) {
      // This is a basic regex for JavaScript functions. Adjust for other languages.
      const functionRegex = /function\s+(\w+)\s*\(/g;
      const functions = [];
      let match;
      while ((match = functionRegex.exec(code)) !== null) {
        functions.push(match[1]);
      }
      return functions;
    }
  });