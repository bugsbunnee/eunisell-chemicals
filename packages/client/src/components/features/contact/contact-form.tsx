import React, { useCallback } from 'react';
import http from '../../../services/http';

import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { useAppForm } from '../../forms/form-context';

import TextField from '../../forms/TextField';
import TextAreaField from '../../forms/TextAreaField';
import SelectField from '../../forms/SelectField';
import SubmitButton from '../../forms/SubmitButton';

import { toast } from 'sonner';
import { getErrorMessage } from '../../../lib/utils';

const constants = {
  industries: ['Oil & Gas', 'Manufacturing', 'Construction', 'Marine', 'Agriculture', 'Pharmaceuticals', 'Other'],
  enquiryTypes: ['Consultation', 'Product Enquiry', 'Technical Support', 'Lab Services', 'Partnership', 'Emergency Support'],
  countries: ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Angola', 'Cameroon', 'Ivory Coast', 'Tanzania', 'Egypt', 'United Kingdom', 'United States', 'Other'],
  solutionAreas: [
    'Oilfield Chemicals',
    'Industrial Cleaning',
    'Water Treatment',
    'Corrosion Inhibition',
    'Drilling Fluids',
    'Production Chemicals',
    'Blending & Formulation',
    'Laboratory Services',
    'Other',
  ],
};

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
    onSubmit: async ({ value }) => {
      try {
        await http.post('/api/v1/enquiries', value);

        toast.success('Your enquiry was submitted successfully! We will be in touch soon!');
        form.reset();
      } catch (error) {
        toast.error('Failed to submit the enquiry', { description: getErrorMessage(error) });
      }
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
    <div className="bg-white border border-[#E2E8F0] p-6 md:p-12 rounded-[4px] shadow-xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form.AppField name="jobTitle" validators={{ onChange: z.string() }} children={() => <TextField label="Job Title" placeholder="Procurement Manager" />} />

          <form.AppField name="email" validators={{ onChange: z.email() }} children={() => <TextField label="Corporate Email" placeholder="john@company.com" type="email" />} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            children={() => <SelectField label="Country" placeholder="Select Country" options={constants.countries} />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <form.AppField
            name="industry"
            validators={{ onChange: z.string().min(1, 'Please select an industry') }}
            children={() => <SelectField label="Industry" placeholder="Select Industry" options={constants.industries} />}
          />

          <form.AppField
            name="enquiryType"
            validators={{ onChange: z.string().min(1, 'Please select an enquiry type') }}
            children={() => <SelectField label="Enquiry Type" placeholder="Select Type" options={constants.enquiryTypes} />}
          />

          <form.AppField
            name="solutionArea"
            validators={{ onChange: z.string().min(1, 'Please select a solution area') }}
            children={() => <SelectField label="Solution Area" placeholder="Select Solution Area" options={constants.solutionAreas} />}
          />
        </div>

        <form.AppField
          name="message"
          validators={{ onChange: z.string().min(10, 'Please provide at least 10 characters') }}
          children={() => <TextAreaField label="Detailed Message" placeholder="Briefly describe your chemical requirements or technical challenge..." />}
        />

        <form.AppForm>
          <SubmitButton label="Send Enquiry" />
        </form.AppForm>
      </form>
    </div>
  );
};

export default ContactForm;
