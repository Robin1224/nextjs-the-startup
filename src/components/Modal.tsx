import * as Dialog from '@radix-ui/react-dialog';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: Props) => {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-5">
        {props.children}
      </Dialog.Content>
    </Dialog.Root>
  );
}