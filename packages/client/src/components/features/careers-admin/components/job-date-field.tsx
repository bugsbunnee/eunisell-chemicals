import { type LucideIcon } from 'lucide-react';

import { useFieldContext } from '../../../forms/form-context';
import FieldError from './field-error';

interface Props {
  label: string;
  icon: LucideIcon;
}

export default function JobDateField({ label, icon: Icon }: Props) {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label className="text-[14px] text-accent" htmlFor={field.name}>
        {label}
      </label>

      <div className="bg-white border border-[#e5e8ec] rounded-[8px] h-12 flex items-center px-4 gap-2 pl-3 outline-none focus-within:border-secondary transition-colors">
        <Icon size={14} className="text-[#94a3b8] shrink-0" />

        <input
          id={field.name}
          type="date"
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          className="flex-1 min-w-0 text-[16px] text-accent outline-none scheme-light"
        />
      </div>

      <FieldError errors={field.state.meta.errors} />
    </div>
  );
}
