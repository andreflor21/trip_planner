import { Prisma, Tag } from '@prisma/client';

export interface TagRepository {
    save(data: Prisma.TagCreateInput): Promise<Tag>;
    list(): Promise<Tag[]>;
    findByTagName(tagName: string): Promise<Tag | null>;
    update(data: Prisma.TagUpdateInput): Promise<void>;
    delete(id: string): Promise<void>;
}
