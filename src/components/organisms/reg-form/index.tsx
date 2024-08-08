import { useRegFormContext } from './reducer';

type StepFormProps = {
  steps: JSX.Element[];
};

const StepForm = ({ steps }: StepFormProps) => {
  const { state } = useRegFormContext();

  const render = () => {
    switch (state.step) {
      case 0:
        return steps[0];
      case 1:
        return steps[1];
      case 2:
        return steps[2];
      case 3:
        return steps[3];
      case 4:
        return steps[4];
      case 5:
        return steps[5];
      case 6:
        return steps[6];
      case 7:
        return steps[7];
      case 8:
        return steps[8];
      case 9:
        return steps[9];
      case 10:
        return steps[10];
      case 11:
        return steps[11];
      default:
        throw new Error('Invalid step');
    }
  };

  return (
    <div className="md:px-[10px] mt-4">
      <div className="w-full flex flex-col gap-3 overflow-hidden">{render()}</div>
    </div>
  );
};

export default StepForm;
