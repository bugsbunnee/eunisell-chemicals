import React, { useState, useCallback } from 'react';

import { z } from 'zod';
import { useAppForm } from '../../forms/form-context';
import { toast } from 'sonner';
import { getErrorMessage } from '../../../lib/utils';

import EmailField from './email-field';
import PasswordField from './password-field';
import CheckboxField from './checkbox-field';
import SignInButton from './sign-in-button';

import { useNavigate } from 'react-router-dom';
import http from '../../../services/http';
import useAuthStore from '../../../store/auth';
import { paths } from '../../../lib/data';

interface Auth {
  email: string;
  password: string;
  rememberMe: boolean;
}

const defaultValues: Auth = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const auth = useAuthStore();
  const form = useAppForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      try {
        const response = await http.post('/api/v1/auth/login', value);
        toast.success('Authentication successful');
        auth.login(response.data);
        navigate(paths.dashboard, { replace: true });
      } catch (error) {
        toast.error('Failed to authenticate', { description: getErrorMessage(error) });
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
    <div className="bg-white border border-[#d2d2d2] rounded-[12px] shadow-[0px_32px_8px_rgba(0,0,0,0.02)] px-10 pt-10 pb-14">
      <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
        <div className="flex flex-col gap-2 text-left">
          <label className="text-[14px] leading-5 text-[#333]" htmlFor="email">
            Email Address
          </label>

          <form.AppField name="email" validators={{ onChange: z.email('Please enter a valid email address') }} children={() => <EmailField placeholder="admin@eunisell.com" />} />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <div className="flex items-center justify-between">
            <label className="text-[14px] leading-5 text-[#333]" htmlFor="password">
              Password
            </label>

            <button type="button" className="text-[14px] leading-5 text-secondary hover:text-secondary/80 transition-colors">
              Forgot password?
            </button>
          </div>

          <form.AppField
            name="password"
            validators={{ onChange: z.string().min(1, 'Password is required') }}
            children={() => <PasswordField placeholder="••••••••••••" showPassword={showPassword} onToggle={() => setShowPassword((p) => !p)} />}
          />
        </div>

        <form.AppField name="rememberMe" children={() => <CheckboxField label="Remember me for 30 days" />} />

        <form.AppForm>
          <SignInButton />
        </form.AppForm>

        <div className="py-2">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-[#d2d2d2]" />
            <span className="text-[12px] uppercase tracking-[1.2px] text-card-foreground whitespace-nowrap">Enterprise Auth</span>
            <div className="flex-1 h-px bg-[#d2d2d2]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
