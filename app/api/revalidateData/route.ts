import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.log("Unauthorized request to revalidateData");
    return new Response('Unauthorized', {
      status: 401,
    });
  }
  console.log("Successful request to revalidateData");
  revalidateTag("weatherData");
  return Response.json({ success: true });
}
