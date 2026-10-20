import { useId, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router';
import { BUDGETS, PROJECT_TYPES, STUDIO } from '../data/content.js';
import { MagneticButton } from './MagneticButton.jsx';
import styles from './ContactForm.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Laat ons weten met wie we praten.';
  if (!v.email.trim()) errors.email = 'We hebben een e-mailadres nodig om te antwoorden.';
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Dat e-mailadres lijkt niet volledig.';
  if (v.message.trim().length < 10) errors.message = 'Een zin of twee over het project, graag.';
  return errors;
}

function composeBrief(v) {
  const type = PROJECT_TYPES.find((t) => t.value === v.projectType)?.label || 'Niet opgegeven';
  const lines = [
    'Nieuwe projectaanvraag — via kaimanmich.be',
    '',
    `Naam: ${v.name.trim()}`,
    `E-mail: ${v.email.trim()}`,
    `Bedrijf: ${v.company.trim() || '—'}`,
    `Soort project: ${type}`,
    `Budget: ${v.budget || 'Niet opgegeven'}`,
    '',
    'Bericht:',
    v.message.trim(),
  ];
  const subject = `Projectaanvraag — ${v.name.trim()}${v.company.trim() ? ` (${v.company.trim()})` : ''}`;
  return { subject, body: lines.join('\r\n') };
}

/**
 * Project enquiry form. With no mail backend configured it composes the full
 * brief into a mailto: link addressed to the studio and opens the visitor's
 * mail app; a copy-to-clipboard fallback covers machines without one.
 */
export function ContactForm({ initialType = '' }) {
  const uid = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    projectType: PROJECT_TYPES.some((t) => t.value === initialType) ? initialType : '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sent
  const [copied, setCopied] = useState(false);

  const set = (field) => (e) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    const { subject, body } = composeBrief(values);
    window.location.href = `mailto:${STUDIO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  };

  const copyBrief = async () => {
    const { subject, body } = composeBrief(values);
    try {
      await navigator.clipboard.writeText(`To: ${STUDIO.email}\r\nSubject: ${subject}\r\n\r\n${body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const fieldId = (name) => `${uid}-${name}`;
  const errProps = (name) =>
    errors[name]
      ? { 'aria-invalid': true, 'aria-describedby': `${fieldId(name)}-error` }
      : { 'aria-invalid': undefined };

  if (status === 'sent') {
    return (
      <div className={styles.sent} role="status" aria-live="polite">
        <p className="t-mono">
          <span className="status-dot" aria-hidden="true" /> Aanvraag klaar
        </p>
        <p className={styles.sentTitle}>Je e-mailprogramma zou nu open moeten staan, met alles al ingevuld.</p>
        <p className={`t-lead t-dim ${styles.sentText}`}>
          Druk daar op verzenden en het komt bij ons terecht. Opende er niets? Kopieer je aanvraag en stuur ze naar{' '}
          <a className="u-link" href={`mailto:${STUDIO.email}`}>
            {STUDIO.email}
          </a>
          .
        </p>
        <div className={styles.sentActions}>
          <button type="button" className={`t-mono ${styles.textBtn}`} onClick={copyBrief}>
            {copied ? 'Gekopieerd' : 'Kopieer je aanvraag'}
          </button>
          <button type="button" className={`t-mono ${styles.textBtn}`} onClick={() => setStatus('idle')}>
            Aanvraag aanpassen
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-describedby={`${uid}-req`}>
      <p id={`${uid}-req`} className={`t-mono t-dim ${styles.req}`}>
        Velden met * zijn verplicht
      </p>

      <div className={styles.pair}>
        <Field id={fieldId('name')} n="01" label="Naam" required error={errors.name}>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            required
            {...errProps('name')}
          />
        </Field>
        <Field id={fieldId('email')} n="02" label="E-mail" required error={errors.email}>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={set('email')}
            required
            {...errProps('email')}
          />
        </Field>
      </div>

      <div className={styles.pair}>
        <Field id={fieldId('company')} n="03" label="Bedrijf">
          <input
            id={fieldId('company')}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set('company')}
          />
        </Field>
        <Field id={fieldId('projectType')} n="04" label="Soort project">
          <select id={fieldId('projectType')} name="projectType" value={values.projectType} onChange={set('projectType')}>
            <option value="">Maak een keuze</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>
          <span className="t-mono t-dim">05</span> Budget
        </legend>
        <div className={styles.chips}>
          {BUDGETS.map((b) => (
            <label key={b} className={styles.chip}>
              <input type="radio" name="budget" value={b} checked={values.budget === b} onChange={set('budget')} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id={fieldId('message')} n="06" label="Bericht" required error={errors.message}>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={5}
          value={values.message}
          onChange={set('message')}
          placeholder="Wat wil je bouwen, en wat moet het veranderen?"
          required
          {...errProps('message')}
        />
      </Field>

      <div className={styles.submitRow}>
        <MagneticButton type="submit" size="l" cursor="Verstuur">
          Verstuur aanvraag
        </MagneticButton>
        <p className={`t-mono t-dim ${styles.submitNote}`}>
          Opent je e-mailprogramma, gericht aan {STUDIO.email}. Hoe we met je gegevens omgaan, lees je in onze{' '}
          <RouterLink to="/privacy" className="u-link">
            privacyverklaring
          </RouterLink>
          .
        </p>
      </div>
    </form>
  );
}

function Field({ id, n, label, required, error, children }) {
  return (
    <div className={`${styles.field} ${error ? styles.invalid : ''}`}>
      <label htmlFor={id} className={styles.label}>
        <span className="t-mono t-dim">{n}</span> {label}
        {required && (
          <span className={styles.star} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
