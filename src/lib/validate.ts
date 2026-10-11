export function validateVolunteer(body: {
  name?: string;
  email?: string;
}): string | null {
  if (!body.name || body.name.trim() === "") return "Name is required";
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "A valid email is required";
  }
  return null;
}