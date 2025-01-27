import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export type ConfirmModalType = {
  title: string;
  text: string;
  confirmText?: string;
  cancelText?: string;
};

const MySwal = withReactContent(Swal);

export const ConfirmModal = ({
  title,
  text,
  confirmText = "Ja, doorgaan",
  cancelText = "Annuleren",
}: ConfirmModalType) => {
  return MySwal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: true,
  });
};
