type WhatsAppConfirmationInput = {
  name: string;
  phone: string;
  city: string;
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Normalize Indian / E.164 numbers to WhatsApp "to" format (no +). */
export function toWhatsAppRecipient(phone: string) {
  let digits = digitsOnly(phone);
  if (!digits) return "";

  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.length === 10) digits = `91${digits}`;
  if (digits.startsWith("0") && digits.length === 11) {
    digits = `91${digits.slice(1)}`;
  }

  return digits;
}

function isConfigured() {
  return Boolean(
    process.env.WHATSAPP_TOKEN &&
      process.env.WHATSAPP_PHONE_NUMBER_ID &&
      process.env.WHATSAPP_TEMPLATE_NAME,
  );
}

/**
 * Sends a template confirmation via WhatsApp Cloud API.
 * Never throws — failures are logged so email success is preserved.
 */
export async function sendWhatsAppConfirmation(
  input: WhatsAppConfirmationInput,
): Promise<{ sent: boolean; skipped?: boolean }> {
  if (!isConfigured()) {
    console.warn(
      "WhatsApp skipped: set WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, and WHATSAPP_TEMPLATE_NAME",
    );
    return { sent: false, skipped: true };
  }

  const to = toWhatsAppRecipient(input.phone);
  if (!to) {
    console.warn("WhatsApp skipped: invalid phone number");
    return { sent: false, skipped: true };
  }

  const token = process.env.WHATSAPP_TOKEN!;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID!;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME!;
  const language = process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en";
  const version = process.env.WHATSAPP_API_VERSION || "v21.0";
  const paramCount = Math.min(
    2,
    Math.max(0, Number(process.env.WHATSAPP_TEMPLATE_BODY_PARAMS ?? "2") || 0),
  );
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/messages`;

  const bodyParams = [
    { type: "text" as const, text: input.name },
    { type: "text" as const, text: input.city },
  ].slice(0, paramCount);

  const payload = {
    messaging_product: "whatsapp",
    to,
    type: "template",
    template: {
      name: templateName,
      language: { code: language },
      ...(bodyParams.length > 0
        ? {
            components: [
              {
                type: "body",
                parameters: bodyParams,
              },
            ],
          }
        : {}),
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("WhatsApp confirmation failed:", response.status, detail);
      return { sent: false };
    }

    return { sent: true };
  } catch (error) {
    console.error("WhatsApp confirmation error:", error);
    return { sent: false };
  }
}
