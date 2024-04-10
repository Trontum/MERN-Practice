
export interface Book{
    "_id": number,
    "title": string,
    "isbn": string,
    "pageCount": number,
    "publishedDate": {
        "$date": string
    },
    "thumbnailUrl": string,
    "shortDescription"?: string,
    "rating": number,
    "authors": string[],
    "category": string
}