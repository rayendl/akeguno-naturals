import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");

    // We don't have a specific secret yet, so we just enable it for Presentation Tool preview
    // In a production app, you can validate a Sanity Draft Viewer token here.
    const mode = await draftMode();
    mode.enable();

    // The Sanity Presentation Tool might send a `path` param indicating where to redirect
    const path = searchParams.get("path") || "/";

    redirect(path);
}
