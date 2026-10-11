import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { validateVolunteer } from "@/lib/validate";

export async function POST(request: Request) {
  const body = await request.json();
  const problem = validateVolunteer(body);
  if (problem) {
    return NextResponse.json({ error: problem }, { status: 400 });
  }
  const { error } = await supabase.from("volunteers").insert({
    name: body.name.trim(),
    email: body.email.trim(),
    message: body.message ?? null,
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}