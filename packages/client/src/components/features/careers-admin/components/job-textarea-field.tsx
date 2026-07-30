import { useFieldContext } from '../../../forms/form-context';
import FieldError from './field-error';

interface Props {
  label: string;
  placeholder?: string;
  rows?: number;
}

export default function JobTextAreaField({ label, placeholder, rows = 3 }: Props) {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label className="text-[14px] text-accent" htmlFor={field.name}>
        {label}
      </label>

      <textarea
        id={field.name}
        placeholder={placeholder}
        rows={rows}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        className="bg-white border border-[#e5e8ec] rounded-[8px] px-4 py-3 text-[16px] text-accent placeholder:text-[#94a3b8] outline-none focus:border-secondary transition-colors resize-none w-full"
      />

      <FieldError errors={field.state.meta.errors} />
    </div>
  );
}
