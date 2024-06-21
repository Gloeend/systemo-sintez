import {lazy} from "react";

export const lazyImportPage = (path: string) => lazy(async () => {
    return await import(`../../pages/${path}/index.ts`);
});

export const lazyImportFeature = (path: string) => lazy(async () => {
    return await import(`../../features/${path}/index.ts`);
});


export const lazyImportWidget = (path: string) => lazy(async () => {
    return await import(`../../widgets/${path}/index.ts`);
});

export const lazyImportEntity = (path: string) => lazy(async () => {
    return await import(`../../entities/${path}/index.ts`);
});

