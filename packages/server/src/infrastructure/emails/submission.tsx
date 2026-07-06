import type { CSSProperties } from 'react';
import { Body, Container, Head, Html, Preview, Section, Text } from '@react-email/components';

export interface SubmissionField {
  label: string;
  value?: string;
}

interface Props {
  heading: string;
  subtitle: string;
  fields: SubmissionField[];
  message?: SubmissionField;
}

const colors = {
  accent: '#000e24',
  navy: '#00234b',
  teal: '#006970',
  muted: '#43474e',
  body: '#181c1e',
  border: '#c4c6d0',
};

const Field = ({ label, value }: SubmissionField) => (
  <div style={styles.field}>
    <p style={styles.fieldLabel}>{label}</p>
    <p style={styles.fieldValue}>{value || '—'}</p>
  </div>
);

const SubmissionEmail = ({ heading, subtitle, fields, message }: Props) => {
  const middle = Math.ceil(fields.length / 2);

  return (
    <Html lang="en">
      <Head />
      <Preview>{subtitle}</Preview>

      <Body style={styles.body}>
        <Container style={styles.card}>
          <Section style={styles.nav}>
            <Text style={styles.navBrand}>Eunisell Admin</Text>
          </Section>

          <Section style={styles.confirmationSection}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
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
                      {fields.slice(0, middle).map((field) => (
                        <Field key={field.label} {...field} />
                      ))}
                    </td>
                    <td width="50%" style={{ verticalAlign: 'top', paddingLeft: 16 }}>
                      {fields.slice(middle).map((field) => (
                        <Field key={field.label} {...field} />
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>

              {message && (
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderTop: `1px solid ${colors.border}`, paddingTop: 17, marginTop: 8 }}>
                  <tbody>
                    <tr>
                      <td>
                        <p style={styles.fieldLabel}>{message.label}</p>
                        <div style={styles.messageBlock}>
                          <Text style={styles.messageText}>"{message.value}"</Text>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
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
};

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
    padding: '0 24px 48px',
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

export default SubmissionEmail;
