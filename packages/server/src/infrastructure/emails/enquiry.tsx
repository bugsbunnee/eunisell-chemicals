import type { CSSProperties } from 'react';
import { Body, Button, Container, Head, Html, Img, Preview, Section, Text } from '@react-email/components';

interface Props {
  fullName: string;
  company: string;
  jobTitle?: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  enquiryType: string;
  solutionArea: string;
  message: string;
  referenceId: string;
  dashboardUrl: string;
}

const colors = {
  accent: '#000e24',
  navy: '#00234b',
  teal: '#006970',
  muted: '#43474e',
  body: '#181c1e',
  border: '#c4c6d0',
};

const Field = ({ label, value }: { label: string; value?: string }) => (
  <div style={styles.field}>
    <p style={styles.fieldLabel}>{label}</p>
    <p style={styles.fieldValue}>{value ?? '—'}</p>
  </div>
);

const EnquiryEmail = ({ fullName, company, jobTitle, email, phone, country, industry, enquiryType, solutionArea, message, referenceId, dashboardUrl }: Props) => (
  <Html lang="en">
    <Head />
    <Preview>
      New enquiry received from {fullName} — {company}
    </Preview>

    <Body style={styles.body}>
      <Container style={styles.card}>
        <Section style={styles.nav}>
          <Text style={styles.navBrand}>Eunisell Admin</Text>
        </Section>

        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td style={styles.hero}>
                <Img
                  src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80&auto=format&fit=crop"
                  alt="Industrial facility"
                  width="600"
                  height="200"
                  style={styles.heroImg}
                />
                <div style={styles.heroOverlay} />
              </td>
            </tr>
          </tbody>
        </table>

        <Section style={styles.confirmationSection}>
          <Text style={styles.heading}>Enquiry Received</Text>
          <Text style={styles.subtitle}>
            A new business enquiry has been submitted through the portal. Our administrative team will review the details and initiate the appropriate workflow.
          </Text>
        </Section>

        <Section style={styles.detailsOuter}>
          <div style={styles.detailsCard}>
            <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderBottom: `1px solid ${colors.border}`, paddingBottom: 9, marginBottom: 24 }}>
              <tbody>
                <tr>
                  <td>
                    <Text style={styles.detailsHeading}>📋 Submission Details</Text>
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td width="50%" style={{ verticalAlign: 'top', paddingRight: 16 }}>
                    <Field label="Full Name" value={fullName} />
                    <Field label="Company" value={company} />
                    <Field label="Job Title" value={jobTitle} />
                    <Field label="Email" value={email} />
                    <Field label="Phone" value={phone} />
                  </td>
                  <td width="50%" style={{ verticalAlign: 'top', paddingLeft: 16 }}>
                    <Field label="Country" value={country} />
                    <Field label="Industry" value={industry} />
                    <Field label="Enquiry Type" value={enquiryType} />
                    <Field label="Solution Area" value={solutionArea} />
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderTop: `1px solid ${colors.border}`, paddingTop: 17, marginTop: 8 }}>
              <tbody>
                <tr>
                  <td>
                    <p style={styles.fieldLabel}>Message</p>
                    <div style={styles.messageBlock}>
                      <Text style={styles.messageText}>"{message}"</Text>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section style={styles.actionSection}>
          <Button href={dashboardUrl} style={styles.ctaButton}>
            View in Dashboard ↗
          </Button>
          <Text style={styles.referenceText}>Reference ID: {referenceId}</Text>
        </Section>

        <Section style={styles.footer}>
          <Text style={styles.footerBrand}>EUNISELL</Text>
          <Text style={styles.footerCopyright}>© {new Date().getFullYear()} Eunisell. All rights reserved. Industrial excellence and institutional trust.</Text>
          <Text style={styles.footerLinks}>Support &nbsp;·&nbsp; Privacy Policy &nbsp;·&nbsp; Terms of Service</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const styles = {
  body: {
    backgroundColor: '#f7fafc',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    margin: 0,
    padding: '40px 24px',
  } satisfies CSSProperties,

  card: {
    maxWidth: 600,
    backgroundColor: '#ffffff',
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)',
  } satisfies CSSProperties,

  nav: {
    backgroundColor: '#ffffff',
    borderBottom: `1px solid ${colors.border}`,
    padding: '12px 24px 13px',
  } satisfies CSSProperties,

  navBrand: {
    margin: 0,
    fontSize: 32,
    fontWeight: 700,
    color: colors.accent,
    lineHeight: '40px',
  } satisfies CSSProperties,

  hero: {
    position: 'relative' as const,
    height: 200,
    overflow: 'hidden',
  } satisfies CSSProperties,

  heroImg: {
    display: 'block',
    width: '100%',
    height: 200,
    objectFit: 'cover' as const,
  } satisfies CSSProperties,

  heroOverlay: {
    position: 'absolute' as const,
    inset: 0,
    backgroundColor: 'rgba(0,14,36,0.20)',
  } satisfies CSSProperties,

  confirmationSection: {
    padding: '32px 24px 24px',
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  heading: {
    margin: '0 0 8px',
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '40px',
    color: colors.accent,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  subtitle: {
    margin: 0,
    fontSize: 16,
    lineHeight: '24px',
    color: colors.muted,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  detailsOuter: {
    padding: '0 24px 24px',
  } satisfies CSSProperties,

  detailsCard: {
    backgroundColor: '#ffffff',
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: 25,
  } satisfies CSSProperties,

  detailsHeading: {
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '24px',
    color: colors.navy,
  } satisfies CSSProperties,

  field: {
    marginBottom: 16,
  } satisfies CSSProperties,

  fieldLabel: {
    margin: '0 0 4px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.6px',
    textTransform: 'uppercase' as const,
    color: colors.muted,
    lineHeight: '16px',
  } satisfies CSSProperties,

  fieldValue: {
    margin: 0,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
    color: colors.body,
  } satisfies CSSProperties,

  messageBlock: {
    backgroundColor: '#f1f4f6',
    borderLeft: `4px solid ${colors.teal}`,
    borderRadius: 2,
    padding: '16px 16px 16px 20px',
    marginTop: 8,
  } satisfies CSSProperties,

  messageText: {
    margin: 0,
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: '26px',
    color: colors.body,
  } satisfies CSSProperties,

  actionSection: {
    padding: '0 24px 48px',
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  ctaButton: {
    backgroundColor: '#ff6b00',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 600,
    borderRadius: 2,
    padding: '16px 32px',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0px 1px 1px rgba(0,0,0,0.05)',
  } satisfies CSSProperties,

  referenceText: {
    margin: '12px 0 0',
    fontSize: 16,
    lineHeight: '24px',
    color: colors.muted,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  footer: {
    backgroundColor: '#f7fafc',
    borderTop: `1px solid ${colors.border}`,
    padding: '48px 24px',
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  footerBrand: {
    margin: '0 0 12px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const,
    color: colors.muted,
  } satisfies CSSProperties,

  footerCopyright: {
    margin: '0 0 12px',
    fontSize: 14,
    lineHeight: '20px',
    color: colors.muted,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  footerLinks: {
    margin: 0,
    fontSize: 14,
    lineHeight: '20px',
    color: colors.muted,
    textAlign: 'center' as const,
  } satisfies CSSProperties,
};

export default EnquiryEmail;
