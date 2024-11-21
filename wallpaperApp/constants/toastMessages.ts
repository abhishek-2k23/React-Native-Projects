import Toast from "react-native-root-toast"

export const toastMessage = {
  success: (message: string) =>
    Toast.show(message, {
      duration: Toast.durations.LONG,
    }),
  error: (message: string) =>
    Toast.show(message, {
      duration: Toast.durations.LONG,
    }),
}
