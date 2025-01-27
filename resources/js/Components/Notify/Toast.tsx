import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000, // 5 seconds
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const ToastSuccess = (title: string) => {
  Toast.fire({
    icon: "success",
    title,
  });
};

export const ToastError = (title: string, subtitle: string) => {
  Toast.fire({
    icon: "error",
    html: `
      <strong>${title}</strong>
      <div style="font-size: 12px;">${subtitle}</div>
    `,
  });
};
