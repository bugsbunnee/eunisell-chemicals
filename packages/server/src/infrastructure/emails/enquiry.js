import { Body as h, Button as C, Container as v, Head as P, Html as x, Img as T, Preview as w, Section as n, Text as r } from '@react-email/components';
import { jsx as e, jsxs as o } from 'react/jsx-runtime';
var i = { accent: '#000e24', navy: '#00234b', teal: '#006970', muted: '#43474e', body: '#181c1e', border: '#c4c6d0' },
  a = ({ label: l, value: s }) => o('div', { style: t.field, children: [e('p', { style: t.fieldLabel, children: l }), e('p', { style: t.fieldValue, children: s ?? '—' })] }),
  B = ({ fullName: l, company: s, jobTitle: d, email: p, phone: f, country: c, industry: g, enquiryType: S, solutionArea: b, message: y, referenceId: u, dashboardUrl: m }) =>
    o(x, {
      lang: 'en',
      children: [
        e(P, {}),
        o(w, { children: ['New enquiry received from ', l, ' — ', s] }),
        e(h, {
          style: t.body,
          children: o(v, {
            style: t.card,
            children: [
              e(n, { style: t.nav, children: e(r, { style: t.navBrand, children: 'Eunisell Admin' }) }),
              e('table', {
                width: '100%',
                cellPadding: 0,
                cellSpacing: 0,
                children: e('tbody', {
                  children: e('tr', {
                    children: o('td', {
                      style: t.hero,
                      children: [
                        e(T, {
                          src: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80&auto=format&fit=crop',
                          alt: 'Industrial facility',
                          width: '600',
                          height: '200',
                          style: t.heroImg,
                        }),
                        e('div', { style: t.heroOverlay }),
                      ],
                    }),
                  }),
                }),
              }),
              o(n, {
                style: t.confirmationSection,
                children: [
                  e(r, { style: t.heading, children: 'Enquiry Received' }),
                  e(r, {
                    style: t.subtitle,
                    children:
                      'A new business enquiry has been submitted through the portal. Our administrative team will review the details and initiate the appropriate workflow.',
                  }),
                ],
              }),
              e(n, {
                style: t.detailsOuter,
                children: o('div', {
                  style: t.detailsCard,
                  children: [
                    e('table', {
                      width: '100%',
                      cellPadding: 0,
                      cellSpacing: 0,
                      style: { borderBottom: `1px solid ${i.border}`, paddingBottom: 9, marginBottom: 24 },
                      children: e('tbody', {
                        children: e('tr', { children: e('td', { children: e(r, { style: t.detailsHeading, children: '\uD83D\uDCCB Submission Details' }) }) }),
                      }),
                    }),
                    e('table', {
                      width: '100%',
                      cellPadding: 0,
                      cellSpacing: 0,
                      children: e('tbody', {
                        children: o('tr', {
                          children: [
                            o('td', {
                              width: '50%',
                              style: { verticalAlign: 'top', paddingRight: 16 },
                              children: [
                                e(a, { label: 'Full Name', value: l }),
                                e(a, { label: 'Company', value: s }),
                                e(a, { label: 'Job Title', value: d }),
                                e(a, { label: 'Email', value: p }),
                                e(a, { label: 'Phone', value: f }),
                              ],
                            }),
                            o('td', {
                              width: '50%',
                              style: { verticalAlign: 'top', paddingLeft: 16 },
                              children: [
                                e(a, { label: 'Country', value: c }),
                                e(a, { label: 'Industry', value: g }),
                                e(a, { label: 'Enquiry Type', value: S }),
                                e(a, { label: 'Solution Area', value: b }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    e('table', {
                      width: '100%',
                      cellPadding: 0,
                      cellSpacing: 0,
                      style: { borderTop: `1px solid ${i.border}`, paddingTop: 17, marginTop: 8 },
                      children: e('tbody', {
                        children: e('tr', {
                          children: o('td', {
                            children: [
                              e('p', { style: t.fieldLabel, children: 'Message' }),
                              e('div', { style: t.messageBlock, children: o(r, { style: t.messageText, children: ['"', y, '"'] }) }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              o(n, {
                style: t.actionSection,
                children: [e(C, { href: m, style: t.ctaButton, children: 'View in Dashboard ↗' }), o(r, { style: t.referenceText, children: ['Reference ID: ', u] })],
              }),
              o(n, {
                style: t.footer,
                children: [
                  e(r, { style: t.footerBrand, children: 'EUNISELL' }),
                  o(r, { style: t.footerCopyright, children: ['© ', new Date().getFullYear(), ' Eunisell. All rights reserved. Industrial excellence and institutional trust.'] }),
                  e(r, { style: t.footerLinks, children: 'Support  ·  Privacy Policy  ·  Terms of Service' }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  t = {
    body: { backgroundColor: '#f7fafc', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', margin: 0, padding: '40px 24px' },
    card: { maxWidth: 600, backgroundColor: '#ffffff', border: `1px solid ${i.border}`, borderRadius: 2, overflow: 'hidden', boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)' },
    nav: { backgroundColor: '#ffffff', borderBottom: `1px solid ${i.border}`, padding: '12px 24px 13px' },
    navBrand: { margin: 0, fontSize: 32, fontWeight: 700, color: i.accent, lineHeight: '40px' },
    hero: { position: 'relative', height: 200, overflow: 'hidden' },
    heroImg: { display: 'block', width: '100%', height: 200, objectFit: 'cover' },
    heroOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,14,36,0.20)' },
    confirmationSection: { padding: '32px 24px 24px', textAlign: 'center' },
    heading: { margin: '0 0 8px', fontSize: 32, fontWeight: 600, lineHeight: '40px', color: i.accent, textAlign: 'center' },
    subtitle: { margin: 0, fontSize: 16, lineHeight: '24px', color: i.muted, textAlign: 'center' },
    detailsOuter: { padding: '0 24px 24px' },
    detailsCard: { backgroundColor: '#ffffff', border: `1px solid ${i.border}`, borderRadius: 2, padding: 25 },
    detailsHeading: { margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '24px', color: i.navy },
    field: { marginBottom: 16 },
    fieldLabel: { margin: '0 0 4px', fontSize: 12, fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: i.muted, lineHeight: '16px' },
    fieldValue: { margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '24px', color: i.body },
    messageBlock: { backgroundColor: '#f1f4f6', borderLeft: `4px solid ${i.teal}`, borderRadius: 2, padding: '16px 16px 16px 20px', marginTop: 8 },
    messageText: { margin: 0, fontSize: 16, fontStyle: 'italic', lineHeight: '26px', color: i.body },
    actionSection: { padding: '0 24px 48px', textAlign: 'center' },
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
    },
    referenceText: { margin: '12px 0 0', fontSize: 16, lineHeight: '24px', color: i.muted, textAlign: 'center' },
    footer: { backgroundColor: '#f7fafc', borderTop: `1px solid ${i.border}`, padding: '48px 24px', textAlign: 'center' },
    footerBrand: { margin: '0 0 12px', fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: i.muted },
    footerCopyright: { margin: '0 0 12px', fontSize: 14, lineHeight: '20px', color: i.muted, textAlign: 'center' },
    footerLinks: { margin: 0, fontSize: 14, lineHeight: '20px', color: i.muted, textAlign: 'center' },
  },
  H = B;
export { H as default };
