import React, { useCallback, useRef, useState } from 'react';
import { UploadCloudIcon } from 'lucide-react';
import { z } from 'zod';
import { useAppForm } from '../../forms/form-context';

const steps = ['Personal Details', 'Experience & Education', 'Documents'];

const inputClass =
  'w-full bg-card border border-[rgba(175,177,179,0.3)] rounded px-5 py-[18px] text-[16px] text-foreground placeholder:text-[#9ca3af] outline-none focus:border-secondary transition-colors';

const labelClass = 'font-bold text-accent text-[14px] leading-[21px] text-left';

interface ApplicationFormProps {
  jobTitle: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobTitle }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '5-10' as '5-10' | '10+',
      motivation: '',
      agreed: false,
    },
    onSubmit: ({ value }) => {
      console.log('Application submitted:', value, { file: fileName });
    },
  });

  const onSubmit = useCallback(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form]
  );

  return (
    <section className="bg-card py-24 px-30">
      <div className="max-w-[1200px] mx-auto bg-white rounded-[16px] border border-[rgba(175,177,179,0.2)] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="bg-accent flex items-center h-20 px-12">
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              <div className="flex items-center gap-3 shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 ${
                    i === 0 ? 'bg-secondary text-white' : 'border border-white/40 text-white/40'
                  }`}
                >
                  {i + 1}
                </div>

                <span className={`font-medium text-[16px] ${i === 0 ? 'text-white' : 'text-white/40'}`}>{step}</span>
              </div>

              {i < steps.length - 1 && <div className="flex-1 mx-6 h-px bg-white/20" />}
            </React.Fragment>
          ))}
        </div>

        <div className="p-16">
          <div className="mb-12">
            <h3 className="font-bold text-accent text-[28px] leading-10.5">Application for {jobTitle}</h3>
            <p className="text-[#606060] text-[16px] leading-6 mt-2">
              Please provide accurate information. Your application will be reviewed by our HR and Technical teams.
            </p>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8">
              <form.AppField
                name="firstName"
                validators={{ onChange: z.string().min(1, 'First name is required') }}
                children={(field) => (
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      placeholder="John"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={inputClass}
                    />
                  </div>
                )}
              />
              <form.AppField
                name="lastName"
                validators={{ onChange: z.string().min(1, 'Last name is required') }}
                children={(field) => (
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={inputClass}
                    />
                  </div>
                )}
              />
            </div>

            {/* Contact row */}
            <div className="grid grid-cols-2 gap-8">
              <form.AppField
                name="email"
                validators={{ onChange: z.email('Enter a valid email address') }}
                children={(field) => (
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={inputClass}
                    />
                  </div>
                )}
              />
              <form.AppField
                name="phone"
                validators={{ onChange: z.string().min(7, 'Enter a valid phone number') }}
                children={(field) => (
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+234"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className={inputClass}
                    />
                  </div>
                )}
              />
            </div>

            {/* Experience selector */}
            <form.AppField
              name="experience"
              validators={{ onChange: z.enum(['5-10', '10+']) }}
              children={(field) => (
                <div className="flex flex-col gap-4">
                  <label className={labelClass}>Years of Technical Experience in Chemicals *</label>
                  <div className="grid grid-cols-2 gap-4">
                    {(['5-10', '10+'] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => field.handleChange(option)}
                        className={`flex items-center justify-between p-4 rounded border font-semibold text-[14px] transition-colors ${
                          field.state.value === option
                            ? 'bg-secondary/5 border-secondary text-secondary'
                            : 'bg-white border-[rgba(175,177,179,0.3)] text-accent'
                        }`}
                      >
                        {option} Years
                        <span
                          className={`w-4 h-4 rounded-full border-2 transition-colors ${
                            field.state.value === option ? 'bg-secondary border-secondary' : 'border-[#afb1b3]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            />

            {/* File upload (uncontrolled — File objects can't live in form state) */}
            <div className="flex flex-col gap-4">
              <label className={labelClass}>Resume / CV *</label>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-card border-2 border-dashed border-[rgba(175,177,179,0.3)] rounded-[8px] h-[180px] flex flex-col items-center justify-center gap-3 hover:border-secondary/40 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <UploadCloudIcon size={24} className="text-secondary" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-accent text-[16px] leading-[24px]">{fileName ?? 'Click to upload or drag and drop'}</p>
                  {!fileName && <p className="text-[#606060] text-[12px] leading-[18px]">PDF, DOCX (Max. 5MB)</p>}
                </div>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                className="hidden"
              />
            </div>

            {/* Motivation */}
            <form.AppField
              name="motivation"
              validators={{ onChange: z.string().min(1, 'Please tell us about yourself') }}
              children={(field) => (
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Professional Motivation *</label>
                  <textarea
                    placeholder="Tell us why you are a great fit for Eunisell..."
                    rows={5}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              )}
            />

            {/* Privacy checkbox + submit */}
            <form.AppField
              name="agreed"
              validators={{ onChange: z.literal(true, { message: 'You must agree to continue' }) }}
              children={(field) => (
                <div className="flex items-center gap-3">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    onBlur={field.handleBlur}
                    className="w-5 h-5 border border-[#767676] rounded-[2.5px] accent-secondary cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-[#606060] text-[14px] leading-[21px] cursor-pointer">
                    I confirm that all information provided is true and accurate. I agree to the{' '}
                    <a href="/privacy-policy" className="text-secondary underline hover:text-secondary/80">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              )}
            />

            <form.AppForm>
              <div className="flex justify-end pt-4">
                <form.Subscribe
                  selector={(s) => [s.canSubmit, s.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="bg-secondary text-white font-bold text-[16px] px-12 py-4 rounded shadow-[0px_16px_16px_rgba(0,0,0,0.08)] hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting…' : 'Submit Application'}
                    </button>
                  )}
                />
              </div>
            </form.AppForm>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
