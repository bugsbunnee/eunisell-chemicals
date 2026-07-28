import React from 'react';
import { type LucideIcon } from 'lucide-react';

import { useFieldContext } from '../../../forms/form-context';
import { cn } from '../../../../lib/utils';
import FieldError from './field-error';

interface Props {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  icon?: LucideIcon;
  prefix?: string;
}

export default function JobTextField({ label, placeholder, type = 'text', icon: Icon, prefix }: Props) {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label className="text-[14px] text-accent" htmlFor={field.name}>
        {label}
      </label>

      <div
        className={cn(
          'bg-white border border-[#e5e8ec] rounded-[8px] h-12 flex items-center px-4 gap-2 outline-none focus-within:border-secondary transition-colors',
          Icon && 'pl-3'
        )}
      >
        {Icon && <Icon size={14} className="text-[#94a3b8] shrink-0" />}

        {prefix && <span className="text-[14px] text-[#94a3b8] whitespace-nowrap shrink-0">{prefix}</span>}

        <input
          id={field.name}
          type={type}
          placeholder={placeholder}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          className="flex-1 min-w-0 text-[16px] text-accent placeholder:text-[#94a3b8] outline-none"
        />
      </div>

      <FieldError errors={field.state.meta.errors} />
    </div>
  );
}
