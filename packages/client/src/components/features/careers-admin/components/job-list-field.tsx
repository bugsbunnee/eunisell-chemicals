import { PlusIcon, Trash2Icon } from 'lucide-react';
import { useFieldContext } from '../../../forms/form-context';
import FieldError from './field-error';

interface Props {
  label: string;
  placeholder?: string;
  addLabel?: string;
  emptyLabel?: string;
  multiline?: boolean;
}

export default function JobListField({ label, placeholder, addLabel = 'Add Item', emptyLabel = 'Nothing added yet.', multiline = false }: Props) {
  const field = useFieldContext<string[]>();
  const items = field.state.value;

  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label className="text-[14px] text-accent">{label}</label>

      <div className="flex flex-col gap-2">
        {items.length === 0 && <p className="text-[13px] text-[#94a3b8]">{emptyLabel}</p>}

        {items.map((value, index) =>
          multiline ? (
            <div key={index} className="flex items-start gap-2">
              <textarea
                rows={2}
                placeholder={placeholder}
                value={value}
                onChange={(e) => field.replaceValue(index, e.target.value)}
                onBlur={field.handleBlur}
                className="flex-1 bg-white border border-[#e5e8ec] rounded-[8px] px-4 py-3 text-[15px] text-accent placeholder:text-[#94a3b8] outline-none focus:border-secondary transition-colors resize-none"
              />
              <button
                type="button"
                onClick={() => field.removeValue(index)}
                className="shrink-0 size-10 flex items-center justify-center rounded-[8px] border border-[#e5e8ec] text-[#94a3b8] hover:text-destructive hover:border-destructive/40 transition-colors"
              >
                <Trash2Icon size={14} />
              </button>
            </div>
          ) : (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => field.replaceValue(index, e.target.value)}
                onBlur={field.handleBlur}
                className="flex-1 bg-white border border-[#e5e8ec] rounded-[8px] h-11 px-4 text-[15px] text-accent placeholder:text-[#94a3b8] outline-none focus:border-secondary transition-colors"
              />
              <button
                type="button"
                onClick={() => field.removeValue(index)}
                className="shrink-0 size-10 flex items-center justify-center rounded-[8px] border border-[#e5e8ec] text-[#94a3b8] hover:text-destructive hover:border-destructive/40 transition-colors"
              >
                <Trash2Icon size={14} />
              </button>
            </div>
          )
        )}

        <button type="button" onClick={() => field.pushValue('')} className="self-start flex items-center gap-1.5 text-[13px] text-secondary hover:underline">
          <PlusIcon size={12} />
          {addLabel}
        </button>
      </div>

      <FieldError errors={field.state.meta.errors} />
    </div>
  );
}
