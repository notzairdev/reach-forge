import { useEffect, useState } from 'react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Loader2 } from 'lucide-react';

const Privacy = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrivacy = async () => {
      try {
        // Replace with your actual markdown URL
        const response = await fetch('https://api.reachx.dev/assets/resources/privacy.markdown');
        if (!response.ok) throw new Error('Failed to fetch privacy policy');
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError('Unable to load privacy policy');
        // Fallback content
        setContent(`# Privacy Policy

**Last updated:** December 2024

## Introduction

This Privacy Policy describes how Reach ("we", "us", or "our") collects, uses, and shares information about you when you use our services.

## Information We Collect

We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.

### Information You Provide

- Account information (email, username)
- Server configuration data
- Payment information (processed securely by third parties)

### Automatically Collected Information

- Usage data and analytics
- Device and browser information
- IP addresses and location data

## How We Use Your Information

We use the information we collect to:

- Provide, maintain, and improve our services
- Process transactions and send related information
- Send technical notices and support messages
- Respond to your comments and questions

## Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Contact Us

If you have questions about this Privacy Policy, please contact us at privacy@reachx.dev.
`);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacy();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return <MarkdownRenderer content={content} />;
};

export default Privacy;
