import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

    let moduleName;
    switch (params.slug)
    {
        case "finances":
            moduleName = "Finances";
            break;
        case "health":
            moduleName = "Health";
            break;
    }
    

    return {
        moduleName: moduleName
    };
};