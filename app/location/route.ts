import { info } from "@libs/client/InfoData";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect(info.location.mapAddress.naver);
}
