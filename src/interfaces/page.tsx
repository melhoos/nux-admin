enum PageType {
    Buzzwords,
    Conferences
}

interface Page {
    type: PageType,
    url: string,
    name: string
}

const Pages: Page[] = [
    {
        type: PageType.Buzzwords,
        url: "/buzzwords",
        name: "Faguttrykk"
    },
    {
        type: PageType.Conferences,
        url: "/conferences",
        name: "Konferanser"
    },

]

const InitPage = Pages[0];

export default Page
export { Pages, InitPage }