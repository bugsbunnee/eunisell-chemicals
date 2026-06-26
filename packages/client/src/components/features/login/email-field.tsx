import React from 'react';

import { MailIcon } from 'lucide-react';
import { useFieldContext } from '../../forms/form-context';
import { cn } from '../../../lib/utils';

const inputBase =
  'w-full h-[52px] border border-[#d2d2d2] rounded-[6px] text-[16px] text-accent bg-white outline-none focus:border-secondary transition-colors placeholder:text-[#9ca3af]';

interface Props {
  placeholder?: string;
}

const EmailField: React.FC<Props> = ({ placeholder }) => {
  const field = useFieldContext<string>();
  const hasError = field.state.meta.errors.length > 0 && field.state.meta.isTouched;

  return (
    <div>
      <div className="relative">
        <MailIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
        <input
          id={field.name}
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          className={cn(inputBase, 'pl-11 pr-4', hasError && 'border-destructive focus:border-destructive')}
        />
      </div>
      {hasError && <span className="mt-1 block text-xs text-destructive">{field.state.meta.errors[0]?.message}</span>}
    </div>
  );
};

export default EmailField;
