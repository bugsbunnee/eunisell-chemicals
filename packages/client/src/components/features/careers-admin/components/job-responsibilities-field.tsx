import { PlusIcon, Trash2Icon } from 'lucide-react';
import { useFieldContext } from '../../../forms/form-context';
import FieldError from './field-error';

interface ResponsibilityGroup {
  title: string;
  items: string[];
}

export default function JobResponsibilitiesField() {
  const field = useFieldContext<ResponsibilityGroup[]>();
  const groups = field.state.value;

  return (
    <div className="flex flex-col gap-3 w-full text-left">
      <label className="text-[14px] text-accent">What You Will Do</label>

      <div className="flex flex-col gap-4">
        {groups.length === 0 && <p className="text-[13px] text-[#94a3b8]">No responsibility sections added yet.</p>}

        {groups.map((group, index) => (
          <div key={index} className="bg-[#fbfbfc] border border-[#e5e8ec] rounded-[8px] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Section title, e.g. Client Relationship Management"
                value={group.title}
                onChange={(e) => field.replaceValue(index, { ...group, title: e.target.value })}
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

            <div className="flex flex-col gap-2 pl-2">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-secondary/60 shrink-0" />
                  <input
                    type="text"
                    placeholder="Responsibility bullet point"
                    value={item}
                    onChange={(e) => {
                      const nextItems = [...group.items];
                      nextItems[itemIndex] = e.target.value;
                      field.replaceValue(index, { ...group, items: nextItems });
                    }}
                    className="flex-1 bg-white border border-[#e5e8ec] rounded-[8px] h-10 px-3 text-[14px] text-accent placeholder:text-[#94a3b8] outline-none focus:border-secondary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => field.replaceValue(index, { ...group, items: group.items.filter((_, i) => i !== itemIndex) })}
                    className="shrink-0 size-8 flex items-center justify-center rounded-[6px] text-[#94a3b8] hover:text-destructive transition-colors"
                  >
                    <Trash2Icon size={12} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => field.replaceValue(index, { ...group, items: [...group.items, ''] })}
                className="self-start flex items-center gap-1.5 text-[12px] text-secondary hover:underline pl-3"
              >
                <PlusIcon size={10} />
                Add Bullet Point
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => field.pushValue({ title: '', items: [''] })}
          className="self-start flex items-center gap-1.5 text-[13px] text-secondary hover:underline"
        >
          <PlusIcon size={12} />
          Add Responsibility Section
        </button>
      </div>

      <FieldError errors={field.state.meta.errors} />
    </div>
  );
}
