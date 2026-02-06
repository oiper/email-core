import { ComponentRenderer } from '../renderer'

export const sectionComponents: ComponentRenderer[] = [
  {
    name: 'Basic Section',
    node: {
      type: 'SECTION',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      children: [
        {
          type: 'HEADING',
          as: 'h2',
          content: 'Getting Started',
        },
        {
          type: 'TEXT',
          content:
            'Welcome to our platform! Here you can learn the basics and get started with your journey.',
        },
      ],
    },
  },
  {
    name: 'Colored Section',
    node: {
      type: 'SECTION',
      bgColor: '#f8f9fa',
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
      gap: 10,
      children: [
        {
          type: 'HEADING',
          as: 'h3',
          content: 'Our Features',
          color: '#495057',
        },
        {
          type: 'TEXT',
          content:
            'Discover all the amazing features we offer to help you succeed.',
          color: '#6c757d',
        },
        {
          type: 'BUTTON',
          content: 'Explore Features',
          linkHref: '#',
          bgColor: '#007bff',
          color: '#ffffff',
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        },
      ],
    },
  },
  {
    name: 'Section with Border',
    node: {
      type: 'SECTION',
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 25,
      borderStyle: 'solid',
      borderColor: '#007bff',
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      children: [
        {
          type: 'HEADING',
          as: 'h2',
          content: 'Contact Us',
          color: '#007bff',
        },
        {
          type: 'TEXT',
          content: 'Ready to get started? Reach out to our team for support.',
        },
        {
          type: 'TEXT',
          content: "We're here to help you every step of the way.",
          fontSize: 14,
          color: '#666',
        },
      ],
    },
  },
  {
    name: 'Dark Section',
    node: {
      type: 'SECTION',
      bgColor: '#343a40',
      paddingTop: 40,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 40,
      children: [
        {
          type: 'HEADING',
          as: 'h2',
          content: 'Premium Services',
          color: '#ffffff',
        },
        {
          type: 'TEXT',
          content: 'Get access to our premium features and enhanced support.',
          color: '#ffffff',
        },
        {
          type: 'BUTTON',
          content: 'Upgrade Now',
          linkHref: '#',
          bgColor: '#ffffff',
          color: '#343a40',
          paddingTop: 12,
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 12,
        },
      ],
    },
  },
  {
    name: 'Section with Background Image',
    node: {
      type: 'SECTION',
      bgImage: 'https://placehold.co/1150x280/png',
      paddingTop: 50,
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 50,
      children: [
        {
          type: 'HEADING',
          as: 'h1',
          content: 'Transform Your Business',
          color: '#ffffff',
          fontSize: 36,
          textAlign: 'center',
        },
        {
          type: 'TEXT',
          content: 'Join thousands of companies already using our platform.',
          color: '#ffffff',
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
        },
        {
          type: 'BUTTON',
          content: 'Get Started Today',
          linkHref: '#',
          bgColor: 'rgba(255, 255, 255, 0.9)',
          color: '#333',
          paddingTop: 15,
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 15,
          textAlign: 'center',
        },
      ],
    },
  },
  {
    name: 'Minimal Section',
    node: {
      type: 'SECTION',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      children: [
        {
          type: 'TEXT',
          content: 'Simple and clean design for maximum focus.',
          fontSize: 14,
        },
      ],
    },
  },
]
