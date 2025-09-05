import { ComponentRenderer } from '../renderer'

export const rowColumnComponents: ComponentRenderer[] = [
  {
    name: 'Hero Section Layout',
    node: {
      type: 'ROW',
      bgColor: '#007bff',
      paddingTop: 40,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 40,
      columns: [
        {
          type: 'COLUMN',
          width: 60,
          children: [
            {
              type: 'HEADING',
              as: 'h1',
              content: 'Welcome to Our Platform',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'Build amazing email templates with our intuitive editor.',
              color: '#ffffff',
              fontSize: 16,
            },
          ],
        },
        {
          type: 'COLUMN',
          width: 40,
          children: [
            {
              type: 'IMAGE',
              src: 'https://placehold.co/280x210/png',
              alt: 'Platform preview',
              radiusTopLeft: 8,
              radiusTopRight: 8,
              radiusBottomLeft: 8,
              radiusBottomRight: 8,
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Feature Grid Layout',
    node: {
      type: 'ROW',
      gap: 15,
      columns: [
        {
          type: 'COLUMN',
          children: [
            {
              type: 'IMAGE',
              src: 'https://placehold.co/220x165/png',
              alt: 'Feature 1',
              radiusTopLeft: 8,
              radiusTopRight: 8,
              radiusBottomLeft: 8,
              radiusBottomRight: 8,
            },
            {
              type: 'HEADING',
              as: 'h3',
              content: 'Fast & Reliable',
            },
            {
              type: 'TEXT',
              content: 'Lightning-fast performance with 99.9% uptime guarantee.',
              textAlign: 'center',
            },
          ],
        },
        {
          type: 'COLUMN',
          children: [
            {
              type: 'IMAGE',
              src: 'https://placehold.co/190x140/png',
              alt: 'Feature 2',
              radiusTopLeft: 8,
              radiusTopRight: 8,
              radiusBottomLeft: 8,
              radiusBottomRight: 8,
            },
            {
              type: 'HEADING',
              as: 'h3',
              content: 'Easy to Use',
            },
            {
              type: 'TEXT',
              content: 'Intuitive interface designed for both beginners and experts.',
              textAlign: 'center',
            },
          ],
        },
        {
          type: 'COLUMN',
          children: [
            {
              type: 'IMAGE',
              src: 'https://placehold.co/210x160/png',
              alt: 'Feature 3',
              radiusTopLeft: 8,
              radiusTopRight: 8,
              radiusBottomLeft: 8,
              radiusBottomRight: 8,
            },
            {
              type: 'HEADING',
              as: 'h3',
              content: 'Secure & Private',
            },
            {
              type: 'TEXT',
              content: 'Enterprise-grade security with end-to-end encryption.',
              textAlign: 'center',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Content + CTA Layout',
    node: {
      type: 'ROW',
      bgColor: '#f8f9fa',
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
      columns: [
        {
          type: 'COLUMN',
          width: 70,
          children: [
            {
              type: 'HEADING',
              as: 'h2',
              content: 'Ready to Get Started?',
            },
            {
              type: 'TEXT',
              content:
                'Join thousands of users who trust our platform for their email marketing needs.',
              fontSize: 16,
            },
          ],
        },
        {
          type: 'COLUMN',
          width: 30,
          vAlign: 'middle',
          children: [
            {
              type: 'BUTTON',
              content: 'Get Started',
              bgColor: '#28a745',
              color: '#ffffff',
              paddingBottom: 14,
              paddingTop: 14,
              paddingLeft: 28,
              paddingRight: 28,
              linkHref: 'https://example.com',
              fontSize: 16,
              fontWeight: 'bold',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Testimonial Layout',
    node: {
      type: 'ROW',
      columns: [
        {
          type: 'COLUMN',
          width: 20,
          children: [
            {
              type: 'IMAGE',
              src: 'https://placehold.co/90x90/png',
              alt: 'User avatar',
              radiusTopLeft: 50,
              radiusTopRight: 50,
              radiusBottomLeft: 50,
              radiusBottomRight: 50,
            },
          ],
        },
        {
          type: 'COLUMN',
          width: 80,
          children: [
            {
              type: 'TEXT',
              content:
                '"This platform has revolutionized our email marketing strategy. The results speak for themselves!"',
              fontSize: 16,
              fontStyle: 'italic',
            },
            {
              type: 'TEXT',
              content: 'Sarah Johnson, Marketing Director',
              fontWeight: 'bold',
              color: '#6c757d',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Footer Layout',
    node: {
      type: 'ROW',
      bgColor: '#343a40',
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
      columns: [
        {
          type: 'COLUMN',
          children: [
            {
              type: 'HEADING',
              as: 'h4',
              content: 'Company',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'About Us',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'Careers',
              color: '#ffffff',
            },
          ],
        },
        {
          type: 'COLUMN',
          children: [
            {
              type: 'HEADING',
              as: 'h4',
              content: 'Product',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'Features',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'Pricing',
              color: '#ffffff',
            },
          ],
        },
        {
          type: 'COLUMN',
          children: [
            {
              type: 'HEADING',
              as: 'h4',
              content: 'Support',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'Help Center',
              color: '#ffffff',
            },
            {
              type: 'TEXT',
              content: 'Contact Us',
              color: '#ffffff',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Newsletter Signup',
    node: {
      type: 'ROW',
      bgColor: '#e9ecef',
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 25,
      columns: [
        {
          type: 'COLUMN',
          width: 60,
          children: [
            {
              type: 'HEADING',
              as: 'h3',
              content: 'Stay Updated',
            },
            {
              type: 'TEXT',
              content: 'Subscribe to our newsletter for the latest updates and tips.',
            },
          ],
        },
        {
          type: 'COLUMN',
          width: 40,
          vAlign: 'middle',
          children: [
            {
              type: 'BUTTON',
              content: 'Subscribe Now',
              bgColor: '#007bff',
              color: '#ffffff',
              paddingBottom: 12,
              paddingTop: 12,
              paddingLeft: 24,
              paddingRight: 24,
              fontWeight: 'bold',
            },
          ],
        },
      ],
    },
  },
  {
    name: 'Card Column',
    node: {
      type: 'COLUMN',
      bgColor: '#ffffff',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      borderStyle: 'solid',
      borderColor: '#e9ecef',
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      children: [
        {
          type: 'IMAGE',
          src: 'https://placehold.co/240x145/png',
          alt: 'Card image',
          radiusTopLeft: 6,
          radiusTopRight: 6,
          radiusBottomLeft: 6,
          radiusBottomRight: 6,
        },
        {
          type: 'HEADING',
          as: 'h4',
          content: 'Card Title',
        },
        {
          type: 'TEXT',
          content: 'This is a beautiful card component with image, title, and description.',
          textAlign: 'center',
        },
      ],
    },
  },
  {
    name: 'Sidebar Column',
    node: {
      type: 'COLUMN',
      bgColor: '#f8f9fa',
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 25,
      borderStyle: 'solid',
      borderColor: '#dee2e6',
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 1,
      borderBottomWidth: 0,
      children: [
        {
          type: 'HEADING',
          as: 'h4',
          content: 'Quick Links',
        },
        {
          type: 'TEXT',
          content: '• Home',
        },
        {
          type: 'TEXT',
          content: '• About',
        },
        {
          type: 'TEXT',
          content: '• Services',
        },
        {
          type: 'TEXT',
          content: '• Contact',
        },
      ],
    },
  },
  {
    name: 'Content Column',
    node: {
      type: 'COLUMN',
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15,
      children: [
        {
          type: 'HEADING',
          as: 'h2',
          content: 'Main Content',
        },
        {
          type: 'TEXT',
          content:
            'This is the primary content area of your layout. It contains the main information you want to convey to your readers.',
          fontSize: 16,
          lineHeight: 1.5,
        },
        {
          type: 'BUTTON',
          content: 'Learn More',
          bgColor: '#007bff',
          color: '#ffffff',
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          linkHref: 'https://example.com',
        },
      ],
    },
  },
  {
    name: 'Testimonial Column',
    node: {
      type: 'COLUMN',
      bgColor: '#e9ecef',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      children: [
        {
          type: 'TEXT',
          content:
            '"This platform has completely transformed how we create and send emails. The results have been incredible!"',
          fontSize: 16,
          fontStyle: 'italic',
          textAlign: 'center',
        },
        {
          type: 'TEXT',
          content: 'Jane Smith',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#6c757d',
        },
        {
          type: 'TEXT',
          content: 'CEO, TechCorp',
          textAlign: 'center',
          color: '#6c757d',
          fontSize: 14,
        },
      ],
    },
  },
  {
    name: 'Stats Column',
    node: {
      type: 'COLUMN',
      vAlign: 'middle',
      children: [
        {
          type: 'TEXT',
          content: '99.9%',
          fontSize: 36,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#28a745',
        },
        {
          type: 'TEXT',
          content: 'Uptime',
          textAlign: 'center',
          color: '#6c757d',
        },
      ],
    },
  },
  {
    name: 'Contact Column',
    node: {
      type: 'COLUMN',
      bgColor: '#007bff',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      children: [
        {
          type: 'HEADING',
          as: 'h4',
          content: 'Get In Touch',
          color: '#ffffff',
        },
        {
          type: 'TEXT',
          content: '📧 hello@example.com',
          color: '#ffffff',
        },
        {
          type: 'TEXT',
          content: '📞 +1 (555) 123-4567',
          color: '#ffffff',
        },
        {
          type: 'BUTTON',
          content: 'Contact Us',
          bgColor: '#ffffff',
          color: '#007bff',
          paddingBottom: 8,
          paddingTop: 8,
          paddingLeft: 16,
          paddingRight: 16,
          fontSize: 14,
        },
      ],
    },
  },
]
