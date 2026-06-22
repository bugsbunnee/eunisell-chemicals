import React, { useCallback } from 'react';

import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { useAppForm } from '../../forms/form-context';

import TextField from '../../forms/TextField';
import TextAreaField from '../../forms/TextAreaField';
import SelectField from '../../forms/SelectField';
import SubmitButton from '../../forms/SubmitButton';

const industries = ['Oil & Gas', 'Manufacturing', 'Construction', 'Marine', 'Agriculture', 'Pharmaceuticals', 'Other'];

const enquiryTypes = ['Consultation', 'Product Enquiry', 'Technical Support', 'Lab Services', 'Partnership', 'Emergency Support'];

const countries = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'Angola',
  'Cameroon',
  'Ivory Coast',
  'Tanzania',
  'Egypt',
  'United Kingdom',
  'United States',
  'Other',
];

const solutionAreas = [
  'Oilfield Chemicals',
  'Industrial Cleaning',
  'Water Treatment',
  'Corrosion Inhibition',
  'Drilling Fluids',
  'Production Chemicals',
  'Blending & Formulation',
  'Laboratory Services',
  'Other',
];

const ContactForm: React.FC = () => {
  const form = useAppForm({
    defaultValues: {
      fullName: '',
      company: '',
      jobTitle: '',
      email: '',
      phone: '',
      country: '',
      industry: '',
      enquiryType: '',
      solutionArea: '',
      message: '',
    },
    onSubmit: ({ value }) => {
      console.log('Form submitted:', value);
    },
  });

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form]
  );

  return (
    <div className="bg-white border border-[#E2E8F0] p-12 rounded-[4px] shadow-xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <form.AppField
            name="fullName"
            validators={{ onChange: z.string().min(2, 'Full name is required') }}
            children={() => <TextField label="Full Name" placeholder="John Doe" />}
          />

          <form.AppField
            name="company"
            validators={{ onChange: z.string().min(1, 'Company name is required') }}
            children={() => <TextField label="Company" placeholder="Enterprise Plc" />}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <form.AppField
            name="jobTitle"
            validators={{ onChange: z.string() }}
            children={() => <TextField label="Job Title" placeholder="Procurement Manager" />}
          />

          <form.AppField
            name="email"
            validators={{ onChange: z.email() }}
            children={() => <TextField label="Corporate Email" placeholder="john@company.com" type="email" />}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <form.AppField
            name="phone"
            validators={{
              onChange: z.string().refine((val) => isValidPhoneNumber(val), 'Please enter a valid phone number'),
            }}
            children={() => <TextField label="Phone Number" placeholder="+234 800 000 0000" type="tel" />}
          />

          <form.AppField
            name="country"
            validators={{ onChange: z.string().min(1, 'Please select a country') }}
            children={() => <SelectField label="Country" placeholder="Select Country" options={countries} />}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <form.AppField
            name="industry"
            validators={{ onChange: z.string().min(1, 'Please select an industry') }}
            children={() => <SelectField label="Industry" placeholder="Select Industry" options={industries} />}
          />

          <form.AppField
            name="enquiryType"
            validators={{ onChange: z.string().min(1, 'Please select an enquiry type') }}
            children={() => <SelectField label="Enquiry Type" placeholder="Select Type" options={enquiryTypes} />}
          />

          <form.AppField
            name="solutionArea"
            validators={{ onChange: z.string().min(1, 'Please select a solution area') }}
            children={() => <SelectField label="Solution Area" placeholder="Select Solution Area" options={solutionAreas} />}
          />
        </div>

        <form.AppField
          name="message"
          validators={{ onChange: z.string().min(10, 'Please provide at least 10 characters') }}
          children={() => (
            <TextAreaField label="Detailed Message" placeholder="Briefly describe your chemical requirements or technical challenge..." />
          )}
        />

        <form.AppForm>
          <SubmitButton label="Send Enquiry" />
        </form.AppForm>
      </form>
    </div>
  );
};

export default ContactForm;
