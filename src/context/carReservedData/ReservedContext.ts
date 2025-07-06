import { createContext } from 'react';
import type { SchemaFormValues } from '../../zodSchema/rentSchema';
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import type { TCar } from '../../types/CarType';

interface ReservedContextType {
  handleSubmit: UseFormHandleSubmit<SchemaFormValues>;
  control: Control<SchemaFormValues>;
  errors: FieldErrors<SchemaFormValues>;
  isSubmitting: boolean;
  onSubmit: (data: SchemaFormValues) => void;
  formInfo: SchemaFormValues | null;
  setFormInfo: React.Dispatch<React.SetStateAction<SchemaFormValues | null>>;
  mainCar: TCar | null;
  setMainCar: React.Dispatch<React.SetStateAction<TCar | null>>;
}
export const ReservedContext = createContext<ReservedContextType>({
  handleSubmit: () => {
    throw new Error('handleSubmit is not implemented');
  },
  control: {} as Control<SchemaFormValues>,
  errors: {},
  isSubmitting: false,
  onSubmit: () => {
    throw new Error('onSubmit is not implemented');
  },
  formInfo: null,
  setFormInfo: () => {
    throw new Error('setFormInfo is not implemented');
  },
  mainCar: null,
  setMainCar: () => {
    throw new Error('setMainCar is not implemented');
  },
});
