"use server";

export async function sendContactEmail(formData: FormData) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const response = await fetch(`${apiUrl}/api/v1/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { error: errorData.detail || "Failed to send message to the server." };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("sendContactEmail fetch error:", error);
    return { error: "Failed to connect to the server. Please try again later." };
  }
}
