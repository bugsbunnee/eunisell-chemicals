import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

import TextField from './TextField';
import TextAreaField from './TextAreaField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextAreaField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
