import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.VALIDATION_CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  revalidateTag("weatherData");
  return Response.json({ success: true });
}
