import { ComponentRenderer } from '../renderer'

export const htmlComponents: ComponentRenderer[] = [
  {
    name: 'Basic HTML',
    node: {
      type: 'HTML',
      content:
        '<div style="padding: 20px; background: #f8f9fa;"><h2>Hello HTML</h2><p>This is custom HTML content.</p></div>',
    },
  },
  {
    name: 'Styled HTML',
    node: {
      type: 'HTML',
      content:
        '<div style="border: 2px solid #007bff; border-radius: 8px; padding: 15px; background: linear-gradient(45deg, #007bff, #28a745); color: white;"><h3>Styled Content</h3><p>This HTML has custom styling.</p></div>',
    },
  },
  {
    name: 'HTML with Table',
    node: {
      type: 'HTML',
      content:
        '<table style="width: 100%; border-collapse: collapse;"><tr style="background: #007bff; color: white;"><th style="padding: 8px; border: 1px solid #ddd;">Name</th><th style="padding: 8px; border: 1px solid #ddd;">Email</th></tr><tr><td style="padding: 8px; border: 1px solid #ddd;">John Doe</td><td style="padding: 8px; border: 1px solid #ddd;">john@example.com</td></tr></table>',
    },
  },
  {
    name: 'HTML with Form',
    node: {
      type: 'HTML',
      content:
        '<form style="max-width: 400px; margin: 0 auto;"><label style="display: block; margin-bottom: 8px;">Name:</label><input type="text" style="width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid #ddd; border-radius: 4px;"><button type="submit" style="background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Submit</button></form>',
    },
  },
  {
    name: 'HTML with Icons',
    node: {
      type: 'HTML',
      content:
        '<div style="text-align: center; padding: 20px;"><div style="font-size: 48px; margin-bottom: 16px;">⭐</div><h2>Welcome!</h2><p style="color: #666;">Thank you for joining us</p><div style="margin-top: 20px;"><span style="display: inline-block; margin: 0 10px;">👍</span><span style="display: inline-block; margin: 0 10px;">❤️</span><span style="display: inline-block; margin: 0 10px;">🎉</span></div></div>',
    },
  },
  {
    name: 'HTML with Video',
    node: {
      type: 'HTML',
      content:
        '<div style="text-align: center; padding: 20px;"><h3>Video Content</h3><div style="background: #000; color: white; padding: 40px; border-radius: 8px;"><p>🎥 Video Placeholder</p><p>Video content would be embedded here</p></div></div>',
    },
  },
]
