export interface IOtpFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsAcceptRules: React.Dispatch<React.SetStateAction<boolean>>;
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}