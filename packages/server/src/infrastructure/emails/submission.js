import { Body as g, Container as S, Head as b, Html as m, Preview as y, Section as l, Text as r } from '@react-email/components';
import { jsx as e, jsxs as o } from 'react/jsx-runtime';
var i = { accent: '#000e24', navy: '#00234b', teal: '#006970', muted: '#43474e', body: '#181c1e', border: '#c4c6d0' },
  c = ({ label: s, value: a }) => o('div', { style: t.field, children: [e('p', { style: t.fieldLabel, children: s }), e('p', { style: t.fieldValue, children: a || '—' })] }),
  u = ({ heading: s, subtitle: a, fields: d, message: p }) => {
    let f = Math.ceil(d.length / 2);
    return o(m, {
      lang: 'en',
      children: [
        e(b, {}),
        e(y, { children: a }),
        e(g, {
          style: t.body,
          children: o(S, {
            style: t.card,
            children: [
              e(l, { style: t.nav, children: e(r, { style: t.navBrand, children: 'Eunisell Admin' }) }),
              o(l, { style: t.confirmationSection, children: [e(r, { style: t.heading, children: s }), e(r, { style: t.subtitle, children: a })] }),
              e(l, {
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
                            e('td', { width: '50%', style: { verticalAlign: 'top', paddingRight: 16 }, children: d.slice(0, f).map((n) => e(c, { ...n }, n.label)) }),
                            e('td', { width: '50%', style: { verticalAlign: 'top', paddingLeft: 16 }, children: d.slice(f).map((n) => e(c, { ...n }, n.label)) }),
                          ],
                        }),
                      }),
                    }),
                    p &&
                      e('table', {
                        width: '100%',
                        cellPadding: 0,
                        cellSpacing: 0,
                        style: { borderTop: `1px solid ${i.border}`, paddingTop: 17, marginTop: 8 },
                        children: e('tbody', {
                          children: e('tr', {
                            children: o('td', {
                              children: [
                                e('p', { style: t.fieldLabel, children: p.label }),
                                e('div', { style: t.messageBlock, children: o(r, { style: t.messageText, children: ['"', p.value, '"'] }) }),
                              ],
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
              o(l, {
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
    });
  },
  t = {
    body: { backgroundColor: '#f7fafc', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', margin: 0, padding: '40px 24px' },
    card: { maxWidth: 600, backgroundColor: '#ffffff', border: `1px solid ${i.border}`, borderRadius: 2, overflow: 'hidden', boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)' },
    nav: { backgroundColor: '#ffffff', borderBottom: `1px solid ${i.border}`, padding: '12px 24px 13px' },
    navBrand: { margin: 0, fontSize: 32, fontWeight: 700, color: i.accent, lineHeight: '40px' },
    confirmationSection: { padding: '32px 24px 24px', textAlign: 'center' },
    heading: { margin: '0 0 8px', fontSize: 32, fontWeight: 600, lineHeight: '40px', color: i.accent, textAlign: 'center' },
    subtitle: { margin: 0, fontSize: 16, lineHeight: '24px', color: i.muted, textAlign: 'center' },
    detailsOuter: { padding: '0 24px 48px' },
    detailsCard: { backgroundColor: '#ffffff', border: `1px solid ${i.border}`, borderRadius: 2, padding: 25 },
    detailsHeading: { margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '24px', color: i.navy },
    field: { marginBottom: 16 },
    fieldLabel: { margin: '0 0 4px', fontSize: 12, fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: i.muted, lineHeight: '16px' },
    fieldValue: { margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '24px', color: i.body },
    messageBlock: { backgroundColor: '#f1f4f6', borderLeft: `4px solid ${i.teal}`, borderRadius: 2, padding: '16px 16px 16px 20px', marginTop: 8 },
    messageText: { margin: 0, fontSize: 16, fontStyle: 'italic', lineHeight: '26px', color: i.body },
    footer: { backgroundColor: '#f7fafc', borderTop: `1px solid ${i.border}`, padding: '48px 24px', textAlign: 'center' },
    footerBrand: { margin: '0 0 12px', fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: i.muted },
    footerCopyright: { margin: '0 0 12px', fontSize: 14, lineHeight: '20px', color: i.muted, textAlign: 'center' },
    footerLinks: { margin: 0, fontSize: 14, lineHeight: '20px', color: i.muted, textAlign: 'center' },
  },
  P = u;
export { P as default };
