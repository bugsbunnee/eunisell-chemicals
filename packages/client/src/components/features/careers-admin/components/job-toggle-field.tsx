import { useFieldContext } from '../../../forms/form-context';
import { cn } from '../../../../lib/utils';

export default function JobToggleField({ label }: { label: string }) {
  const field = useFieldContext<boolean>();

  return (
    <div className="bg-[#f8fafc] border border-[#e5e8ec] rounded-[8px] h-13 flex items-center justify-between px-4 w-full">
      <span className="text-[14px] text-accent tracking-[0.0684px]">{label}</span>

      <button
        type="button"
        role="switch"
        aria-checked={field.state.value}
        onClick={() => field.handleChange(!field.state.value)}
        className={cn('h-5 w-10 rounded-full flex items-center px-0.5 transition-colors shrink-0', field.state.value ? 'bg-secondary justify-end' : 'bg-[#cbd5e1] justify-start')}
      >
        <span className="size-4 rounded-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </button>
    </div>
  );
}
