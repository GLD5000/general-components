import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const params = {
      format: "pdf",
    };
    const queryString = new URLSearchParams(params).toString();
    const baseUrl = `https://data.london.gov.uk/api/dataset/gla-adult-skills-fund/`;
    const url = `${baseUrl}?${queryString}`;
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return NextResponse.json(
      data,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}