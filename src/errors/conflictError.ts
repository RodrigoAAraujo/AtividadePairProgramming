export default function conflictError(message: string) {
  return {
    name: "ConflictError",
    message: message
  }
}