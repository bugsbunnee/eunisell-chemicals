import { ChevronDownIcon } from 'lucide-react';

import { useFieldContext } from '../../../forms/form-context';
import FieldError from './field-error';

interface Props {
  label: string;
  placeholder?: string;
  options: string[] | { label: string; value: string }[];
}

export default function JobSelectField({ label, placeholder = 'Select an option', options }: Props) {
  const field = useFieldContext<string>();

  const normalized = options.map((option) => (typeof option === 'string' ? { label: option, value: option } : option));

  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label className="text-[14px] text-accent" htmlFor={field.name}>
        {label}
      </label>

      <div className="relative">
        <select
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          className="w-full h-12 bg-[#efefef] border border-[#e5e8ec] rounded-[8px] pl-4 pr-10 text-[16px] text-accent outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
        >
          <option value="">{placeholder}</option>

          {normalized.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDownIcon size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]" />
      </div>

      <FieldError errors={field.state.meta.errors} />
    </div>
  );
}
