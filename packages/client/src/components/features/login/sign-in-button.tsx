import React from 'react';

import { LoaderCircleIcon } from 'lucide-react';
import { useFormContext } from '../../forms/form-context';
import { Button } from '../../ui/button';

const SignInButton: React.FC = () => {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting] as const}
      children={([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="w-full h-14 bg-secondary hover:bg-secondary/90 text-[18px] text-white rounded-[6px] shadow-[0px_4px_6px_rgba(0,131,206,0.25)] font-normal flex items-center justify-center gap-2"
        >
          {isSubmitting ? <LoaderCircleIcon size={20} className="animate-spin" /> : 'Sign In'}
        </Button>
      )}
    />
  );
};

export default SignInButton;
