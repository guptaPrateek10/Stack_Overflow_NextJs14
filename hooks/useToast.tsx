
import { toast } from 'sonner';
const useToast = () => {
  const Success = (message:string) => {
    toast.success(message);
  };
  const Error = (message:string) => {
    toast.error(message);
  };
  const Info = (message:string) => {
    toast.info(message);
  };
  return {
    Success,
    Error,
    Info,
  };
};
export default useToast;
