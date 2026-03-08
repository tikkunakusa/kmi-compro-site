 
export async function POST(request: Request) {
   const { first_name, last_name, email, phone_number, services, message } = await request.json();
    console.log('Received inquiry:', { first_name, last_name, email, phone_number, services, message });
    return Response.json({ success: true, message: "Inquiry received successfully" }, { status: 200 });
}