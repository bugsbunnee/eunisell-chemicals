import React from 'react';

import { Button } from '../ui/button';
import { useFormContext } from './form-context';

interface Props {
  label: string;
}

const SubmitButton: React.FC<Props> = ({ label }) => {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <Button
          disabled={!canSubmit || isSubmitting}
          className="bg-sidebar-primary w-full h-16 font-bold text-base rounded-[2px] leading-6 text-white uppercase"
        >
          {isSubmitting ? '...' : label}
        </Button>
      )}
    />
  );
};

export default SubmitButton;
