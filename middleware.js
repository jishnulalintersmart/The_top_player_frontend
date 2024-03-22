const { NextResponse } = require("next/server");

export default function middleware(req) {
  const verifytoken = req.cookies.get("UT");
  let url = req.nextUrl.pathname;
  if (url.includes("/user") && !verifytoken) {
    if (url.includes("/ar/user")) {
      return NextResponse.redirect("https://www.thetopplayer.com/ar");
    } else {
      return NextResponse.redirect("https://www.thetopplayer.com/en");
    }
  }
}
