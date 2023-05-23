import { PrismaClient } from "@prisma/client"

export interface ImageInfo {
    // name: string,
    data: Buffer,
    classification: number,
    mimeType: string,
}

// TODO: now the database increments the id.
// We want to allocate it ahead of time in order to provide better use experience.
export async function putImage(image: ImageInfo): Promise<number> {
    const prisma = new PrismaClient();
    const result = await prisma.images.create({
        data: image,
    });

    return result.id;
}

export async function fetchClass(classification: number, excludeIds: number[], limit: number): Promise<ImageInfo[]> {
    const prisma = new PrismaClient();
    const result = await prisma.images.findMany({
        where: {
            classification: classification,
            NOT: {
                id: {
                    in: excludeIds
                }
            }
        },
        take: limit,
    });

    return result;
}