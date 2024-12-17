import data from './data.json'

export async function GET() {
    await new Promise(resolve => setTimeout(resolve, 6000))

    return Response.json(data)
}