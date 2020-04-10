enum PageType {
    Buzzwords
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

]

const InitPage = Pages[0];

export default Page
export { Pages, InitPage }