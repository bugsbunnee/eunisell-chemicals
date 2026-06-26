import React from 'react';
import { useFieldContext } from '../../forms/form-context';

interface Props {
  label: string;
}

const CheckboxField: React.FC<Props> = ({ label }) => {
  const field = useFieldContext<boolean>();

  return (
    <div className="flex items-center gap-2.5">
      <input
        id={field.name}
        type="checkbox"
        checked={field.state.value}
        onChange={(e) => field.handleChange(e.target.checked)}
        className="size-4.5 rounded-[2.5px] border-[#767676] cursor-pointer accent-secondary"
      />

      <label htmlFor={field.name} className="text-[14px] leading-5 text-card-foreground cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
