import { NextResponse } from "next/server"

// These pages sit behind the dashboard password check in the route that
// renders them. They report only whether a variable is set — never its value.

const VERCEL_ENV_URL =
  "https://vercel.com/website16/v0-madronelove-website/settings/environment-variables"

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function shell(title: string, body: string): string {
  return `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
  body{margin:0;padding:40px 20px;background:#f5f6f4;color:#3d4445;
    font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif}
  .w{max-width:640px;margin:0 auto}
  h1{font-size:22px;margin:0 0 6px}
  .sub{color:#7a8385;font-size:14px;margin:0 0 28px}
  ul.vars{list-style:none;padding:0;margin:0 0 28px;border:1px solid #c4d0d4;border-radius:8px;overflow:hidden}
  ul.vars li{display:flex;align-items:center;gap:10px;padding:12px 16px;background:#fff;
    border-bottom:1px solid #e6ecee;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px}
  ul.vars li:last-child{border-bottom:0}
  .ok{color:#3a6b3f;font-weight:700}
  .missing{color:#c17254;font-weight:700}
  .tag{margin-left:auto;font-family:inherit;font-size:12px;color:#7a8385}
  ol{padding-left:20px} ol li{margin-bottom:10px}
  code{background:#e8e6e1;padding:2px 6px;border-radius:4px;
    font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;word-break:break-all}
  pre{background:#3d4445;color:#f5f6f4;padding:14px 16px;border-radius:8px;overflow-x:auto;
    font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;white-space:pre-wrap;word-break:break-all}
  a{color:#c17254}
  .note{font-size:13px;color:#7a8385;border-top:1px solid #c4d0d4;padding-top:16px;margin-top:28px}
</style></head><body><div class="w">${body}</div></body></html>`
}

function varList(): string {
  const vars: [string, boolean][] = [
    ["GOOGLE_CLIENT_ID", Boolean(process.env.GOOGLE_CLIENT_ID)],
    ["GOOGLE_CLIENT_SECRET", Boolean(process.env.GOOGLE_CLIENT_SECRET)],
    ["GOOGLE_TASKS_REFRESH_TOKEN", Boolean(process.env.GOOGLE_TASKS_REFRESH_TOKEN)],
  ]
  return `<ul class="vars">${vars
    .map(
      ([name, set]) =>
        `<li><span class="${set ? "ok" : "missing"}">${set ? "&#10003;" : "&#10007;"}</span>` +
        `<span>${name}</span>` +
        `<span class="tag">${set ? "set" : "not set in this deployment"}</span></li>`,
    )
    .join("")}</ul>`
}

/** Shown when the client ID or secret hasn't reached this deployment yet. */
export function setupPage({ redirectUri }: { redirectUri: string }): NextResponse {
  const body = `
<h1>Google Tasks setup</h1>
<p class="sub">Status of the three variables <em>in the deployment currently serving this request</em>.</p>
${varList()}
<ol>
  <li>Add any missing variable at
      <a href="${VERCEL_ENV_URL}" target="_blank" rel="noopener">your Vercel environment variables</a>,
      scoped to <strong>Production</strong>.</li>
  <li><strong>Redeploy.</strong> Vercel binds variables to a deployment when it is built, so a saved
      variable does nothing until a new deployment is promoted to production.</li>
  <li>Reload this page. Anything above still marked <span class="missing">&#10007;</span> did not reach the running code.</li>
</ol>
<p>This deployment will send Google exactly this redirect URI, which must be listed verbatim under
<strong>Authorized redirect URIs</strong> on your OAuth client:</p>
<pre>${escapeHtml(redirectUri)}</pre>
<p class="note">If that host is not your usual domain, you reached this page through a preview URL.
Start from your production domain instead, or Google will reject the sign-in.
Values are never displayed here, only whether each variable is present.</p>`
  return new NextResponse(shell("Google Tasks setup", body), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}

/** Shown once, after Google hands back a refresh token. */
export function tokenPage(refreshToken: string): NextResponse {
  const body = `
<h1>Google Tasks connected</h1>
<p class="sub">One step left. This token is shown only once and is not stored anywhere by this app.</p>
<pre>${escapeHtml(refreshToken)}</pre>
<ol>
  <li>Copy the value above.</li>
  <li>Add it at <a href="${VERCEL_ENV_URL}" target="_blank" rel="noopener">your Vercel environment variables</a>
      as <code>GOOGLE_TASKS_REFRESH_TOKEN</code>, scoped to <strong>Production</strong>.</li>
  <li>Redeploy, then reload the dashboard. Tasks should load.</li>
</ol>
<p class="note">Lost it? Revoke this app at
<a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener">myaccount.google.com/permissions</a>
and run the connect flow again — Google only issues a refresh token on first consent.</p>`
  return new NextResponse(shell("Google Tasks connected", body), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}
