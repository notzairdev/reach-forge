import { useEffect, useState } from 'react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Loader2 } from 'lucide-react';

const Terms = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        // Replace with your actual markdown URL
        const response = await fetch('https://api.reachx.dev/assets/resources/terms.markdown');
        if (!response.ok) throw new Error('Failed to fetch terms');
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError('Unable to load terms of service');
        // Fallback content
        setContent(`# Terms of Service

**Last updated:** December 2024

## Agreement to Terms

By accessing or using Reach's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.

## Use of Services

### Eligibility

You must be at least 13 years old to use our services. By using our services, you represent that you meet this requirement.

### Account Responsibilities

You are responsible for:

- Maintaining the security of your account
- All activities that occur under your account
- Ensuring your contact information is accurate

### Acceptable Use

You agree not to:

- Violate any applicable laws or regulations
- Infringe on intellectual property rights
- Transmit malicious code or interfere with our services
- Attempt to gain unauthorized access to our systems

## Service Availability

We strive to maintain high availability but do not guarantee uninterrupted access. We may modify or discontinue services with reasonable notice.

## Intellectual Property

All content, features, and functionality of our services are owned by Reach and protected by intellectual property laws.

## Limitation of Liability

To the maximum extent permitted by law, Reach shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.

## Changes to Terms

We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.

## Contact

For questions about these Terms, contact us at legal@reachx.dev.
`);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
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

export default Terms;
