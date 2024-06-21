import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {lazyImportPage} from "@shared/utils";
import {useSetUserFromCookie} from "@shared/hooks/useSetUserFromCookie.ts";

const Home = lazyImportPage("home");
export const AppRouter = () => {
  useSetUserFromCookie();

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense fallback={<span>loading...</span>}>
            <Home/>
          </Suspense>
        }
      />
      {/*} />*/}
      {/*<Route path="*" element={*/}
      {/*    <Suspense fallback={<span>loading...</span>}>*/}
      {/*        <h3 className="text-center py-3.5 text-26px mt-52">404 error</h3>*/}
      {/*        <p className="text-center text-20px">*/}
      {/*            Не лезь сюда, щенок*/}
      {/*        </p>*/}
      {/*    </Suspense>*/}
      {/*} />*/}
    </Routes>
  )
}