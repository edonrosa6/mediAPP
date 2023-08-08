import Swal from "sweetalert2"

export const successfullMessage = (title) => {
    Swal.fire({
      title: title,
      icon: "success",
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      toast: true,
      position: "bottom-left",
      customClass: {
        title: "text-white",
      },
      background: "#111111"
    })
}