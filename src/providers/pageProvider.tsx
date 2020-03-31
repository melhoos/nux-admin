import React, {ReactNode, useState} from 'react';

enum Pages {
    Buzzword = 'Buzzwords'
}

const initPage = Pages.Buzzword

const PageContext = React.createContext<[Pages, Function]>([initPage, () => {}])

interface Props {
    children: ReactNode
}

const PageProvider = (props: Props) => {
    const [state, setState] = useState<Pages>(Pages.Buzzword);
    return (
        <PageContext.Provider value={[state, setState]}>
            {props.children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider, Pages }
