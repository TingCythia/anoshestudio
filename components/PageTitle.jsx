import { useEffect } from "react";

const PageTitle = (title) => {

    useEffect(() => {
        document.title = `Anoshe-${title}`;
    }, [title]);

    return null;
}

export default PageTitle